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
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string | null;
  category: string | null;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
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
      slug: post.slug || slugify(post.title),
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

    // Build the meta map (static routes + dynamic blog posts)
    type MetaEntry = { title: string; description: string };
    const metaMap: Record<string, MetaEntry> = {
      '/': {
        title: 'Premium Matchmaking in Mauritius | The Date Alchemy',
        description: "Mauritius' premier matchmaking service for professionals seeking meaningful, lasting relationships. We curate high-quality introductions so you can focus on connection.",
      },
      '/how-it-works': {
        title: 'How Our Matchmaking Works | The Date Alchemy',
        description: 'Discover our curated 3-step matchmaking process: a confidential profile review, hand-picked introductions, and dedicated coaching to help you find your ideal partner.',
      },
      '/network': {
        title: 'Our Member Network | The Date Alchemy',
        description: 'Meet our growing community of accomplished, relationship-ready singles across Mauritius. Quality introductions, real connections.',
      },
      '/blog': {
        title: 'Dating & Relationship Insights | The Date Alchemy',
        description: 'Expert articles on modern dating, attachment styles, relationship psychology, and the Mauritian singles scene — from The Date Alchemy team.',
      },
      '/apply': {
        title: 'Apply to Join | The Date Alchemy',
        description: 'Take the first step toward finding your ideal partner. Apply to join The Date Alchemy and let our matchmakers work for you.',
      },
      '/discovery-offer': {
        title: 'The Discovery Offer | The Date Alchemy',
        description: 'Start your matchmaking journey with our Discovery Pass — a curated introduction experience for Rs 3,000. Meet compatible singles with no long-term commitment.',
      },
      '/matchmaking-mauritius': {
        title: 'Matchmaking in Mauritius | The Date Alchemy',
        description: 'Professional matchmaking tailored to Mauritius. We connect ambitious, relationship-ready singles with compatible partners through a personalised, human-led process.',
      },
      '/dating-mauritius': {
        title: 'Dating in Mauritius | The Date Alchemy',
        description: "Navigate Mauritius' unique dating landscape with expert guidance. The Date Alchemy helps you skip the apps and meet quality singles in real life.",
      },
      '/events/singlessocials': {
        title: 'Singles Social Events | The Date Alchemy',
        description: 'Join our exclusive singles social events in Mauritius — relaxed, curated gatherings designed to spark genuine connections in beautiful settings.',
      },
      '/dating-patterns-guide': {
        title: 'The Dating Patterns Guide | The Date Alchemy',
        description: 'Identify the unconscious patterns keeping you stuck in the wrong relationships. Our free guide reveals the five most common dating traps and how to break free.',
      },
      '/privacy-policy': {
        title: 'Privacy Policy | The Date Alchemy',
        description: 'Read our privacy policy to understand how The Date Alchemy collects, uses, and protects your personal information.',
      },
    };

    // Add one entry per published blog post
    for (const post of publishedPosts) {
      const path = `/blog/${post.slug}`;
      const rawDescription = post.excerpt || post.content.slice(0, 155);
      // Strip any HTML tags and truncate to 160 chars
      const description = rawDescription.replace(/<[^>]+>/g, '').slice(0, 160);
      metaMap[path] = {
        title: `${post.title} | The Date Alchemy`,
        description,
      };
    }

    const metaMapPath = join(buildDataDir, 'meta-map.json');
    await writeFile(metaMapPath, JSON.stringify(metaMap, null, 2));
    console.log(`✅ Meta map written to: ${metaMapPath} (${Object.keys(metaMap).length} entries)`);

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