#!/usr/bin/env tsx
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

async function exportLiveData() {
  console.log('🔄 Exporting data from running application...');
  
  try {
    // Get data from the currently running application
    const [blogPostsResponse, settingsResponse] = await Promise.all([
      fetch('http://localhost:5000/api/blog-posts'),
      fetch('http://localhost:5000/api/settings/active_members_count')
    ]);

    const blogPosts = await blogPostsResponse.json();
    const setting = await settingsResponse.json();

    const exportedData = {
      blogPosts: Array.isArray(blogPosts) ? blogPosts : [],
      settings: setting ? [setting] : [],
      exportedAt: new Date().toISOString(),
      totalRecords: (Array.isArray(blogPosts) ? blogPosts.length : 0) + (setting ? 1 : 0),
      source: 'live_application'
    };

    // Write to JSON file
    const filename = `export-live-${new Date().toISOString().split('T')[0]}.json`;
    writeFileSync(filename, JSON.stringify(exportedData, null, 2));

    console.log(`✅ Exported ${exportedData.totalRecords} records from live application to ${filename}`);
    console.log(`   📝 Blog Posts: ${exportedData.blogPosts.length}`);
    console.log(`   ⚙️  Settings: ${exportedData.settings.length}`);

    // Show sample of what's being exported
    if (exportedData.blogPosts.length > 0) {
      console.log(`\n📖 Sample blog posts being exported:`);
      exportedData.blogPosts.slice(0, 3).forEach((post: any, i: number) => {
        console.log(`   ${i + 1}. ${post.title}`);
      });
    }

    return exportedData;
  } catch (error) {
    console.error('❌ Export failed:', error);
    throw error;
  }
}

// Run export if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  exportLiveData().catch(console.error);
}

export { exportLiveData };