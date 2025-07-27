# TotalOM - Vercel Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying the TotalOM static website to Vercel using Vite build system.

## Prerequisites

- GitHub account with TotalOM repository
- Vercel account (free tier available)
- Node.js 18+ for local development

## Deployment Methods

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from project directory**:
```bash
# Initial deployment
vercel

# Production deployment
vercel --prod
```

### Method 2: GitHub Integration

1. **Connect Repository**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Build Optimization

The project includes several optimizations for Vercel:

1. **Asset Caching**: Static assets cached for 1 year
2. **Security Headers**: XSS protection, content type sniffing prevention
3. **Clean URLs**: Trailing slash handling
4. **SPA Routing**: All routes redirect to index.html

## Environment Variables

No environment variables are required for the static website deployment.

## Custom Domain Setup

1. **Add Domain in Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - No additional configuration needed

## Performance Features

### Automatic Optimizations
- **Edge Network**: Global CDN distribution
- **Image Optimization**: Automatic WebP conversion
- **Compression**: Gzip/Brotli compression
- **HTTP/2**: Modern protocol support

### Build Optimizations
- **Code Splitting**: Automatic chunk splitting
- **Tree Shaking**: Unused code removal
- **Asset Minification**: CSS and JS minification
- **Bundle Analysis**: Build size optimization

## Monitoring and Analytics

### Vercel Analytics (Optional)
```bash
npm install @vercel/analytics
```

Add to your React app:
```typescript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Your app components */}
      <Analytics />
    </>
  );
}
```

## Contact Form Integration

### Option 1: Vercel Forms (Recommended)

Add to your contact form:
```html
<form action="/api/contact" method="POST">
  <input type="hidden" name="_vercel_form_name" value="contact" />
  <!-- your form fields -->
</form>
```

Create `api/contact.js`:
```javascript
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle form submission
    const { name, email, message } = req.body;
    
    // Send email or save to database
    // Return success response
    res.status(200).json({ success: true });
  }
}
```

### Option 2: External Services

- **Formspree**: `action="https://formspree.io/f/YOUR_FORM_ID"`
- **Netlify Forms**: Use with hybrid deployment
- **EmailJS**: Client-side email sending

## Deployment Checklist

- [ ] Repository connected to Vercel
- [ ] Build settings configured correctly
- [ ] Custom domain added (if applicable)
- [ ] SSL certificate active
- [ ] Contact forms tested
- [ ] Performance metrics verified
- [ ] Mobile responsiveness confirmed

## Troubleshooting

### Common Issues

1. **Build Fails**:
   ```bash
   # Check build locally
   npm run build
   
   # Clear cache and retry
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. **404 Errors**:
   - Ensure `vercel.json` rewrites are configured
   - Check output directory setting

3. **Assets Not Loading**:
   - Verify asset paths in code
   - Check build output structure

### Debug Mode

Enable debug logging:
```bash
vercel --debug
```

## Performance Metrics

### Expected Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Support

For deployment issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- TotalOM Support: totalom.ind@gmail.com
- Technical Issues: Check Vercel dashboard logs

---

**Deployed with ⚡ Vercel**