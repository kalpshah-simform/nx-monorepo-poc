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

# Clean any existing node_modules and package-lock.json to avoid conflicts
if [ -d "node_modules" ]; then
    echo "🧹 Cleaning existing node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "🧹 Cleaning package-lock.json..."
    rm -f package-lock.json
fi

echo "📦 Installing dependencies with fresh lockfile..."
npm install --legacy-peer-deps --no-audit --no-fund

echo "✅ Dependencies installed successfully"

# Verify Nx installation and workspace
echo "🔍 Verifying Nx installation..."
if [ -f "node_modules/.bin/nx" ]; then
    echo "✅ Nx binary found at: node_modules/.bin/nx"
    NX_VERSION=$(./node_modules/.bin/nx --version 2>/dev/null || echo "version check failed")
    echo "📋 Using Nx version: ${NX_VERSION}"
else
    echo "❌ Nx binary not found in node_modules/.bin/"
    echo "📋 Available binaries:"
    ls -la node_modules/.bin/ | grep -E "(nx|@nx)" || echo "No Nx-related binaries found"
    exit 1
fi

# Verify workspace configuration
if [ ! -f "nx.json" ]; then
    echo "❌ nx.json not found! This doesn't appear to be an Nx workspace."
    exit 1
fi

echo "✅ Nx workspace verified"

# Debug: Show installed Nx packages
echo "🔍 Checking installed Nx packages..."
ls node_modules/@nx/ 2>/dev/null | head -10 || echo "No @nx packages found"

# Debug: Check if the problematic plugin exists
if [ -d "node_modules/@nx/js" ]; then
    echo "✅ @nx/js package found"
    ls node_modules/@nx/js/ | head -5
else
    echo "❌ @nx/js package not found"
fi

echo "🏗️ Building ${APP_NAME}..."
# Use the local nx binary instead of npx to avoid version conflicts
./node_modules/.bin/nx build @mycompany/${APP_NAME} --verbose

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
