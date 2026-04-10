#!/usr/bin/env tsx

/**
 * Build-time sitemap generator
 * Reads published blog posts from dist/build-data/published-posts.json
 * and writes dist/public/sitemap.xml
 */

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const BASE_URL = 'https://thedatealchemy.com';
const TODAY = new Date().toISOString().split('T')[0];

const STATIC_ROUTES: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/how-it-works', priority: '0.9', changefreq: 'monthly' },
  { path: '/network', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/matchmaking-mauritius', priority: '0.9', changefreq: 'monthly' },
  { path: '/dating-mauritius', priority: '0.9', changefreq: 'monthly' },
  { path: '/apply', priority: '0.8', changefreq: 'monthly' },
  { path: '/discovery-offer', priority: '0.7', changefreq: 'monthly' },
  { path: '/events/singlessocials', priority: '0.7', changefreq: 'weekly' },
  { path: '/dating-patterns-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
];

interface PublishedPost {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
}

async function generateSitemap() {
  console.log('🗺️  Generating sitemap...');

  let publishedPosts: PublishedPost[] = [];

  try {
    const postsPath = join(process.cwd(), 'dist', 'build-data', 'published-posts.json');
    const raw = await readFile(postsPath, 'utf-8');
    publishedPosts = JSON.parse(raw);
    console.log(`✅ Found ${publishedPosts.length} published posts for sitemap`);
  } catch (err) {
    console.warn('⚠️  Could not read published-posts.json — sitemap will only contain static routes');
  }

  const staticEntries = STATIC_ROUTES.map(route => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const postEntries = publishedPosts.map(post => {
    const slug = post.slug || post.id;
    const lastmod = post.updatedAt
      ? new Date(post.updatedAt).toISOString().split('T')[0]
      : TODAY;
    return `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticEntries}${postEntries}
</urlset>`;

  const sitemapPath = join(process.cwd(), 'dist', 'public', 'sitemap.xml');
  await writeFile(sitemapPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap written to: ${sitemapPath}`);
  console.log(`   Static routes: ${STATIC_ROUTES.length}`);
  console.log(`   Blog post routes: ${publishedPosts.length}`);
  console.log(`   Total URLs: ${STATIC_ROUTES.length + publishedPosts.length}`);
}

generateSitemap().catch(err => {
  console.error('❌ Sitemap generation failed:', err);
  process.exit(1);
});
