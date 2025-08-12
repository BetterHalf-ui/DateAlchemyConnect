#!/usr/bin/env node

/**
 * Helper script to add a new blog post
 * Usage: node scripts/add-blog-post.js
 */

const fs = require('fs');
const path = require('path');

// Blog post template
const createBlogPost = (id, title, content, excerpt, imageUrl, tags, category, date) => {
  const isoDate = new Date(date).toISOString();
  
  return {
    development: {
      title,
      content,
      excerpt,
      imageUrl,
      tags,
      category: category || null,
      published: true,
    },
    netlify: {
      id: id.toString(),
      title,
      content,
      excerpt,
      published: true,
      createdAt: isoDate,
      updatedAt: isoDate,
      category,
      tags,
      imageUrl,
      author: "The Date Alchemy Team"
    }
  };
};

console.log('🚀 Blog Post Creation Helper');
console.log('');
console.log('Please edit this script with your article details:');
console.log('');
console.log('Example:');
console.log('const newPost = createBlogPost(');
console.log('  9, // Next available ID');
console.log('  "Your Article Title",');
console.log('  "Your full article content...",');
console.log('  "Brief excerpt for cards",');
console.log('  "/attached_assets/your-image.jpg", // or null');
console.log('  ["tag1", "tag2", "tag3"],');
console.log('  "relationships", // category');
console.log('  "2025-08-15" // publication date');
console.log(');');
console.log('');
console.log('Then run this script and it will show you exactly what to add to each file.');

// Example usage (uncomment and modify):
/*
const newPost = createBlogPost(
  9,
  "How to handle dating anxiety: A practical guide",
  "Dating can be nerve-wracking, even for the most confident people. If you find yourself overthinking every text, second-guessing your conversation skills, or feeling overwhelmed before dates, you're not alone...",
  "Practical strategies to manage dating anxiety and build confidence in your romantic life.",
  "/attached_assets/dating-anxiety-guide.jpg",
  ["anxiety", "dating tips", "confidence", "mental health"],
  "psychology",
  "2025-08-15"
);

console.log('\n📝 Development Code (add to server/storage.ts samplePosts array):');
console.log(JSON.stringify(newPost.development, null, 2));

console.log('\n🌐 Netlify Code (add to netlify/functions/api.js blogPosts array):');
console.log(JSON.stringify(newPost.netlify, null, 2));

console.log('\n📅 Date Code (add to server/storage.ts postDates array):');
console.log(`new Date('${newPost.netlify.createdAt.split('T')[0]}'),`);
*/