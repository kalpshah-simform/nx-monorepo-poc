#!/bin/bash

# 🚀 Deployment Script for Web App
# This script builds and deploys the web-app to Netlify

set -e  # Exit on any error

APP_NAME="@mycompany/web-app"
CONFIG_FILE="deploy/netlify/web-app.toml"

echo "🔨 Building $APP_NAME..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Build the application
echo "🏗️ Building application..."
npx nx build $APP_NAME --configuration=production

# Copy netlify config
echo "📋 Copying Netlify configuration..."
cp $CONFIG_FILE netlify.toml

echo "✅ Build complete! Ready for deployment."
echo "📁 Output directory: apps/web-app/dist"
echo "⚙️ Config file: netlify.toml"

# Optional: Run tests before deployment
# echo "🧪 Running tests..."
# npx nx test $APP_NAME

echo "🚀 Deployment ready!"
