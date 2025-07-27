# TotalOM - IT & BPO Services Website

## Overview

TotalOM is a modern full-stack web application built for an IT & BPO services company. The application showcases the company's services including web development, mobile apps, digital marketing, ITES & BPO, custom software, and data analytics. It features a professional marketing website with a contact form system for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Animations**: Framer Motion for smooth interactions and page transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints
- **Database**: Drizzle ORM with PostgreSQL (using Neon Database)
- **Session Management**: In-memory storage with plans for PostgreSQL sessions

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

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Lead capture system (id, firstName, lastName, email, company, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - Data sent to `/api/contact` endpoint
   - Backend validates and stores contact in database
   - Success/error feedback displayed to user

2. **Contact Management**:
   - Admin can retrieve all contacts via `/api/contacts` endpoint
   - Contact data sorted by creation date

3. **Static Content**:
   - Service information, company details, and portfolio items are statically defined
   - Industry-specific content and tech stack information stored in component data

## External Dependencies

### Frontend Dependencies
- **UI & Styling**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **State & Forms**: TanStack Query, React Hook Form, Hookform Resolvers
- **Animations**: Framer Motion, Embla Carousel
- **Utilities**: date-fns, clsx, cmdk

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple (prepared for PostgreSQL sessions)

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

### Database Management
- Drizzle migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for type sharing
- Database pushes handled via `npm run db:push`

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Neon Database (PostgreSQL) for production data persistence
- Environment-specific configurations for development vs production

The application is designed to be easily deployable on platforms like Replit, with proper environment variable management and build processes for both development and production environments.

## Recent Updates (January 2025)

- Enhanced AI-focused hero section illustration with neural networks, orbiting tech nodes, and animated data flows
- Updated navigation branding with purple T-O-M color scheme for "Total Outsource Management"
- Added TotalOM logo as favicon with proper SEO meta tags
- Updated footer copyright to 2025
- Created comprehensive DEPLOYMENT.md guide covering multiple hosting platforms
- Fixed React DOM nesting warnings in navigation components
- Integrated WhatsApp chat functionality with +91 9884411456 contact number