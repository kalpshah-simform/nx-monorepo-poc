#!/bin/bash
set -e

echo "🔧 Starting build process for Netlify..."

# Check if we're running on Netlify
if [ "$NETLIFY" = "true" ]; then
    echo "🌐 Running on Netlify environment"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
fi

# Skip cleanup on Netlify since it starts fresh
if [ "$NETLIFY" != "true" ]; then
    echo "🧹 Cleaning up existing dependencies..."
    rm -rf node_modules package-lock.json
fi

# Install dependencies with proper flags
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --no-audit --no-fund --prefer-offline

# Build the application
echo "🏗️ Building web app..."
npx nx build @mycompany/web-app

echo "✅ Build completed successfully!"

# Show build output info
if [ -d "apps/web-app/dist" ]; then
    echo "📁 Build output directory created successfully"
    ls -la apps/web-app/dist/
else
    echo "❌ Build output directory not found!"
    exit 1
fi
