#!/bin/bash
set -e

echo "🚀 Starting Netlify deployment process..."
echo "📝 Environment Info:"
echo "   Node version: $(node --version)"
echo "   NPM version: $(npm --version)"
echo "   PWD: $(pwd)"

# Determine which app to build based on environment variable or netlify.toml
APP_NAME=${NX_APP_NAME:-"web-app"}
BUILD_DIR="apps/${APP_NAME}/dist"

echo "🎯 Building app: ${APP_NAME}"

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

echo "🏗️ Building ${APP_NAME}..."
npx nx build @mycompany/${APP_NAME} --verbose

echo "✅ Build completed!"

# Verify build output
if [ -d "${BUILD_DIR}" ]; then
    echo "✅ Build output directory exists: ${BUILD_DIR}"
    ls -la "${BUILD_DIR}/"
else
    echo "❌ Build output directory not found: ${BUILD_DIR}"
    exit 1
fi

echo "🎉 Deployment build complete!"
