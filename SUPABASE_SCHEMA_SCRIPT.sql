-- Copy and paste this entire script into your Supabase SQL Editor and run it

-- Enable UUID extension
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;  
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (full access)
CREATE POLICY "Service role full access users" ON users FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access blog_posts" ON blog_posts FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access settings" ON settings FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Create policies for public access (read-only for published content)
CREATE POLICY "Public read published blog_posts" ON blog_posts FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Public read settings" ON settings FOR SELECT TO anon, authenticated USING (true);