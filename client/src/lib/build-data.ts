/**
 * Build-time data loader for static site generation
 * Loads pre-fetched data from build-time JSON files
 */

import type { BlogPost, Setting } from '../../../shared/schema';

// Static data URLs - these files are generated at build time
const BUILD_DATA_BASE = '/build-data';

interface BuildManifest {
  buildTime: string;
  blogPostsCount: number;
  publishedPostsCount: number;
  settingsCount: number;
  supabaseUrl: string;
}

let cachedBlogPosts: BlogPost[] | null = null;
let cachedPublishedPosts: BlogPost[] | null = null;
let cachedSettings: Setting[] | null = null;
let cachedManifest: BuildManifest | null = null;

/**
 * Load all blog posts from build-time data
 */
export async function loadBuildBlogPosts(): Promise<BlogPost[]> {
  if (cachedBlogPosts !== null) {
    return cachedBlogPosts;
  }

  try {
    const response = await fetch(`${BUILD_DATA_BASE}/blog-posts.json`);
    if (!response.ok) {
      throw new Error(`Failed to load build data: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transform dates back to Date objects
    cachedBlogPosts = posts.map((post: any) => ({
      ...post,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt)
    }));
    
    return cachedBlogPosts;
  } catch (error) {
    console.error('Failed to load build blog posts:', error);
    return [];
  }
}

/**
 * Load published blog posts from build-time data
 */
export async function loadBuildPublishedPosts(): Promise<BlogPost[]> {
  if (cachedPublishedPosts !== null) {
    return cachedPublishedPosts;
  }

  try {
    const response = await fetch(`${BUILD_DATA_BASE}/published-posts.json`);
    if (!response.ok) {
      throw new Error(`Failed to load build data: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transform dates back to Date objects
    cachedPublishedPosts = posts.map((post: any) => ({
      ...post,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt)
    }));
    
    return cachedPublishedPosts;
  } catch (error) {
    console.error('Failed to load build published posts:', error);
    return [];
  }
}

/**
 * Load settings from build-time data
 */
export async function loadBuildSettings(): Promise<Setting[]> {
  if (cachedSettings !== null) {
    return cachedSettings;
  }

  try {
    const response = await fetch(`${BUILD_DATA_BASE}/settings.json`);
    if (!response.ok) {
      throw new Error(`Failed to load build data: ${response.status}`);
    }
    
    const settings = await response.json();
    
    // Transform dates back to Date objects
    cachedSettings = settings.map((setting: any) => ({
      ...setting,
      updatedAt: new Date(setting.updatedAt)
    }));
    
    return cachedSettings;
  } catch (error) {
    console.error('Failed to load build settings:', error);
    return [];
  }
}

/**
 * Load a specific setting by key from build-time data
 */
export async function loadBuildSetting(key: string): Promise<string | null> {
  const settings = await loadBuildSettings();
  const setting = settings.find(s => s.key === key);
  return setting?.value || null;
}

/**
 * Load build manifest
 */
export async function loadBuildManifest(): Promise<BuildManifest | null> {
  if (cachedManifest) {
    return cachedManifest;
  }

  try {
    const response = await fetch(`${BUILD_DATA_BASE}/manifest.json`);
    if (!response.ok) {
      throw new Error(`Failed to load build manifest: ${response.status}`);
    }
    
    cachedManifest = await response.json();
    return cachedManifest;
  } catch (error) {
    console.error('Failed to load build manifest:', error);
    return null;
  }
}

/**
 * Check if we're in a static build environment (no API available)
 */
export function isStaticBuild(): boolean {
  // In production static builds, we won't have access to the API
  return process.env.NODE_ENV === 'production' && typeof window !== 'undefined';
}

/**
 * Get blog posts - uses build data in static mode, API in development
 */
export async function getBlogPosts(published?: boolean): Promise<BlogPost[]> {
  if (isStaticBuild()) {
    if (published === true) {
      return loadBuildPublishedPosts();
    }
    const posts = await loadBuildBlogPosts();
    return published === false ? posts.filter(p => !p.published) : posts;
  }
  
  // Fallback to API in development
  try {
    const query = published !== undefined ? `?published=${published}` : '';
    const response = await fetch(`/api/blog-posts${query}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API fallback failed, trying build data:', error);
    // Fallback to build data even in development
    if (published === true) {
      return loadBuildPublishedPosts();
    }
    const posts = await loadBuildBlogPosts();
    return published === false ? posts.filter(p => !p.published) : posts;
  }
}

/**
 * Get a setting value - uses build data in static mode, API in development
 */
export async function getSetting(key: string): Promise<string | null> {
  if (isStaticBuild()) {
    return loadBuildSetting(key);
  }
  
  // Fallback to API in development
  try {
    const response = await fetch(`/api/settings/${key}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    const data = await response.json();
    return data.value || null;
  } catch (error) {
    console.error('API fallback failed, trying build data:', error);
    // Fallback to build data even in development
    return loadBuildSetting(key);
  }
}