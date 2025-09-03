# CMS Implementation Plan

## Overview
Building a complete Content Management System dashboard integrated with Supabase for The Date Alchemy website.

## Database Schema
Current `blog_posts` table structure:
- ✅ Already exists in Supabase
- ✅ Has all required fields (title, content, excerpt, image_url, etc.)
- ✅ No schema changes needed

## File Structure Plan

### Backend Routes (`server/routes.ts`)
- ✅ Existing blog post CRUD operations
- ➕ Add admin authentication endpoint: `POST /api/admin/login`
- ➕ Add image upload endpoint: `POST /api/admin/upload-image`
- ➕ Add dashboard stats endpoint: `GET /api/admin/stats`

### Frontend Structure
```
client/src/
├── pages/
│   ├── admin/
│   │   ├── login.tsx          (New - Admin login page)
│   │   ├── dashboard.tsx      (New - Main dashboard)
│   │   ├── add-article.tsx    (New - Add new article form)
│   │   └── edit-article.tsx   (New - Edit existing article)
├── components/
│   ├── admin/
│   │   ├── admin-layout.tsx   (New - Admin page layout)
│   │   ├── article-form.tsx   (New - Reusable article form)
│   │   ├── article-list.tsx   (New - Article management list)
│   │   ├── image-upload.tsx   (New - Image upload component)
│   │   └── rich-text-editor.tsx (New - Basic rich text editor)
├── hooks/
│   └── use-admin-auth.tsx     (New - Admin authentication hook)
└── lib/
    └── admin-utils.ts         (New - Admin utility functions)
```

## Security Implementation
- ✅ Password verification on backend only
- ✅ JWT token for session management
- ✅ Protected admin routes
- ✅ Supabase Storage for image uploads
- ✅ No credentials exposed in frontend

## Features Implementation Plan

### 1. Authentication System
- Secure login with hardcoded password: "Beachhouse1005!"
- JWT token-based session management
- Protected route middleware
- Automatic logout on token expiry

### 2. Dashboard Features
- Total article count display
- Recent articles overview
- Quick action buttons
- Navigation to add/edit articles

### 3. Article Management
- CRUD operations for blog posts
- Rich text editor with basic formatting
- Image upload to Supabase Storage
- Auto-generated URL slugs
- Draft/publish toggle

### 4. Image Management
- Upload to Supabase Storage bucket
- Automatic file naming and organization
- Image preview functionality
- URL generation for database storage

### 5. User Experience
- Clean, intuitive interface
- Success/error notifications
- Confirmation dialogs for deletions
- Responsive design

## Implementation Steps
1. ✅ Verify current admin components
2. ➕ Create authentication system
3. ➕ Build admin layout and dashboard
4. ➕ Implement article form with rich editor
5. ➕ Add image upload functionality
6. ➕ Create article management interface
7. ➕ Add routing and navigation
8. ➕ Test full CRUD operations