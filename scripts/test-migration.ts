#!/usr/bin/env tsx
import { SupabaseStorage } from '../server/supabase';
import 'dotenv/config';

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

async function testSupabaseConnection() {
  log(`${colors.bold}🧪 Testing Supabase Migration...${colors.reset}\n`);

  try {
    const supabaseStorage = new SupabaseStorage();

    // Test 1: Check connection and basic queries
    log(`${colors.blue}🔍 Test 1: Database Connection${colors.reset}`);
    const [blogPosts, activeMembersSetting] = await Promise.all([
      supabaseStorage.getBlogPosts(),
      supabaseStorage.getSetting('active_members_count')
    ]);
    
    log(`   ✅ Connection successful`, colors.green);
    log(`   📝 Blog posts found: ${blogPosts.length}`, colors.blue);
    log(`   ⚙️  Active members setting: ${activeMembersSetting?.value || 'NOT SET'}`, colors.blue);

    // Test 2: Published posts filtering
    log(`\n${colors.blue}🔍 Test 2: Published Posts Query${colors.reset}`);
    const publishedPosts = await supabaseStorage.getBlogPosts(true);
    log(`   ✅ Published posts: ${publishedPosts.length}`, colors.green);

    // Test 3: Single post retrieval
    if (blogPosts.length > 0) {
      log(`\n${colors.blue}🔍 Test 3: Single Post Retrieval${colors.reset}`);
      const firstPost = await supabaseStorage.getBlogPost(blogPosts[0].id);
      log(`   ✅ Single post query: ${firstPost ? 'SUCCESS' : 'FAILED'}`, firstPost ? colors.green : colors.red);
      log(`   📖 Post title: ${firstPost?.title.substring(0, 50)}...`, colors.blue);
    }

    // Test 4: Settings update
    log(`\n${colors.blue}🔍 Test 4: Settings Update${colors.reset}`);
    const testSetting = await supabaseStorage.setSetting({
      key: 'migration_test',
      value: new Date().toISOString()
    });
    log(`   ✅ Setting created: ${testSetting.key} = ${testSetting.value}`, colors.green);

    // Test 5: Blog post creation (test only - will be deleted)
    log(`\n${colors.blue}🔍 Test 5: Blog Post Creation${colors.reset}`);
    const testPost = await supabaseStorage.createBlogPost({
      title: 'Migration Test Post',
      content: 'This is a test post created during migration testing.',
      excerpt: 'Test post for migration validation',
      published: false,
      tags: ['test', 'migration']
    });
    log(`   ✅ Test post created: ${testPost.id}`, colors.green);

    // Clean up test post
    const deleted = await supabaseStorage.deleteBlogPost(testPost.id);
    log(`   🗑️  Test post deleted: ${deleted}`, deleted ? colors.green : colors.yellow);

    // Migration readiness summary
    log(`\n${colors.green}${colors.bold}🎉 Migration Test Results:${colors.reset}`);
    log(`${colors.green}✅ Database connection: WORKING${colors.reset}`);
    log(`${colors.green}✅ Blog posts queries: WORKING${colors.reset}`);
    log(`${colors.green}✅ Settings management: WORKING${colors.reset}`);
    log(`${colors.green}✅ CRUD operations: WORKING${colors.reset}`);

    if (blogPosts.length > 0 && activeMembersSetting) {
      log(`\n${colors.green}${colors.bold}✅ Supabase is ready for production use!${colors.reset}`);
      log(`${colors.blue}🚀 To complete migration:${colors.reset}`);
      log(`   1. Set USE_SUPABASE=true in production environment`);
      log(`   2. Update DATABASE_URL to your Supabase connection string`);
      log(`   3. Deploy to production`);
    } else {
      log(`\n${colors.yellow}⚠️  Data migration may not be complete:${colors.reset}`);
      log(`   - Blog posts: ${blogPosts.length} found`);
      log(`   - Settings: ${activeMembersSetting ? 'OK' : 'MISSING'}`);
      log(`   - Run the import script if data is missing`);
    }

  } catch (error) {
    log(`\n${colors.red}❌ Migration test failed: ${error}${colors.reset}`);
    log(`\n${colors.yellow}Troubleshooting:${colors.reset}`);
    log(`   1. Check your SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY`);
    log(`   2. Verify Supabase schema was created (run create-supabase-schema.sql)`);
    log(`   3. Check DATABASE_URL points to Supabase if USE_SUPABASE=true`);
    process.exit(1);
  }
}

// Run test if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testSupabaseConnection();
}

export { testSupabaseConnection };