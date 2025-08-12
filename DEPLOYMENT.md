# Deploy The Date Alchemy to Netlify

## Prerequisites
1. GitHub account with your project repository
2. Netlify account (free at netlify.com)
3. PostgreSQL database (we recommend Neon or Supabase for serverless)

## Step 1: Set Up Database
1. Create a free PostgreSQL database at [Neon](https://neon.tech) or [Supabase](https://supabase.com)
2. Copy the connection string (DATABASE_URL)
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## Step 2: Deploy to Netlify

### Option A: Deploy via GitHub (Recommended)
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Functions directory**: `netlify/functions`

### Option B: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Login and deploy:
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## Step 3: Configure Environment Variables
In Netlify dashboard:
1. Go to Site settings > Environment variables
2. Add these variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NODE_ENV`: `production`
   - `MAILERLITE_API_KEY`: Your MailerLite API key (if using)

## Step 4: Custom Domain (Optional)
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Netlify will handle SSL certificates automatically

## Your site will be live at:
- **Netlify subdomain**: https://your-site-name.netlify.app
- **Custom domain**: https://yourdomain.com (if configured)

## Troubleshooting
- **Functions not working**: Check the Functions tab in Netlify dashboard
- **Database connection issues**: Verify DATABASE_URL environment variable
- **Build failures**: Check the deploy logs in Netlify dashboard

Your full-stack Date Alchemy website is now live on Netlify with serverless functions!