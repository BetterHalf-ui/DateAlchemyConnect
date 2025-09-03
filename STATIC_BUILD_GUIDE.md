# Static Site Build Configuration for Netlify

## Overview

The Date Alchemy website has been configured for static site generation with build-time data fetching from Supabase. This ensures all 10 blog posts are included in the production deployment without requiring a backend API.

## Build Process

### 1. Data Fetching (`scripts/fetch-build-data.ts`)

During the Netlify build process, this script:
- Connects to Supabase using environment variables
- Fetches all blog posts and settings
- Saves data as JSON files in `dist/build-data/`
- Creates a build manifest with metadata

**Required Environment Variables:**
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

### 2. Frontend Data Loading (`client/src/lib/build-data.ts`)

The frontend automatically detects production mode and:
- Loads blog posts from `/build-data/published-posts.json`
- Loads settings from `/build-data/settings.json`
- Falls back to API calls in development

### 3. Build Script (`build-netlify.sh`)

The Netlify build script:
1. Installs dependencies
2. **Fetches build-time data from Supabase**
3. Builds the React application
4. Copies build data to public directory
5. Copies attached assets

## Verification

### Build Output Verification

After a successful build, verify these files exist:
```
dist/public/build-data/
├── blog-posts.json      (All blog posts)
├── published-posts.json (Published posts only)
├── settings.json        (App settings)
└── manifest.json        (Build metadata)
```

### Production Verification

Check the build manifest at `/build-data/manifest.json`:
```json
{
  "buildTime": "2025-09-03T12:49:33.907Z",
  "blogPostsCount": 10,
  "publishedPostsCount": 10,
  "settingsCount": 1,
  "supabaseUrl": "https://ucklhbpjxwnvsnwtzhpi.supabase.co"
}
```

## Updated Components

The following React components now use build-time data instead of API calls:

1. **Home Page (`client/src/pages/home.tsx`)**
   - Blog posts: Uses `getBlogPosts(true)` for published posts
   - Active members count: Uses `getSetting("active_members_count")`

2. **Blog Page (`client/src/pages/blog.tsx`)**
   - Blog posts: Uses `getBlogPosts(true)` for published posts

3. **Blog Post Page (`client/src/pages/blog-post.tsx`)**
   - Single post: Finds post by ID from `getBlogPosts()`

4. **Admin Components**
   - Still use API calls for real-time CRUD operations
   - Not affected by static build changes

## Benefits

✅ **Complete Static Site**: No backend required for production
✅ **All Blog Posts Included**: All 10 blog posts served from build data
✅ **Fast Loading**: Pre-fetched data loads instantly
✅ **SEO Friendly**: All content available at build time
✅ **Reliable**: No runtime API dependencies

## Troubleshooting

### Missing Blog Posts

If fewer than 10 blog posts appear:
1. Check Netlify build logs for Supabase connection errors
2. Verify environment variables are set correctly
3. Ensure `tsx scripts/fetch-build-data.ts` runs successfully

### Build Failures

Common issues:
- Missing `SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY`
- Network connectivity to Supabase
- Invalid Supabase credentials

### Development vs Production

- **Development**: Uses API calls to local server
- **Production**: Uses build-time JSON files
- **Hybrid**: Falls back gracefully between modes