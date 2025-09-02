# Database Migration Guide: Neon to Supabase

This guide walks you through migrating The Date Alchemy's database from Neon to Supabase while preserving all data and maintaining application functionality.

## Prerequisites

✅ **Before you begin:**
- Supabase project created and configured
- Supabase secrets added to Replit (SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY)
- Current Neon database accessible via DATABASE_URL
- Application currently running and functional

## Migration Steps

### Step 1: Create Supabase Schema

1. **Open your Supabase dashboard** → SQL Editor
2. **Run the schema script** from `scripts/create-supabase-schema.sql`
   - This creates all tables: `users`, `blog_posts`, `settings`
   - Sets up Row Level Security (RLS) policies
   - Creates necessary indexes
   - Inserts default settings

### Step 2: Export Current Data

```bash
tsx scripts/export-current-data.ts
```

This will:
- Export all blog posts and settings from your current Neon database
- Save data to `export-YYYY-MM-DD.json`
- Display summary of exported records

### Step 3: Import to Supabase

```bash
tsx scripts/import-to-supabase.ts
```

This will:
- Read the most recent export file
- Import all data to your Supabase database
- Verify the import was successful
- Display summary of imported records

### Step 4: Update Database Configuration

**For Production (Netlify):**
1. Update your DATABASE_URL environment variable to point to Supabase:
   ```
   postgresql://postgres:[YOUR_PASSWORD]@[PROJECT_REF].supabase.co:5432/postgres
   ```
2. Add environment variable:
   ```
   USE_SUPABASE=true
   ```

**For Development (Replit):**
- Keep using memory storage in development (recommended)
- Set USE_SUPABASE=true only when you want to test Supabase locally

### Step 5: Test Migration

1. **Start your application** with the new configuration
2. **Verify data integrity:**
   - Check blog posts are displayed correctly
   - Verify settings (like member count) work
   - Test creating/editing blog posts
3. **Check the console** for any migration errors

## Migration Scripts

| Script | Purpose |
|--------|---------|
| `scripts/create-supabase-schema.sql` | Creates database schema in Supabase |
| `scripts/export-current-data.ts` | Exports data from current Neon database |
| `scripts/import-to-supabase.ts` | Imports data to Supabase |
| `scripts/migrate-complete.ts` | Runs complete migration process |

## Architecture Changes

### Before Migration
```
Application → DatabaseStorage → Neon Database (PostgreSQL)
                ↓
              Drizzle ORM
```

### After Migration  
```
Application → SupabaseStorage → Supabase Database (PostgreSQL)
                ↓
              Drizzle ORM
```

### Storage Selection Logic
The application automatically chooses storage based on environment variables:

1. **USE_SUPABASE=true** → SupabaseStorage
2. **DATABASE_URL set + production** → DatabaseStorage (Neon)
3. **Development** → MemStorage

## Data Schema

### Tables Migrated
- **users**: User accounts (prepared for future authentication)
- **blog_posts**: All blog content with metadata
- **settings**: Configuration values (member count, etc.)

### RLS Policies
- **Service Role**: Full access to all tables
- **Anonymous/Public**: Read access to published blog posts and settings
- **Authenticated**: Read access to published content

## Rollback Plan

If migration issues occur:

1. **Set USE_SUPABASE=false** in production environment
2. **Revert DATABASE_URL** to original Neon database
3. **Restart application** - it will use the original Neon database
4. **Debug issues** and retry migration when ready

## Verification Checklist

After migration, verify:

- [ ] Application starts without errors
- [ ] Blog posts display correctly on website
- [ ] Member count shows correct value
- [ ] Admin panel can create/edit blog posts
- [ ] Published/draft status works correctly
- [ ] No console errors in browser or server
- [ ] Performance is acceptable

## Troubleshooting

### Common Issues

**Connection String Format:**
- Ensure your Supabase DATABASE_URL follows the format above
- Replace [YOUR_PASSWORD] with your actual database password
- Replace [PROJECT_REF] with your Supabase project reference

**RLS Policies:**
- If you get permission errors, check RLS policies in Supabase dashboard
- Service role should have full access to all tables

**Missing Data:**
- Check the import logs for any failed records
- Verify export file contains all expected data
- Re-run import script if needed

### Support

If you encounter issues:
1. Check the console logs for specific error messages
2. Verify all environment variables are set correctly
3. Test connection to Supabase from Supabase dashboard
4. Ensure the schema was created successfully

## Benefits of Migration

✅ **Advantages of Supabase:**
- Real-time capabilities for future features
- Built-in authentication system
- Row Level Security for data protection
- Better dashboard and monitoring
- Easier database management
- Direct integration with modern web frameworks

The migration preserves all existing functionality while providing a foundation for future enhancements and better data management.