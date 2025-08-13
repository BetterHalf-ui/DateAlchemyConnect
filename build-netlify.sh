#!/bin/bash

# Netlify build script for The Date Alchemy
set -e

echo "Installing dependencies..."
npm ci --include=dev

echo "Building the application..."
npm run build

echo "Ensuring public files are copied..."
# Copy public files to dist/public if they exist
if [ -d "public" ]; then
  cp -r public/* dist/public/ 2>/dev/null || true
fi

echo "Copying attached assets..."
if [ -d "attached_assets" ]; then
  mkdir -p dist/public/attached_assets
  cp -r attached_assets/* dist/public/attached_assets/ 2>/dev/null || true
fi

echo "Setting proper file permissions..."
find dist/public -type f -exec chmod 644 {} \;
find dist/public -type d -exec chmod 755 {} \;

echo "Build complete!"
echo "Files in dist/public:"
ls -la dist/public/