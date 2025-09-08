// Simplified blog API for Netlify - NO COMPLEX DEPENDENCIES
import type { Context } from "@netlify/functions";

// Simplified types - avoid complex imports that break compilation
interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string | null;
  category?: string | null;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateBlogPost {
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string | null;
  category?: string | null;
  tags?: string[];
  published?: boolean;
}

// Simple Supabase client setup
async function createSupabaseClient() {
  const { createClient } = await import('@supabase/supabase-js');
  
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  return createClient(supabaseUrl, supabaseKey);
}

async function createBlogPost(data: CreateBlogPost): Promise<BlogPost> {
  const supabase = await createSupabaseClient();
  const { randomUUID } = await import('crypto');
  
  const id = randomUUID();
  const now = new Date();
  
  const { data: result, error } = await supabase
    .from('blog_posts')
    .insert({
      id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      image_url: data.imageUrl || null,
      category: data.category || null,
      tags: data.tags || [],
      published: data.published ?? false,
      created_at: now.toISOString(),
      updated_at: now.toISOString()
    })
    .select()
    .single();
  
  if (error) throw error;
  
  return {
    id: result.id,
    title: result.title,
    content: result.content,
    excerpt: result.excerpt,
    imageUrl: result.image_url,
    category: result.category,
    tags: result.tags || [],
    published: result.published,
    createdAt: new Date(result.created_at),
    updatedAt: new Date(result.updated_at)
  };
}

async function getBlogPosts(published?: boolean): Promise<BlogPost[]> {
  const supabase = await createSupabaseClient();
  
  let query = supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (published !== undefined) {
    query = query.eq('published', published);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  
  return (data || []).map(post => ({
    id: post.id,
    title: post.title,
    content: post.content,
    excerpt: post.excerpt,
    imageUrl: post.image_url,
    category: post.category,
    tags: post.tags || [],
    published: post.published,
    createdAt: new Date(post.created_at),
    updatedAt: new Date(post.updated_at)
  }));
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const path = url.pathname.replace('/.netlify/functions/blog-api', '');
  const method = request.method;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  };

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    // Blog Posts GET
    if (path === '/blog-posts' && method === 'GET') {
      const publishedParam = url.searchParams.get('published');
      const published = publishedParam === 'true' ? true : publishedParam === 'false' ? false : undefined;
      const posts = await getBlogPosts(published);
      
      return new Response(
        JSON.stringify(posts), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Blog Posts POST (CREATE)
    if (path === '/blog-posts' && method === 'POST') {
      const body = await request.json() as CreateBlogPost;
      
      // Basic validation
      if (!body.title || !body.content || !body.excerpt) {
        return new Response(
          JSON.stringify({ message: "Title, content, and excerpt are required" }), 
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const post = await createBlogPost(body);
      
      return new Response(
        JSON.stringify(post), 
        { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Default 404 for unmatched routes
    return new Response(
      JSON.stringify({ message: "API route not found" }), 
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Netlify function error:', error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};