# TotalOM - Deployment Guide

## Overview

This document provides comprehensive instructions for deploying the TotalOM IT & BPO services website. The application is built with React, TypeScript, and Express.js, designed to run on modern hosting platforms.

## Project Structure

```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared TypeScript schemas
├── attached_assets/ # Static assets (logos, images)
└── dist/           # Production build output (generated)
```

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- PostgreSQL database (for production)
- Environment variables configured

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database

# Application Configuration
NODE_ENV=production
PORT=3000

# Session Configuration
SESSION_SECRET=your-secure-session-secret-here
```

## Database Setup

### Using Neon Database (Recommended)

1. Create account at [neon.tech](https://neon.tech)
2. Create a new database project
3. Copy the connection string to `DATABASE_URL`
4. Run database migrations:

```bash
npm run db:push
```

### Local PostgreSQL Setup

1. Install PostgreSQL locally
2. Create a new database:

```sql
CREATE DATABASE totalom_db;
```

3. Update `DATABASE_URL` with local connection string
4. Run migrations:

```bash
npm run db:push
```

## Build Process

### Development Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Production Build

```bash
# Install dependencies
npm install

# Build frontend and backend
npm run build

# Start production server
npm start
```

## Deployment Platforms

### Replit Deployments (Recommended)

1. **Connect Repository**: Link your GitHub repository to Replit
2. **Configure Environment**: Add environment variables in Replit Secrets
3. **Deploy**: Click the "Deploy" button in Replit
4. **Custom Domain**: Configure custom domain if needed

**Replit Environment Variables:**
- `DATABASE_URL`: Your Neon database connection string
- `SESSION_SECRET`: Secure session secret
- `NODE_ENV`: Set to `production`

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

[functions]
  directory = "dist"
```

2. **Environment Variables**: Configure in Netlify dashboard
3. **Database**: Use external PostgreSQL provider

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