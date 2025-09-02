#!/usr/bin/env tsx
import { DatabaseStorage } from '../server/database';
import { writeFileSync } from 'fs';
import 'dotenv/config';

async function exportData() {
  console.log('🔄 Exporting current database data...');
  
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required to export current data');
  }

  const currentStorage = new DatabaseStorage();
  
  try {
    // Export all data
    const [blogPosts, activeMembersSetting] = await Promise.all([
      currentStorage.getBlogPosts(),
      currentStorage.getSetting('active_members_count')
    ]);

    const exportedData = {
      blogPosts,
      settings: activeMembersSetting ? [activeMembersSetting] : [],
      exportedAt: new Date().toISOString(),
      totalRecords: blogPosts.length + (activeMembersSetting ? 1 : 0)
    };

    // Write to JSON file
    const filename = `export-${new Date().toISOString().split('T')[0]}.json`;
    writeFileSync(filename, JSON.stringify(exportedData, null, 2));

    console.log(`✅ Exported ${exportedData.totalRecords} records to ${filename}`);
    console.log(`   📝 Blog Posts: ${blogPosts.length}`);
    console.log(`   ⚙️  Settings: ${exportedData.settings.length}`);

    return exportedData;
  } catch (error) {
    console.error('❌ Export failed:', error);
    throw error;
  }
}

// Run export if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  exportData().catch(console.error);
}

export { exportData };