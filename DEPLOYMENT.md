# TotalOM - Static Website Deployment Guide

## Overview

This document provides comprehensive instructions for deploying the TotalOM IT & BPO services website. The application is built as a static website with React, TypeScript, and minimal backend dependencies, designed for easy deployment on static hosting platforms.

## Project Structure

```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared TypeScript schemas
├── attached_assets/ # Static assets (logos, images)
└── dist/           # Production build output (generated)
```

## Prerequisites

- Node.js 18+ (for development only)
- npm or yarn package manager
- Static hosting platform account
- No database required for production

## Environment Variables (Optional)

For development server only:

```env
# Development Configuration
NODE_ENV=development
PORT=5000
```

## Static Website Features

- **No Database Dependencies**: All content is statically generated
- **Contact Forms**: Use mailto links or external form services
- **Fast Loading**: Optimized static assets and minimal JavaScript
- **SEO Optimized**: Pre-rendered HTML with proper meta tags
- **Mobile Responsive**: Works perfectly on all devices

## Build Process

### Development Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Static Production Build

```bash
# Install dependencies
npm install

# Build static website
npm run build

# Output: dist/public/ directory contains all static files
```

The `dist/public/` directory contains the complete static website ready for deployment.

## Deployment Platforms

### Replit Deployments (Recommended)

1. **Connect Repository**: Link your GitHub repository to Replit
2. **No Environment Variables Needed**: Static website requires no configuration
3. **Deploy**: Click the "Deploy" button in Replit
4. **Custom Domain**: Configure custom domain if needed

**Static Deployment Benefits:**
- Instant deployments with no build time
- Global CDN distribution
- Automatic HTTPS
- Zero configuration required

### Vercel Deployment

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Configure Environment Variables** in Vercel dashboard
4. **Database**: Use Vercel Postgres or external provider

### Netlify Deployment

1. **Build Configuration** (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "18"
```

2. **Contact Forms**: Use Netlify Forms for contact submissions
3. **Add to HTML forms**: `<form name="contact" method="POST" data-netlify="true">`

### Railway Deployment

1. **Connect Repository**: Link GitHub to Railway
2. **Environment Variables**: Configure in Railway dashboard
3. **Database**: Use Railway PostgreSQL addon
4. **Deploy**: Automatic deployment on push

### Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t totalom .
docker run -p 3000:3000 --env-file .env totalom
```

## SSL/TLS Configuration

### Automatic SSL (Recommended)
- Replit Deployments: Automatic SSL
- Vercel: Automatic SSL
- Netlify: Automatic SSL

### Manual SSL Setup
For custom servers, use Let's Encrypt:

```bash
# Install Certbot
sudo apt-get install certbot

# Generate certificate
sudo certbot certonly --standalone -d yourdomain.com
```

## Performance Optimization

### Frontend Optimization
- Static assets served with compression
- Code splitting enabled via Vite
- Image optimization for logos/graphics
- CSS minification and purging

### Backend Optimization
- Express.js with compression middleware
- Database connection pooling
- Session management with PostgreSQL store
- API response caching headers

### CDN Configuration
For optimal performance, configure CDN for static assets:

```javascript
// In production, serve assets from CDN
const assetURL = process.env.CDN_URL || '/assets'
```

## Monitoring and Maintenance

### Health Checks
The application includes health check endpoints:

- `GET /health` - Application health status
- `GET /api/health` - API health status

### Logging
Configure application logging:

```javascript
// Production logging configuration
const logger = {
  level: 'info',
  format: 'json',
  transports: ['file', 'console']
}
```

### Database Backups
Regular database backups are essential:

```bash
# PostgreSQL backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql

# Neon Database backup (automatic)
# Backups handled by Neon platform
```

## Security Considerations

### Environment Security
- Never commit `.env` files
- Use secure session secrets (32+ characters)
- Enable HTTPS in production
- Configure CORS appropriately

### Database Security
- Use connection pooling
- Enable SSL for database connections
- Regular security updates
- Access control and authentication

## Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Database Connection Issues:**
```bash
# Test database connection
npm run db:push
```

**Port Conflicts:**
```bash
# Use different port
PORT=8080 npm start
```

### Debug Mode
Enable debug logging:

```bash
DEBUG=* npm run dev
```

## Post-Deployment Checklist

- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Health checks responding
- [ ] Contact form functionality tested
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] SEO meta tags functioning
- [ ] Favicon displaying correctly

## Support and Maintenance

### Regular Updates
- Update dependencies monthly
- Security patches applied immediately
- Performance monitoring and optimization
- Database maintenance and optimization

### Backup Strategy
- Database: Daily automated backups
- Code: Version control with Git
- Assets: CDN with redundancy
- Configuration: Infrastructure as code

## Contact Information

For deployment support and technical assistance:

**TotalOM Technical Team**
- Email: totalom.ind@gmail.com
- Phone: +91 9884411456
- Address: F2, First Floor, ENPEE Arcade, Thanjavur - 613004, Tamil Nadu, India

---

**Note**: This deployment guide is specific to the TotalOM website architecture. Adjust configurations based on your hosting provider and specific requirements.