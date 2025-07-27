#!/bin/bash

echo "🔍 Verifying TotalOM Vercel build readiness..."
echo

# Check if build output exists
if [ -d "dist/public" ]; then
    echo "✅ Build output directory exists"
else
    echo "❌ Build output directory missing - run 'npm run build'"
    exit 1
fi

# Check main files
if [ -f "dist/public/index.html" ]; then
    echo "✅ index.html exists"
else
    echo "❌ index.html missing"
    exit 1
fi

if [ -d "dist/public/assets" ]; then
    echo "✅ Assets directory exists"
    
    # Count assets
    asset_count=$(ls -1 dist/public/assets/ | wc -l)
    echo "📦 Found $asset_count asset files"
    
    # Check for key assets
    if ls dist/public/assets/ | grep -q "\.css$"; then
        echo "✅ CSS bundle found"
    else
        echo "❌ CSS bundle missing"
    fi
    
    if ls dist/public/assets/ | grep -q "\.js$"; then
        echo "✅ JavaScript bundle found"
    else
        echo "❌ JavaScript bundle missing"
    fi
    
    if ls dist/public/assets/ | grep -q "tom-high-resolution-logo"; then
        echo "✅ TotalOM logo found"
    else
        echo "❌ TotalOM logo missing"
    fi
else
    echo "❌ Assets directory missing"
    exit 1
fi

# Check Vercel configuration
if [ -f "vercel.json" ]; then
    echo "✅ Vercel configuration exists"
else
    echo "❌ vercel.json missing"
    exit 1
fi

# Check package.json for build script
if grep -q '"build"' package.json; then
    echo "✅ Build script found in package.json"
else
    echo "❌ Build script missing in package.json"
    exit 1
fi

echo
echo "🎉 Vercel deployment readiness verified!"
echo
echo "📋 Next steps for Vercel deployment:"
echo "1. Connect your GitHub repository to Vercel"
echo "2. Set framework preset to 'Vite'"
echo "3. Ensure build command is 'npm run build'"
echo "4. Set output directory to 'dist/public'"
echo "5. Deploy!"
echo
echo "🔗 Your site will be live at: https://your-project-name.vercel.app"