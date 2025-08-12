#!/bin/bash
set -e

echo "🚀 Starting Netlify deployment process..."
echo "📝 Environment Info:"
echo "   Node version: $(node --version)"
echo "   NPM version: $(npm --version)"
echo "   PWD: $(pwd)"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    exit 1
fi

# Clean any existing node_modules to avoid conflicts
if [ -d "node_modules" ]; then
    echo "🧹 Cleaning existing node_modules..."
    rm -rf node_modules
fi

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --no-audit --no-fund

echo "✅ Dependencies installed successfully"

echo "🏗️ Building web app..."
npx nx build @mycompany/web-app --verbose

echo "✅ Build completed!"

# Verify build output
if [ -d "apps/web-app/dist" ]; then
    echo "✅ Build output directory exists"
    ls -la apps/web-app/dist/
else
    echo "❌ Build output directory not found!"
    exit 1
fi

echo "🎉 Deployment build complete!"
