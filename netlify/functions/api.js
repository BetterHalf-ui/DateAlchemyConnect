const express = require('express');
const serverless = require('serverless-http');

// Simple in-memory storage for Netlify functions
const blogPosts = [
  {
    id: "1",
    title: "Dating with intention will make you happier",
    content: "In today's fast-paced world, dating with intention is more important than ever. This approach to relationships focuses on meaningful connections rather than casual encounters, leading to more fulfilling relationships and personal satisfaction.",
    excerpt: "Discover how intentional dating leads to more fulfilling relationships and greater personal happiness.",
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    category: "relationships",
    tags: ["dating", "intention", "happiness"],
    featured_image: null,
    author: "The Date Alchemy Team"
  }
];

const settings = {
  active_members_count: { id: "1", key: "active_members_count", value: "225" }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Blog Posts API
app.get("/api/blog-posts", (req, res) => {
  try {
    const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
    let posts = blogPosts;
    if (published !== undefined) {
      posts = blogPosts.filter(post => post.published === published);
    }
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

app.get("/api/blog-posts/:id", (req, res) => {
  try {
    const post = blogPosts.find(p => p.id === req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog post" });
  }
});

// Settings API  
app.get("/api/settings/:key", (req, res) => {
  try {
    const setting = settings[req.params.key];
    if (!setting) {
      return res.status(404).json({ message: "Setting not found" });
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch setting" });
  }
});

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

module.exports.handler = serverless(app);