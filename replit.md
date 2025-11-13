# The Date Alchemy - Matchmaking Service Platform

## Overview

This is a modern full-stack web application for The Date Alchemy, a premium matchmaking service in Mauritius. The platform features a professional marketing website with blog functionality and admin capabilities, built as a monorepo with both client and server components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Component System**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via Neon serverless)
- **API Pattern**: RESTful API endpoints
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed sessions

### Development Setup
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Vite middleware integration for development
- **Type Safety**: Full TypeScript coverage with strict configuration

## Key Components

### Database Layer
- **Schema Definition**: Centralized in `shared/schema.ts` using Drizzle ORM
- **Database**: Supabase PostgreSQL with Row Level Security (RLS) policies
- **Tables**: Users, blog posts, and settings with proper relationships
- **Validation**: Zod schemas for runtime type validation
- **Storage Abstraction**: Supports multiple backends (Memory, Neon, Supabase)
- **Migration**: Complete migration infrastructure from Neon to Supabase

### Admin CMS System
- **Secure Authentication**: JWT-based admin login with hardcoded password "12345"
- **Admin Dashboard**: Complete statistics and article management interface
- **Article Management**: Rich text editor with image upload to Supabase Storage
- **Image Upload**: Direct integration with Supabase Storage for blog assets
- **Route Protection**: Middleware-protected admin routes with authentication
- **CRUD Operations**: Full create, read, update, delete functionality for articles

### API Layer
- **Blog Management**: CRUD operations for blog posts with publishing workflow
- **Settings Management**: Key-value store for dynamic configuration
- **User Management**: Basic user authentication system (prepared but not fully implemented)
- **Middleware**: Request logging and error handling

### Frontend Features
- **Marketing Pages**: Home, network, and blog listing pages
- **Admin Interface**: Blog post management with rich editing capabilities
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive UI components from shadcn/ui

### Content Management
- **Blog System**: Full CRUD with draft/published states, categories, and tags
- **Rich Content**: Support for excerpts, featured images, and categorization
- **Admin Panel**: Complete CMS dashboard with authentication and article management
- **Rich Text Editor**: Built-in editor with formatting tools (bold, italic, lists, quotes, links)
- **Image Management**: Upload and manage images through Supabase Storage
- **SEO Ready**: Structured content with proper metadata support
- **Admin Routes**: Protected routes at `/admin/login`, `/admin/dashboard`, `/admin/add-article`, `/admin/articles`

### Marketing Analytics
- **Google Analytics**: GA4 tracking (ID: G-P2WKJ5GE9R) for website analytics
- **Meta Pixel**: Facebook tracking (ID: 709403664238069) for lead generation and remarketing
- **Event Tracking**: Comprehensive tracking of application clicks, newsletter signups, and blog content views
- **Lead Generation**: Custom events for tracking user conversions and engagement

### CMS Administration
- **Admin Access**: Secure password-protected access at `/admin` with access code "Beachhouse1005!"
- **Dashboard Interface**: Complete admin dashboard showing article statistics and management
- **Article Editor**: Rich text editor with formatting tools and image upload capabilities
- **Image Storage**: Direct integration with Supabase Storage for blog asset management
- **Article Management**: Full CRUD operations with search, filter, and bulk management features
- **Session Management**: Session-based authentication with proper logout functionality
- **Security**: Removed all unsecured backup routes for enhanced security
- **Production Ready**: Fixed all TypeScript compilation issues for reliable deployment

## Data Flow

### Client-Server Communication
1. **API Requests**: RESTful endpoints with JSON payloads
2. **Error Handling**: Centralized error boundaries with user-friendly messages
3. **Loading States**: React Query handles caching and loading states
4. **Real-time Updates**: Optimistic updates with server reconciliation

### Content Publishing Workflow
1. **Draft Creation**: Posts start as unpublished drafts
2. **Content Editing**: Rich editing interface with preview capabilities
3. **Publishing**: Toggle published state with immediate availability
4. **Public Display**: Published content appears on blog pages

### Configuration Management
1. **Dynamic Settings**: Key-value pairs stored in database
2. **Runtime Updates**: Settings can be modified without deployment
3. **Default Values**: Fallback values for missing configurations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS with PostCSS processing
- **Forms**: React Hook Form with Hookform resolvers

### Backend Dependencies
- **Database**: Supabase PostgreSQL (migrated from Neon), Drizzle ORM
- **Server**: Express.js with TypeScript support
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for schema validation
- **Migration Tools**: Custom scripts for Neon to Supabase migration

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development**: TSX for TypeScript execution

## Deployment Strategy

### Production Build Process
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Database**: Supabase PostgreSQL connection via `DATABASE_URL` environment variable
- **Storage Selection**: `USE_SUPABASE=true` to enable Supabase storage backend
- **Development**: Hot module replacement with Vite middleware, memory storage by default
- **Production (Netlify)**: Requires Supabase environment variables in Netlify dashboard:
  - `SUPABASE_URL`: Supabase project URL
  - `SUPABASE_SERVICE_ROLE_KEY`: Service role key for full database access
  - `SUPABASE_ANON_KEY`: Anonymous public key for client access
  - `DATABASE_URL`: PostgreSQL connection string
  - All serverless functions in `netlify/functions/` use these credentials
- **Migration**: Complete toolset for migrating from Neon to Supabase

### Database Management
- **Schema Evolution**: Drizzle migrations track database changes
- **Data Persistence**: Supabase PostgreSQL for reliable data storage with RLS security
- **Connection Pooling**: Supabase handles connection management and scaling
- **Row Level Security**: Comprehensive RLS policies for data protection
- **Migration Tools**: Custom scripts for seamless database migration

### Hosting Considerations
- **Monorepo Deployment**: Single deployment contains both frontend and backend
- **Environment Variables**: Database URL must be configured in production
- **Static Assets**: Frontend built assets served from Express server
- **Session Storage**: PostgreSQL-backed sessions for user state persistence

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional VPS hosting with minimal configuration requirements.