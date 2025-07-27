#!/usr/bin/env node

/**
 * Vercel Build Script for TotalOM Static Website
 * This script ensures proper build output structure for Vercel deployment
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync, rmSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Vercel build process...');

try {
  // Clean previous builds
  const distPath = path.join(__dirname, 'dist');
  if (existsSync(distPath)) {
    console.log('🧹 Cleaning previous build...');
    rmSync(distPath, { recursive: true, force: true });
  }

  // Run Vite build
  console.log('📦 Building with Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  // Ensure the build output exists
  const publicPath = path.join(distPath, 'public');
  if (!existsSync(publicPath)) {
    console.error('❌ Build output not found at dist/public');
    process.exit(1);
  }

  // Copy assets to root of dist for Vercel
  const assetsPath = path.join(__dirname, 'attached_assets');
  if (existsSync(assetsPath)) {
    console.log('📁 Copying assets...');
    const targetAssetsPath = path.join(publicPath, 'attached_assets');
    cpSync(assetsPath, targetAssetsPath, { recursive: true });
  }

  console.log('✅ Vercel build completed successfully!');
  console.log(`📍 Output directory: ${publicPath}`);

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}