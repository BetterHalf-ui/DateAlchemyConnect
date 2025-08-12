#!/bin/bash

# Netlify build script for The Date Alchemy
set -e

echo "Installing dependencies..."
npm ci --include=dev

echo "Building the application..."
npm run build

echo "Copying attached assets..."
cp -r attached_assets dist/public/

echo "Build complete!"