#!/bin/bash
set -e

echo "🔧 Starting build process..."

# Clear any existing node_modules to avoid conflicts
echo "🧹 Cleaning up existing dependencies..."
rm -rf node_modules package-lock.json

# Install dependencies with proper flags
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the application
echo "🏗️ Building web app..."
npx nx build @mycompany/web-app

echo "✅ Build completed successfully!"
