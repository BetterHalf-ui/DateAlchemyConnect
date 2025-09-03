import type { Context } from "@netlify/functions";
import { verifyAdminPassword, generateAdminToken, verifyAdminToken } from "../../server/admin-auth";
import { SupabaseStorage } from "../../server/supabase";
import { insertBlogPostSchema } from "../../shared/schema";

const storage = new SupabaseStorage();

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

  // Helper function to verify admin token
  const verifyAuth = (request: Request) => {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }
    const token = authHeader.slice(7);
    return verifyAdminToken(token);
  };

  try {
    // Admin Blog Post Creation
    if (path === '/blog-posts' && method === 'POST') {
      if (!verifyAuth(request)) {
        return new Response(
          JSON.stringify({ error: 'Authentication required' }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const body = await request.json();
        const validatedData = insertBlogPostSchema.parse(body);
        const post = await storage.createBlogPost(validatedData);
        
        return new Response(
          JSON.stringify(post), 
          { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error: any) {
        return new Response(
          JSON.stringify({ message: "Invalid blog post data", error: error.message }), 
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Admin Blog Post Update
    if (path.startsWith('/blog-posts/') && method === 'PUT') {
      if (!verifyAuth(request)) {
        return new Response(
          JSON.stringify({ error: 'Authentication required' }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const id = path.split('/')[2];
        const body = await request.json();
        const validatedData = insertBlogPostSchema.partial().parse(body);
        const post = await storage.updateBlogPost(id, validatedData);
        
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
      } catch (error: any) {
        return new Response(
          JSON.stringify({ message: "Invalid blog post data", error: error.message }), 
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Admin Blog Post Delete
    if (path.startsWith('/blog-posts/') && method === 'DELETE') {
      if (!verifyAuth(request)) {
        return new Response(
          JSON.stringify({ error: 'Authentication required' }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const id = path.split('/')[2];
        const success = await storage.deleteBlogPost(id);
        
        return new Response(
          JSON.stringify({ success }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error: any) {
        return new Response(
          JSON.stringify({ message: "Failed to delete blog post", error: error.message }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Image upload placeholder (would need multipart handling for full implementation)
    if (path === '/upload-image' && method === 'POST') {
      if (!verifyAuth(request)) {
        return new Response(
          JSON.stringify({ error: 'Authentication required' }), 
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // For now, return a placeholder response
      // Full image upload would require multipart form parsing
      return new Response(
        JSON.stringify({ 
          error: "Image upload not yet implemented in Netlify Functions. Please use a direct URL for now." 
        }), 
        { status: 501, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Default 404 for unmatched admin routes
    return new Response(
      JSON.stringify({ message: "Admin API route not found" }), 
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Admin Netlify function error:', error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};