#!/usr/bin/env tsx
import { MemStorage } from '../server/storage';
import { writeFileSync } from 'fs';

async function exportMemoryData() {
  console.log('🔄 Exporting data from memory storage...');
  
  // Create a new instance to get the default data
  const memStorage = new MemStorage();
  
  try {
    // Get all data from memory storage (this includes the initialized blog posts)
    const [blogPosts, activeMembersSetting] = await Promise.all([
      memStorage.getBlogPosts(),
      memStorage.getSetting('active_members_count')
    ]);

    const exportedData = {
      blogPosts,
      settings: activeMembersSetting ? [activeMembersSetting] : [],
      exportedAt: new Date().toISOString(),
      totalRecords: blogPosts.length + (activeMembersSetting ? 1 : 0),
      source: 'memory_storage'
    };

    // Write to JSON file
    const filename = `export-memory-${new Date().toISOString().split('T')[0]}.json`;
    writeFileSync(filename, JSON.stringify(exportedData, null, 2));

    console.log(`✅ Exported ${exportedData.totalRecords} records from memory storage to ${filename}`);
    console.log(`   📝 Blog Posts: ${blogPosts.length}`);
    console.log(`   ⚙️  Settings: ${exportedData.settings.length}`);

    // Show sample of what's being exported
    if (blogPosts.length > 0) {
      console.log(`\n📖 Sample blog posts being exported:`);
      blogPosts.slice(0, 3).forEach((post, i) => {
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
  exportMemoryData().catch(console.error);
}

export { exportMemoryData };