// Simplified admin API for Netlify - NO COMPLEX DEPENDENCIES
import type { Context } from "@netlify/functions";

const ADMIN_PASSWORD = 'Beachhouse1005!';
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Simple JWT functions without imports
async function signJWT(payload: any): Promise<string> {
  const jwt = await import('jsonwebtoken');
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

async function verifyJWT(token: string): Promise<any> {
  try {
    const jwt = await import('jsonwebtoken');
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// Simple Supabase client setup
async function createSupabaseClient() {
  const { createClient } = await import('@supabase/supabase-js');
  
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  return createClient(supabaseUrl, supabaseKey);
}

async function verifyAuth(request: Request): Promise<boolean> {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.slice(7);
  const decoded = await verifyJWT(token);
  return decoded && decoded.admin === true;
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const path = url.pathname.replace('/.netlify/functions/admin-api', '');
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
    // Admin login
    if (path === '/login' && method === 'POST') {
      const body = await request.json();
      
      if (body.password === ADMIN_PASSWORD) {
        const token = await signJWT({ admin: true, iat: Date.now() });
        return new Response(
          JSON.stringify({ token }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Invalid password' }), 
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Admin stats endpoint (no auth required for basic stats)
    if (path === '/stats' && method === 'GET') {
      const supabase = await createSupabaseClient();
      
      // Get blog post counts
      const { data: allPosts, error: postsError } = await supabase
        .from('blog_posts')
        .select('published');
      
      if (postsError) throw postsError;
      
      const totalArticles = allPosts?.length || 0;
      const publishedArticles = allPosts?.filter(p => p.published).length || 0;
      const draftArticles = totalArticles - publishedArticles;
      
      return new Response(
        JSON.stringify({
          totalArticles,
          publishedArticles,
          draftArticles,
          totalViews: 0 // Placeholder - would need analytics integration
        }), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // All other routes require authentication
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return new Response(
        JSON.stringify({ error: 'Authentication required' }), 
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Blog posts management
    if (path === '/blog-posts' && method === 'GET') {
      const supabase = await createSupabaseClient();
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      const posts = (data || []).map(post => ({
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
      
      return new Response(
        JSON.stringify(posts), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (path === '/blog-posts' && method === 'POST') {
      const supabase = await createSupabaseClient();
      const body = await request.json();
      const { randomUUID } = await import('crypto');
      
      const id = randomUUID();
      const now = new Date();
      
      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          id,
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          image_url: body.imageUrl || null,
          category: body.category || null,
          tags: body.tags || [],
          published: body.published ?? false,
          created_at: now.toISOString(),
          updated_at: now.toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      
      const post = {
        id: data.id,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        imageUrl: data.image_url,
        category: data.category,
        tags: data.tags || [],
        published: data.published,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at)
      };
      
      return new Response(
        JSON.stringify(post), 
        { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Settings
    if (path === '/settings' && method === 'GET') {
      const supabase = await createSupabaseClient();
      const { data, error } = await supabase
        .from('settings')
        .select('*');
      
      if (error) throw error;
      
      return new Response(
        JSON.stringify(data || []), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Default 404 for unmatched routes
    return new Response(
      JSON.stringify({ message: `Admin API route not found: ${path}` }), 
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Admin API error:', error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};