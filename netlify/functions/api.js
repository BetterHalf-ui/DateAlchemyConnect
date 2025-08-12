import express from 'express';
import serverless from 'serverless-http';
import { storage } from '../../server/storage.js';
import { insertBlogPostSchema, insertSettingSchema } from '../../shared/schema.js';
import { z } from 'zod';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Blog Posts API
app.get("/api/blog-posts", async (req, res) => {
  try {
    const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
    const posts = await storage.getBlogPosts(published);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

app.get("/api/blog-posts/:id", async (req, res) => {
  try {
    const post = await storage.getBlogPost(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog post" });
  }
});

app.post("/api/blog-posts", async (req, res) => {
  try {
    const validatedData = insertBlogPostSchema.parse(req.body);
    const post = await storage.createBlogPost(validatedData);
    res.status(201).json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

app.put("/api/blog-posts/:id", async (req, res) => {
  try {
    const validatedData = insertBlogPostSchema.partial().parse(req.body);
    const post = await storage.updateBlogPost(req.params.id, validatedData);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update blog post" });
  }
});

app.delete("/api/blog-posts/:id", async (req, res) => {
  try {
    const deleted = await storage.deleteBlogPost(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog post" });
  }
});

// Settings API
app.get("/api/settings/:key", async (req, res) => {
  try {
    const setting = await storage.getSetting(req.params.key);
    if (!setting) {
      return res.status(404).json({ message: "Setting not found" });
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch setting" });
  }
});

app.post("/api/settings", async (req, res) => {
  try {
    const validatedData = insertSettingSchema.parse(req.body);
    const setting = await storage.createSetting(validatedData);
    res.status(201).json(setting);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid setting data", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create setting" });
  }
});

app.put("/api/settings/:key", async (req, res) => {
  try {
    const validatedData = insertSettingSchema.partial().parse(req.body);
    const setting = await storage.updateSetting(req.params.key, validatedData);
    if (!setting) {
      return res.status(404).json({ message: "Setting not found" });
    }
    res.json(setting);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid setting data", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update setting" });
  }
});

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export const handler = serverless(app);