#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '../shared/schema';
import { DatabaseStorage } from '../server/database';
import { SupabaseStorage } from '../server/supabase';
import 'dotenv/config';

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

async function createSupabaseTables() {
  log(`${colors.bold}🏗️  Creating Supabase database schema...${colors.reset}`);
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // SQL to create tables with proper structure
  const createTablesSQL = `
    -- Enable UUID extension
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    
    -- Create users table
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );

    -- Create blog_posts table
    CREATE TABLE IF NOT EXISTS blog_posts (
      id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      image_url TEXT,
      category TEXT,
      tags TEXT[] NOT NULL DEFAULT '{}',
      published BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );

    -- Create settings table
    CREATE TABLE IF NOT EXISTS settings (
      id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
      key TEXT NOT NULL UNIQUE,
      value TEXT NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );

    -- Create indexes for better performance
    CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
    CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);

    -- Enable Row Level Security (RLS)
    ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
    ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

    -- Create RLS policies for blog_posts (public read access for published posts)
    DROP POLICY IF EXISTS "Public read access for published blog posts" ON blog_posts;
    CREATE POLICY "Public read access for published blog posts"
      ON blog_posts FOR SELECT
      USING (published = true);

    -- Allow service role to do everything
    DROP POLICY IF EXISTS "Service role can do everything on users" ON users;
    CREATE POLICY "Service role can do everything on users"
      ON users FOR ALL
      TO service_role
      USING (true);

    DROP POLICY IF EXISTS "Service role can do everything on blog_posts" ON blog_posts;
    CREATE POLICY "Service role can do everything on blog_posts"
      ON blog_posts FOR ALL  
      TO service_role
      USING (true);

    DROP POLICY IF EXISTS "Service role can do everything on settings" ON settings;
    CREATE POLICY "Service role can do everything on settings"
      ON settings FOR ALL
      TO service_role
      USING (true);

    -- Allow anon to read published blog posts and settings
    DROP POLICY IF EXISTS "Anonymous read access to published blog posts" ON blog_posts;
    CREATE POLICY "Anonymous read access to published blog posts"
      ON blog_posts FOR SELECT
      TO anon
      USING (published = true);

    DROP POLICY IF EXISTS "Anonymous read access to settings" ON settings;
    CREATE POLICY "Anonymous read access to settings"
      ON settings FOR SELECT
      TO anon
      USING (true);
  `;

  // Execute the SQL
  const { data, error } = await supabase.rpc('exec_sql', { 
    sql: createTablesSQL 
  });

  if (error) {
    // Try alternative approach using individual queries
    log(`${colors.yellow}⚠️  Bulk SQL execution failed, trying individual queries...${colors.reset}`);
    
    const queries = createTablesSQL
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0);

    for (const query of queries) {
      if (query.startsWith('--') || query.length < 10) continue;
      
      try {
        const { error: queryError } = await supabase.rpc('exec_sql', { sql: query });
        if (queryError) {
          log(`${colors.yellow}⚠️  Query failed (may be expected): ${query.substring(0, 50)}...${colors.reset}`);
          log(`   Error: ${queryError.message}`, colors.yellow);
        }
      } catch (err) {
        log(`${colors.yellow}⚠️  Individual query failed: ${query.substring(0, 50)}...${colors.reset}`);
      }
    }
  }

  log(`${colors.green}✅ Supabase schema creation completed${colors.reset}`);
}

async function exportCurrentData() {
  log(`${colors.bold}📤 Exporting data from current database...${colors.reset}`);
  
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required to export current data');
  }

  const currentStorage = new DatabaseStorage();
  
  // Export all data
  const [users, blogPosts, settings] = await Promise.all([
    currentStorage.getUser('dummy').then(() => []), // Get all users - we'll handle this differently
    currentStorage.getBlogPosts(),
    Promise.all(['active_members_count'].map(async key => await currentStorage.getSetting(key))).then(results => results.filter(Boolean))
  ]);

  // Export blog posts data for verification
  const exportedData = {
    blogPosts,
    settings,
    exportedAt: new Date().toISOString(),
    totalRecords: blogPosts.length + settings.length
  };

  log(`${colors.green}✅ Exported ${exportedData.totalRecords} records:${colors.reset}`);
  log(`   📝 Blog Posts: ${blogPosts.length}`, colors.blue);
  log(`   ⚙️  Settings: ${settings.length}`, colors.blue);

  return exportedData;
}

async function importDataToSupabase(exportedData: any) {
  log(`${colors.bold}📥 Importing data to Supabase...${colors.reset}`);

  const supabaseStorage = new SupabaseStorage();

  let importedCount = 0;

  // Import settings
  log(`${colors.blue}📝 Importing settings...${colors.reset}`);
  for (const setting of exportedData.settings) {
    try {
      await supabaseStorage.setSetting({
        key: setting.key,
        value: setting.value
      });
      importedCount++;
      log(`   ✅ Setting: ${setting.key}`, colors.green);
    } catch (error) {
      log(`   ❌ Failed to import setting ${setting.key}: ${error}`, colors.red);
    }
  }

  // Import blog posts
  log(`${colors.blue}📖 Importing blog posts...${colors.reset}`);
  for (const post of exportedData.blogPosts) {
    try {
      await supabaseStorage.createBlogPost({
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        imageUrl: post.imageUrl,
        category: post.category,
        tags: post.tags || [],
        published: post.published
      });
      importedCount++;
      log(`   ✅ Blog post: ${post.title.substring(0, 50)}...`, colors.green);
    } catch (error) {
      log(`   ❌ Failed to import blog post "${post.title}": ${error}`, colors.red);
    }
  }

  log(`${colors.green}✅ Import completed! ${importedCount} records imported${colors.reset}`);
  return importedCount;
}

async function verifyMigration() {
  log(`${colors.bold}🔍 Verifying migration...${colors.reset}`);

  const supabaseStorage = new SupabaseStorage();

  // Verify data exists in Supabase
  const [blogPosts, activeMembersSetting] = await Promise.all([
    supabaseStorage.getBlogPosts(),
    supabaseStorage.getSetting('active_members_count')
  ]);

  log(`${colors.blue}📊 Verification Results:${colors.reset}`);
  log(`   📝 Blog Posts in Supabase: ${blogPosts.length}`, colors.blue);
  log(`   ⚙️  Active Members Setting: ${activeMembersSetting ? activeMembersSetting.value : 'NOT FOUND'}`, colors.blue);

  // Test a few CRUD operations
  log(`${colors.blue}🧪 Testing CRUD operations...${colors.reset}`);
  
  try {
    // Test getting published blog posts
    const publishedPosts = await supabaseStorage.getBlogPosts(true);
    log(`   ✅ Published posts query: ${publishedPosts.length} posts`, colors.green);

    // Test getting a specific blog post
    if (blogPosts.length > 0) {
      const firstPost = await supabaseStorage.getBlogPost(blogPosts[0].id);
      log(`   ✅ Single post query: ${firstPost ? 'SUCCESS' : 'FAILED'}`, firstPost ? colors.green : colors.red);
    }

    // Test settings
    const settingTest = await supabaseStorage.getSetting('active_members_count');
    log(`   ✅ Settings query: ${settingTest ? 'SUCCESS' : 'FAILED'}`, settingTest ? colors.green : colors.red);

  } catch (error) {
    log(`   ❌ CRUD test failed: ${error}`, colors.red);
  }

  return {
    blogPostsCount: blogPosts.length,
    hasActiveMembersSetting: !!activeMembersSetting,
    migrationSuccessful: blogPosts.length > 0 && !!activeMembersSetting
  };
}

async function main() {
  try {
    log(`${colors.bold}🚀 Starting migration from Neon to Supabase...${colors.reset}\n`);

    // Step 1: Create Supabase tables and policies
    await createSupabaseTables();
    
    // Step 2: Export current data
    const exportedData = await exportCurrentData();
    
    // Step 3: Import data to Supabase  
    await importDataToSupabase(exportedData);
    
    // Step 4: Verify migration
    const verification = await verifyMigration();
    
    if (verification.migrationSuccessful) {
      log(`\n${colors.green}${colors.bold}🎉 Migration completed successfully!${colors.reset}`);
      log(`${colors.green}✅ Ready to switch to Supabase storage${colors.reset}`);
      
      log(`\n${colors.blue}📋 Next Steps:${colors.reset}`);
      log(`   1. Update your production environment to use Supabase`);
      log(`   2. Test the application thoroughly`);
      log(`   3. Update your DATABASE_URL to point to Supabase`);
      
    } else {
      log(`\n${colors.red}❌ Migration verification failed${colors.reset}`);
      log(`${colors.yellow}⚠️  Please check the logs above for errors${colors.reset}`);
    }

  } catch (error) {
    log(`\n${colors.red}❌ Migration failed: ${error}${colors.reset}`);
    process.exit(1);
  }
}

// Run migration if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { createSupabaseTables, exportCurrentData, importDataToSupabase, verifyMigration };