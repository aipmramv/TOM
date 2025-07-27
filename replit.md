# TotalOM - IT & BPO Services Website

## Overview

TotalOM is a modern static marketing website built for an IT & BPO services company. The application showcases the company's services including web development, mobile apps, digital marketing, ITES & BPO, custom software, and data analytics. It features a professional static website with integrated contact forms using external services for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern static website architecture optimized for performance and easy deployment:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Animations**: Framer Motion for smooth interactions and page transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Static Backend (Development Only)
- **Runtime**: Node.js with Express.js framework (development server)
- **Language**: TypeScript for type safety
- **API Design**: Minimal health check endpoints
- **Static Generation**: All content statically generated
- **Contact Forms**: External service integration (mailto, form handlers)

## Key Components

### Frontend Components
- **Layout Components**: Navigation bar and footer with responsive design
- **Page Components**: Home, Services, About, Industries, Portfolio, Contact, and 404 pages
- **UI Components**: Complete shadcn/ui component library including forms, cards, buttons, dialogs
- **Custom Components**: Animated cards, floating shapes, tech illustrations, team graphics
- **Sections**: Modular page sections (hero, services, about, industries, tech stack, contact)

### Backend Components
- **Routes**: Contact form submission and contact retrieval endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Schema Validation**: Zod schemas for runtime type checking
- **Error Handling**: Centralized error handling middleware

### Static Content Structure
- **Service Information**: Statically defined service categories and descriptions
- **Company Data**: Contact information, team details, and company overview
- **Portfolio Items**: Project showcases and case studies
- **Contact Forms**: Client-side validation with external form handling

## Data Flow

1. **Static Content Delivery**:
   - All website content served as static files
   - Service information, company details, and portfolio items pre-built
   - Industry-specific content and tech stack information embedded in components

2. **Contact Form Handling**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas client-side
   - Form submission opens default email client with pre-filled information
   - Alternative: Integration with external form services (Formspree, Netlify Forms)

3. **External Integrations**:
   - WhatsApp chat widget for instant messaging
   - Mailto links for direct email contact
   - Phone links for direct calling

## External Dependencies

### Frontend Dependencies
- **UI & Styling**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **State & Forms**: TanStack Query, React Hook Form, Hookform Resolvers
- **Animations**: Framer Motion, Embla Carousel
- **Utilities**: date-fns, clsx, cmdk

### Static Dependencies
- **Validation**: Zod for client-side form validation
- **Utilities**: date-fns, clsx for content formatting
- **Development**: Express.js for development server only

### Development Dependencies
- **Build Tools**: Vite for frontend bundling, esbuild for backend
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Replit integration with cartographer and runtime error modal

### Production Build
1. Frontend built using Vite to `dist/public`
2. Backend bundled using esbuild to `dist/index.js`
3. Static files served by Express in production
4. Database migrations managed through Drizzle Kit

### Static Site Generation
- Frontend built using Vite to `dist/public` directory
- No database migrations required for static content
- Schema defined in `shared/schema.ts` for form validation only

### Environment Configuration
- No database connection required for production
- Static files can be deployed to any CDN or static hosting platform
- Environment-specific configurations for development server vs static deployment

The application is designed to be easily deployable as a static website on platforms like Replit, Netlify, Vercel, or any static hosting provider, with no database dependencies and minimal configuration requirements.

## Recent Updates (January 2025)

- **Static Website Conversion**: Removed all database dependencies and converted to static architecture
- **Contact Form Redesign**: Implemented mailto-based contact forms with external service integration options
- **Enhanced AI-focused hero section illustration** with neural networks, orbiting tech nodes, and animated data flows
- **Updated navigation branding** with purple T-O-M color scheme for "Total Outsource Management"
- **Added TotalOM logo as favicon** with proper SEO meta tags
- **Updated footer copyright to 2025**
- **Created comprehensive DEPLOYMENT.md guide** covering multiple hosting platforms
- **Fixed React DOM nesting warnings** in navigation components
- **Integrated WhatsApp chat functionality** with +91 9884411456 contact number
- **Simplified architecture** for easier deployment and maintenance