# PhilBK Portfolio

PhilBK Portfolio is the personal portfolio website of Phillip-Bryan Kouokam, a Full-Stack Developer. It is designed to showcase production-ready full-stack projects, technical skills, certifications, and professional experience through a polished, product-focused experience.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- Git
- Vercel

## Features

- Premium modern UI
- Fully responsive layouts
- Accessible interactions and content
- SEO-optimized metadata and document structure
- Smooth, performance-conscious animations
- Full-stack project showcase
- Professional certifications
- Résumé download
- Contact section

## Project Structure

```text
src/
├── assets/                 # Images, documents, and other static source assets
├── components/
│   ├── layout/             # Shared page and layout primitives
│   ├── sections/           # Homepage sections added by implementation phase
│   └── ui/                 # Reusable interface primitives
├── constants/              # Routes, site configuration, and social links
├── content/                # Portfolio copy and structured content
├── pages/                  # Route-level page components
├── seo/                    # Shared metadata and SEO configuration
├── App.jsx                 # Application routes
├── index.css               # Tailwind theme and global styles
└── main.jsx                # React application entry point
```

The architecture separates content, shared configuration, route-level pages, and reusable interface components. Sections and specialized abstractions are introduced only when their implementation requires them.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

## Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The application is designed for deployment on [Vercel](https://vercel.com/). Set `VITE_SITE_URL` to the canonical production URL so route-level SEO metadata can emit the correct canonical URL.

## Design Philosophy

The visual system draws inspiration from Apple, Vercel, Linear, and Stripe. Its restrained color palette, deliberate typography, generous spacing, and subtle motion are intended to feel like a modern SaaS product—not a traditional portfolio template.

## Status

**Actively under development.** The project is being implemented incrementally, with accessibility, performance, maintainability, and responsive behavior treated as core requirements.
