#!/usr/bin/env tsx
import { SupabaseStorage } from '../server/supabase';
import { readFileSync } from 'fs';
import 'dotenv/config';

async function importData(filename?: string) {
  console.log('🔄 Importing data to Supabase...');
  
  // Find the most recent export file if no filename provided
  if (!filename) {
    const { readdirSync } = await import('fs');
    const files = readdirSync('.')
      .filter((file: string) => file.startsWith('export-') && file.endsWith('.json'))
      .sort()
      .reverse();
    
    if (files.length === 0) {
      throw new Error('No export file found. Run export-current-data.ts first.');
    }
    
    filename = files[0];
    console.log(`📁 Using export file: ${filename}`);
  }

  const exportedData = JSON.parse(readFileSync(filename, 'utf-8'));
  const supabaseStorage = new SupabaseStorage();
  
  let importedCount = 0;
  
  try {
    // Import settings first
    console.log('📝 Importing settings...');
    for (const setting of exportedData.settings) {
      try {
        await supabaseStorage.setSetting({
          key: setting.key,
          value: setting.value
        });
        importedCount++;
        console.log(`   ✅ Setting: ${setting.key} = ${setting.value}`);
      } catch (error) {
        console.error(`   ❌ Failed to import setting ${setting.key}:`, error);
      }
    }

    // Import blog posts
    console.log('📖 Importing blog posts...');
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
        console.log(`   ✅ Blog post: ${post.title.substring(0, 50)}...`);
      } catch (error) {
        console.error(`   ❌ Failed to import blog post "${post.title}":`, error);
      }
    }

    console.log(`✅ Import completed! ${importedCount}/${exportedData.totalRecords} records imported`);
    
    // Verify the import
    const [blogPosts, activeMembersSetting] = await Promise.all([
      supabaseStorage.getBlogPosts(),
      supabaseStorage.getSetting('active_members_count')
    ]);
    
    console.log('🔍 Verification:');
    console.log(`   📝 Blog Posts in Supabase: ${blogPosts.length}`);
    console.log(`   ⚙️  Active Members Setting: ${activeMembersSetting?.value || 'NOT FOUND'}`);
    
    return { importedCount, totalRecords: exportedData.totalRecords };
    
  } catch (error) {
    console.error('❌ Import failed:', error);
    throw error;
  }
}

// Run import if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const filename = process.argv[2];
  importData(filename).catch(console.error);
}

export { importData };