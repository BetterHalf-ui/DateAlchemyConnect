#!/usr/bin/env tsx

/**
 * Build-time data fetching script for Netlify static site generation
 * Fetches blog posts and settings from Supabase and generates static data files
 */

import { createClient } from '@supabase/supabase-js';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string | null;
  category: string | null;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Setting {
  id: string;
  key: string;
  value: string;
  updatedAt: string;
}

async function fetchBuildData() {
  console.log('🚀 Starting build-time data fetch from Supabase...');

  // Validate environment variables
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing required environment variables:');
    console.error('   - SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
    console.error('   - SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✅ Set' : '❌ Missing');
    process.exit(1);
  }

  console.log('✅ Environment variables found');
  console.log('   - SUPABASE_URL:', supabaseUrl);
  console.log('   - SUPABASE_SERVICE_ROLE_KEY: [HIDDEN]');

  // Create Supabase client
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // Test connection
    const { data: testData, error: testError } = await supabase
      .from('blog_posts')
      .select('count')
      .limit(1);

    if (testError) {
      console.error('❌ Failed to connect to Supabase:', testError.message);
      process.exit(1);
    }

    console.log('✅ Supabase connection successful');

    // Fetch all blog posts
    console.log('📝 Fetching blog posts...');
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (blogError) {
      console.error('❌ Failed to fetch blog posts:', blogError.message);
      process.exit(1);
    }

    // Transform blog posts to match our interface
    const transformedPosts: BlogPost[] = (blogPosts || []).map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.image_url,
      category: post.category,
      tags: post.tags || [],
      published: post.published,
      createdAt: post.created_at,
      updatedAt: post.updated_at
    }));

    console.log(`✅ Found ${transformedPosts.length} blog posts`);
    console.log('   Published:', transformedPosts.filter(p => p.published).length);
    console.log('   Drafts:', transformedPosts.filter(p => !p.published).length);

    // Fetch settings
    console.log('⚙️  Fetching settings...');
    const { data: settings, error: settingsError } = await supabase
      .from('settings')
      .select('*');

    if (settingsError) {
      console.error('❌ Failed to fetch settings:', settingsError.message);
      process.exit(1);
    }

    const transformedSettings: Setting[] = (settings || []).map(setting => ({
      id: setting.id,
      key: setting.key,
      value: setting.value,
      updatedAt: setting.updated_at
    }));

    console.log(`✅ Found ${transformedSettings.length} settings`);

    // Create build data directory
    const buildDataDir = join(process.cwd(), 'dist', 'build-data');
    await mkdir(buildDataDir, { recursive: true });

    // Write blog posts data
    const blogPostsPath = join(buildDataDir, 'blog-posts.json');
    await writeFile(blogPostsPath, JSON.stringify(transformedPosts, null, 2));
    console.log(`✅ Blog posts written to: ${blogPostsPath}`);

    // Write published posts separately for faster loading
    const publishedPosts = transformedPosts.filter(p => p.published);
    const publishedPostsPath = join(buildDataDir, 'published-posts.json');
    await writeFile(publishedPostsPath, JSON.stringify(publishedPosts, null, 2));
    console.log(`✅ Published posts written to: ${publishedPostsPath}`);

    // Write settings data
    const settingsPath = join(buildDataDir, 'settings.json');
    await writeFile(settingsPath, JSON.stringify(transformedSettings, null, 2));
    console.log(`✅ Settings written to: ${settingsPath}`);

    // Create a build manifest
    const manifest = {
      buildTime: new Date().toISOString(),
      blogPostsCount: transformedPosts.length,
      publishedPostsCount: publishedPosts.length,
      settingsCount: transformedSettings.length,
      supabaseUrl: supabaseUrl.replace(/\/\/.*@/, '//[HIDDEN]@'), // Hide credentials in logs
    };

    const manifestPath = join(buildDataDir, 'manifest.json');
    await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`✅ Build manifest written to: ${manifestPath}`);

    console.log('\n🎉 Build-time data fetch completed successfully!');
    console.log('📊 Summary:');
    console.log(`   - Total blog posts: ${transformedPosts.length}`);
    console.log(`   - Published posts: ${publishedPosts.length}`);
    console.log(`   - Settings: ${transformedSettings.length}`);
    console.log(`   - Build time: ${manifest.buildTime}`);

  } catch (error) {
    console.error('❌ Unexpected error during data fetch:', error);
    process.exit(1);
  }
}

// Run the script
fetchBuildData().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});