#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { randomUUID } from 'crypto';
import 'dotenv/config';

async function importDataDirect(filename?: string) {
  console.log('🔄 Importing data directly to Supabase...');
  
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
  }

  // Create Supabase client with service role key for admin operations
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  // Find the most recent export file if no filename provided
  if (!filename) {
    const { readdirSync } = await import('fs');
    const files = readdirSync('.')
      .filter((file: string) => file.startsWith('export-') && file.endsWith('.json'))
      .sort()
      .reverse();
    
    if (files.length === 0) {
      throw new Error('No export file found. Run export script first.');
    }
    
    filename = files[0];
    console.log(`📁 Using export file: ${filename}`);
  }

  const exportedData = JSON.parse(readFileSync(filename, 'utf-8'));
  let importedCount = 0;
  
  try {
    // Import settings first
    console.log('📝 Importing settings...');
    for (const setting of exportedData.settings) {
      try {
        // Check if setting exists
        const { data: existing } = await supabase
          .from('settings')
          .select('*')
          .eq('key', setting.key)
          .single();

        if (existing) {
          // Update existing setting
          const { error } = await supabase
            .from('settings')
            .update({
              value: setting.value,
              updated_at: new Date().toISOString()
            })
            .eq('key', setting.key);

          if (error) throw error;
          console.log(`   ✅ Updated setting: ${setting.key} = ${setting.value}`);
        } else {
          // Insert new setting
          const { error } = await supabase
            .from('settings')
            .insert({
              id: randomUUID(),
              key: setting.key,
              value: setting.value,
              updated_at: new Date().toISOString()
            });

          if (error) throw error;
          console.log(`   ✅ Created setting: ${setting.key} = ${setting.value}`);
        }
        
        importedCount++;
      } catch (error: any) {
        console.error(`   ❌ Failed to import setting ${setting.key}:`, error.message);
      }
    }

    // Import blog posts
    console.log('📖 Importing blog posts...');
    for (const post of exportedData.blogPosts) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            id: randomUUID(),
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            image_url: post.imageUrl,
            category: post.category,
            tags: post.tags || [],
            published: post.published || false,
            created_at: post.createdAt || new Date().toISOString(),
            updated_at: post.updatedAt || new Date().toISOString()
          });

        if (error) throw error;
        
        importedCount++;
        console.log(`   ✅ Blog post: ${post.title.substring(0, 50)}...`);
      } catch (error: any) {
        console.error(`   ❌ Failed to import blog post "${post.title}":`, error.message);
      }
    }

    console.log(`✅ Import completed! ${importedCount}/${exportedData.totalRecords} records imported`);
    
    // Verify the import
    const { data: blogPosts } = await supabase
      .from('blog_posts')
      .select('*');
      
    const { data: settings } = await supabase
      .from('settings')
      .select('*');
    
    console.log('🔍 Verification:');
    console.log(`   📝 Blog Posts in Supabase: ${blogPosts?.length || 0}`);
    console.log(`   ⚙️  Settings in Supabase: ${settings?.length || 0}`);
    
    const activeMembersSetting = settings?.find(s => s.key === 'active_members_count');
    console.log(`   👥 Active Members Count: ${activeMembersSetting?.value || 'NOT FOUND'}`);
    
    return { importedCount, totalRecords: exportedData.totalRecords };
    
  } catch (error) {
    console.error('❌ Import failed:', error);
    throw error;
  }
}

// Run import if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const filename = process.argv[2];
  importDataDirect(filename).catch(console.error);
}

export { importDataDirect };