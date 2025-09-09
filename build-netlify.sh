#!/bin/bash

# Netlify build script for The Date Alchemy
set -e

echo "Installing dependencies..."
npm ci --include=dev

echo "Fetching build-time data from Supabase..."
tsx scripts/fetch-build-data.ts

echo "Building the application..."
npm run build

echo "Ensuring public files are copied..."
# Copy public files to dist/public if they exist
if [ -d "public" ]; then
  cp -r public/* dist/public/ 2>/dev/null || true
  # Ensure social images are copied
  if [ -f "public/social-image.jpg" ]; then
    cp public/social-image.jpg dist/public/
    echo "Social image copied successfully"
  fi
  if [ -f "public/social-share.jpg" ]; then
    cp public/social-share.jpg dist/public/
    echo "Social share image copied successfully"
  fi
  if [ -f "public/social-share-v2.jpg" ]; then
    cp public/social-share-v2.jpg dist/public/
    echo "Social share v2 image copied successfully"
  fi
fi

echo "Copying attached assets..."
if [ -d "attached_assets" ]; then
  mkdir -p dist/public/attached_assets
  cp -r attached_assets/* dist/public/attached_assets/ 2>/dev/null || true
fi

echo "Copying build-time data..."
if [ -d "dist/build-data" ]; then
  mkdir -p dist/public/build-data
  cp -r dist/build-data/* dist/public/build-data/ 2>/dev/null || true
  echo "Build data copied to public directory"
fi

echo "Setting proper file permissions..."
find dist/public -type f -exec chmod 644 {} \;
find dist/public -type d -exec chmod 755 {} \;

echo "Compiling Netlify functions..."
npx tsc netlify/functions/*.ts --outDir netlify/functions --target es2022 --moduleResolution node --allowSyntheticDefaultImports --skipLibCheck || echo "TypeScript compilation completed with warnings"

echo "Build complete!"
echo "Files in dist/public:"
ls -la dist/public/