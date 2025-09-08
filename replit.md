# replit.md

## Overview

UrbanTech Insight Platform is a newspaper-style web application built with React and Express.js featuring a virtual infinite newspaper with a 25x25 zoomable grid layout. The platform displays real AEC (Architecture, Engineering, Construction) industry content with a monochromatic design enhanced by halftone dot effects. It includes fixed header navigation with integrated zoom controls and a follow subscription system.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (December 2024)

- ✅ Integrated zoom controls directly into black header bar with pink magnifying glass icons
- ✅ Implemented follow button with pink-themed glass effect popup modal
- ✅ Added professional editor login page with Teams, Google, and LinkedIn authentication
- ✅ Moved "SIGNAL" branding to left side of header with large IBM Plex Sans font
- ✅ Successfully imported 10 real AEC industry articles from CSV data
- ✅ Removed unused lorem ipsum generation code and cleaned up codebase
- ✅ Fixed native scrolling implementation (removed CSS transforms approach)
- ✅ Eliminated unnecessary ZoomControls component and other unused code

## System Architecture

### Frontend Architecture

Clean React TypeScript SPA with minimal dependencies:

- **Core Components**: HomePage, AdminLogin, AdminPage, NewspaperGrid, ArticleCard
- **UI Framework**: Minimal shadcn/ui components (Dialog, Button, Form, Input, Card only)
- **Styling**: TailwindCSS with custom newspaper fonts (IBM Plex Sans, Inter)
- **State Management**: React Query for server state, React hooks for local state  
- **Routing**: Wouter for lightweight routing (/, /admin, /admin/login)
- **Build Tool**: Vite with React plugin

### Backend Architecture

Streamlined Express.js REST API:

- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage with clean interface for articles and follow subscriptions
- **File Processing**: Multer for CSV import functionality
- **API Endpoints**: Articles CRUD, voting, CSV import, follow subscriptions
- **Real Data**: 10 AEC industry articles (not lorem ipsum)

### Data Storage

- **Primary**: In-memory storage (MemStorage class)
- **Schema**: Clean Article and User types with proper TypeScript interfaces
- **Data Source**: Real AEC articles imported from CSV
- **No Mock Data**: Removed all lorem ipsum generators and placeholder content

### Key Features

- **Interactive Grid**: 25x25 newspaper grid with native scrolling and zoom
- **Header Controls**: Integrated zoom controls with pink accent colors
- **Follow System**: Glass effect modal with name/email validation  
- **Editor Access**: Professional login page with OAuth provider options
- **Real Content**: Authentic AEC industry articles with proper categorization
- **Responsive**: Mobile-first design with newspaper typography

### Code Quality

- **Clean Imports**: Removed unused dependencies and components
- **Type Safety**: Full TypeScript coverage with proper error handling
- **Performance**: Eliminated unnecessary rerenders and optimized state management
- **Minimal Bundle**: Only essential UI components included
- **No Technical Debt**: Removed deprecated code and unused constants