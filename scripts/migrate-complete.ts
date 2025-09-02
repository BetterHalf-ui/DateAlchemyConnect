#!/usr/bin/env tsx
import { exportData } from './export-current-data';
import { importData } from './import-to-supabase';
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

async function completeMigration() {
  log(`${colors.bold}🚀 Starting complete migration to Supabase...${colors.reset}\n`);

  try {
    // Step 1: Export current data
    log(`${colors.blue}📤 Step 1: Exporting current data...${colors.reset}`);
    const exportedData = await exportData();
    
    // Step 2: Import to Supabase
    log(`\n${colors.blue}📥 Step 2: Importing data to Supabase...${colors.reset}`);
    const importResult = await importData();
    
    // Step 3: Migration summary
    log(`\n${colors.green}${colors.bold}🎉 Migration completed successfully!${colors.reset}`);
    log(`${colors.green}✅ Migrated ${importResult.importedCount}/${importResult.totalRecords} records${colors.reset}`);
    
    log(`\n${colors.blue}📋 Next Steps to complete the migration:${colors.reset}`);
    log(`   1. Run the SQL schema in your Supabase dashboard (see scripts/create-supabase-schema.sql)`);
    log(`   2. Update your DATABASE_URL to point to Supabase:`);
    log(`      postgresql://postgres:[password]@[project-ref].supabase.co:5432/postgres`);
    log(`   3. Set USE_SUPABASE=true in your production environment`);
    log(`   4. Test the application thoroughly`);
    log(`   5. Deploy to production`);
    
    log(`\n${colors.yellow}⚠️  Important: Keep your current Neon database as backup until migration is verified${colors.reset}`);

  } catch (error) {
    log(`\n${colors.red}❌ Migration failed: ${error}${colors.reset}`);
    process.exit(1);
  }
}

// Run migration if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  completeMigration();
}

export { completeMigration };