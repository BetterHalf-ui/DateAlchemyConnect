-- Migration script to create The Date Alchemy schema in Supabase
-- Run this in your Supabase SQL editor

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create blog_posts table  
CREATE TABLE IF NOT EXISTS blog_posts (
  id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4()::VARCHAR,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;  
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can do everything on users" ON users;
DROP POLICY IF EXISTS "Service role can do everything on blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can do everything on settings" ON settings;
DROP POLICY IF EXISTS "Anonymous read access to published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Anonymous read access to settings" ON settings;

-- Create RLS policies for service role (full access)
CREATE POLICY "Service role can do everything on users"
  ON users FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can do everything on blog_posts"
  ON blog_posts FOR ALL  
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can do everything on settings"
  ON settings FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create RLS policies for anonymous/public access (read-only)
CREATE POLICY "Anonymous read access to published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Anonymous read access to settings" 
  ON settings FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert default settings
INSERT INTO settings (key, value) 
VALUES ('active_members_count', '225')
ON CONFLICT (key) DO NOTHING;