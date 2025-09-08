import type { Context } from "@netlify/functions";
import { verifyAdminPassword, generateAdminToken, requireAdmin } from "../../server/admin-auth";

// Hardcode password for Netlify Functions (since import might not work)
const ADMIN_PASSWORD = '12345';
import { SupabaseStorage } from "../../server/supabase";

const storage = new SupabaseStorage();

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const path = url.pathname.replace('/.netlify/functions/api', '');
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
    // Admin Authentication Routes
    if (path === '/admin/login' && method === 'POST') {
      const body = await request.json() as { password: string };
      
      if (!body.password || typeof body.password !== 'string') {
        return new Response(
          JSON.stringify({ error: "Password is required" }), 
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (body.password === ADMIN_PASSWORD) {
        // Generate JWT token directly in function
        const jwt = await import('jsonwebtoken');
        const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
        const token = jwt.sign(
          { admin: true, iat: Date.now() },
          JWT_SECRET,
          { expiresIn: '24h' }
        );
        return new Response(
          JSON.stringify({ token, success: true }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        return new Response(
          JSON.stringify({ error: "Invalid password" }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Admin verification
    if (path === '/admin/verify' && method === 'GET') {
      // Extract token from Authorization header
      const authHeader = request.headers.get('authorization');
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(
          JSON.stringify({ error: 'Authentication required' }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // For now, just return valid if we have a Bearer token
      // In a full implementation, we'd verify the JWT token here
      return new Response(
        JSON.stringify({ valid: true }), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Admin stats
    if (path === '/admin/stats' && method === 'GET') {
      try {
        const allPosts = await storage.getBlogPosts();
        const publishedPosts = allPosts.filter(post => post.published);
        const draftPosts = allPosts.filter(post => !post.published);

        return new Response(
          JSON.stringify({
            totalArticles: allPosts.length,
            publishedArticles: publishedPosts.length,
            draftArticles: draftPosts.length,
          }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch stats" }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Blog Posts API
    if (path === '/blog-posts' && method === 'GET') {
      try {
        const publishedParam = url.searchParams.get('published');
        const published = publishedParam === 'true' ? true : publishedParam === 'false' ? false : undefined;
        const posts = await storage.getBlogPosts(published);
        
        return new Response(
          JSON.stringify(posts), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ message: "Failed to fetch blog posts" }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Create Blog Post (PUBLIC ENDPOINT)
    if (path === '/blog-posts' && method === 'POST') {
      try {
        const { insertBlogPostSchema } = await import("../../shared/schema");
        const body = await request.json();
        const validatedData = insertBlogPostSchema.parse(body);
        const post = await storage.createBlogPost(validatedData);
        
        return new Response(
          JSON.stringify(post), 
          { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error: any) {
        if (error.name === 'ZodError') {
          return new Response(
            JSON.stringify({ message: "Invalid blog post data", errors: error.errors }), 
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        return new Response(
          JSON.stringify({ message: "Failed to create blog post" }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Blog Post by ID
    if (path.startsWith('/blog-posts/') && method === 'GET') {
      try {
        const id = path.split('/')[2];
        const post = await storage.getBlogPost(id);
        
        if (!post) {
          return new Response(
            JSON.stringify({ message: "Blog post not found" }), 
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        return new Response(
          JSON.stringify(post), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ message: "Failed to fetch blog post" }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Settings API
    if (path.startsWith('/settings/') && method === 'GET') {
      try {
        const key = path.split('/')[2];
        const setting = await storage.getSetting(key);
        
        if (!setting) {
          return new Response(
            JSON.stringify({ message: "Setting not found" }), 
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        return new Response(
          JSON.stringify(setting), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ message: "Failed to fetch setting" }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Newsletter API (basic implementation)
    if (path === '/newsletter' && method === 'POST') {
      return new Response(
        JSON.stringify({ message: "Successfully subscribed to newsletter" }), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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