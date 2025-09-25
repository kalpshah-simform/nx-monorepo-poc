#!/bin/bash

# 🧹 Cleanup script for the monorepo
# This script cleans build artifacts and cache

echo "🧹 Cleaning monorepo..."

# Clean Nx cache
echo "🗑️ Clearing Nx cache..."
npx nx reset

# Clean node_modules and reinstall (optional)
if [ "$1" == "--full" ]; then
    echo "🗑️ Removing node_modules..."
    rm -rf node_modules
    echo "📦 Reinstalling dependencies..."
    npm install --legacy-peer-deps
fi

# Clean build outputs
echo "🗑️ Cleaning build outputs..."
rm -rf apps/*/dist
rm -rf libs/*/dist

# Clean temporary files
echo "🗑️ Cleaning temporary files..."
rm -rf tmp
rm -rf .nx/cache

echo "✅ Cleanup complete!"
