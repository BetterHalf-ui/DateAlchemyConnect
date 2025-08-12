# Blog Management Guide

## How to Add New Blog Articles

### Step 1: Add Images
1. Upload your article images to the `attached_assets/` folder
2. Use descriptive names like `article-topic-name_timestamp.jpg`
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.avif`, `.webp`

### Step 2: Add Article to Development
Edit `server/storage.ts` in the `initializeBlogPosts()` method:

```javascript
{
  title: "Your Article Title",
  content: "Your full article content with HTML formatting...",
  excerpt: "A brief 1-2 sentence summary for the card display",
  imageUrl: "/attached_assets/your-image-name.jpg", // or null if no image
  tags: ["tag1", "tag2", "tag3"], // relevant tags
  category: "relationships", // or "dating tips", "psychology", etc.
  published: true,
},
```

### Step 3: Set Publication Date
Add the date to the `postDates` array in the same order:
```javascript
new Date('2025-08-15'), // Your article date
```

### Step 4: Sync to Netlify Production
Copy the same article object to `netlify/functions/api.js` in the `blogPosts` array with:
- Unique `id` (increment from last used)
- Same title, content, excerpt, imageUrl, tags, category
- `createdAt` and `updatedAt` in ISO format: "2025-08-15T10:00:00.000Z"

### Step 5: Deploy
Push changes and deploy to Netlify. The build script automatically copies all images.

## Content Guidelines

### Article Structure
- **Title**: Clear, engaging, specific
- **Content**: Well-formatted HTML with paragraphs, links, lists
- **Excerpt**: 1-2 sentences that work on cards
- **Tags**: 3-5 relevant keywords
- **Category**: "relationships", "dating tips", "psychology", "lifestyle", etc.

### Image Best Practices
- High quality, professional images
- Relevant to article content
- Optimized file size (under 500KB recommended)
- Aspect ratio works well for cards (16:9 or 4:3)

### HTML Formatting in Content
- Use `\n\n` for paragraph breaks
- Links: `<a href="URL" target="_blank" class="text-primary hover:text-primary/80 font-semibold underline">Link Text</a>`
- Bold sections: `**Bold Text**`
- Lists use standard HTML: `<ul><li>Item</li></ul>`

## Current Article Count: 8
Next ID to use in Netlify: 9