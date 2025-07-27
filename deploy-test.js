#!/usr/bin/env node

/**
 * Deployment Test Script for TotalOM
 * Validates build output and deployment readiness for Vercel
 */

import { existsSync, readFileSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Testing TotalOM deployment readiness...\n');

const tests = [
  {
    name: 'Build Output Directory',
    test: () => existsSync(path.join(__dirname, 'dist/public')),
    error: 'dist/public directory not found. Run npm run build first.'
  },
  {
    name: 'Index HTML File',
    test: () => existsSync(path.join(__dirname, 'dist/public/index.html')),
    error: 'index.html not found in build output.'
  },
  {
    name: 'Assets Directory',
    test: () => existsSync(path.join(__dirname, 'dist/public/assets')),
    error: 'Assets directory not found in build output.'
  },
  {
    name: 'Vercel Configuration',
    test: () => existsSync(path.join(__dirname, 'vercel.json')),
    error: 'vercel.json configuration file not found.'
  },
  {
    name: 'Build Size Check',
    test: () => {
      const indexPath = path.join(__dirname, 'dist/public/index.html');
      if (!existsSync(indexPath)) return false;
      const size = statSync(indexPath).size;
      return size > 0 && size < 10000; // Should be reasonable size
    },
    error: 'index.html size is not within expected range.'
  },
  {
    name: 'Logo Asset',
    test: () => {
      const assetsDir = path.join(__dirname, 'dist/public/assets');
      if (!existsSync(assetsDir)) return false;
      const files = require('fs').readdirSync(assetsDir);
      return files.some(file => file.includes('tom-high-resolution-logo'));
    },
    error: 'TotalOM logo not found in build assets.'
  },
  {
    name: 'CSS Bundle',
    test: () => {
      const assetsDir = path.join(__dirname, 'dist/public/assets');
      if (!existsSync(assetsDir)) return false;
      const files = require('fs').readdirSync(assetsDir);
      return files.some(file => file.endsWith('.css'));
    },
    error: 'CSS bundle not found in build output.'
  },
  {
    name: 'JavaScript Bundle',
    test: () => {
      const assetsDir = path.join(__dirname, 'dist/public/assets');
      if (!existsSync(assetsDir)) return false;
      const files = require('fs').readdirSync(assetsDir);
      return files.some(file => file.endsWith('.js'));
    },
    error: 'JavaScript bundle not found in build output.'
  }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  try {
    if (test.test()) {
      console.log(`✅ ${test.name}`);
      passed++;
    } else {
      console.log(`❌ ${test.name}: ${test.error}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${test.name}: ${error.message}`);
    failed++;
  }
}

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('\n🎉 All tests passed! Ready for Vercel deployment.');
  console.log('\n📋 Next steps:');
  console.log('1. Push code to GitHub repository');
  console.log('2. Connect repository to Vercel');
  console.log('3. Deploy with "vercel --prod"');
  console.log('\n🔗 Deployment will be available at: https://your-project.vercel.app');
} else {
  console.log('\n⚠️  Some tests failed. Please fix issues before deployment.');
  process.exit(1);
}

// Additional deployment info
console.log('\n📋 Deployment Configuration:');
console.log('• Framework: Vite');
console.log('• Build Command: npm run build');
console.log('• Output Directory: dist/public');
console.log('• Node Version: 18.x');
console.log('• Static Site: Yes (no server required)');

// Size analysis
try {
  const distPath = path.join(__dirname, 'dist/public');
  const indexSize = statSync(path.join(distPath, 'index.html')).size;
  const assetsDir = path.join(distPath, 'assets');
  
  if (existsSync(assetsDir)) {
    const files = require('fs').readdirSync(assetsDir);
    const totalSize = files.reduce((total, file) => {
      return total + statSync(path.join(assetsDir, file)).size;
    }, 0);
    
    console.log('\n📏 Build Size Analysis:');
    console.log(`• HTML: ${(indexSize / 1024).toFixed(2)} KB`);
    console.log(`• Assets: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`• Total: ${((indexSize + totalSize) / 1024 / 1024).toFixed(2)} MB`);
  }
} catch (error) {
  console.log('\n⚠️  Could not analyze build size');
}