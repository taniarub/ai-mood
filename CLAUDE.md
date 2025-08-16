# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm i` - Install dependencies

## Project Architecture

This is a React portfolio website built with modern tools, following a service-based business model for photography, video content, and web design services.

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui components built on Radix UI primitives  
- **Styling**: Tailwind CSS with custom theme extensions
- **Routing**: React Router (client-side routing)
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `src/pages/` - Route components for different service pages
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui component library
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `public/images/` - Image assets organized by service categories (clothes, makeup, objects)

### Key Architecture Patterns
- Page-based routing with dedicated service pages
- Component composition with shadcn/ui design system
- Alias imports using `@/` prefix for src directory
- Russian language content with English folder structure for image organization
- Responsive design with Tailwind breakpoints

### Image Organization
Images are categorized by service type:
- `clothes/` - Fashion and accessories
- `makeup/` - Cosmetics and skincare  
- `objects/` - Product photography

### Styling Conventions
- Uses CSS custom properties for theming
- Custom animations: fade-in-up, scale-in, float
- Consistent spacing and typography via Tailwind
- shadcn/ui components for consistent design language

## Key Dependencies
- React ecosystem with modern hooks and patterns
- Comprehensive UI component library (shadcn/ui + Radix)
- Form handling with validation (React Hook Form + Zod)
- Client-side routing and navigation
- Image carousel and interactive components