# PhilBK Portfolio

A personal website designed to communicate how I think about engineering, showcase the products I have built, and demonstrate my approach to building software people genuinely enjoy using.

[![Live Website](https://img.shields.io/badge/Live_Website-philbk.dev-2563eb?style=flat-square)](https://philbk.dev)
[![Résumé](https://img.shields.io/badge/R%C3%A9sum%C3%A9-PDF-334155?style=flat-square)](https://philbk.dev/resume.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Phillip--Bryan_Kouokam-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/phillip-bryan-kouokam)
[![GitHub](https://img.shields.io/badge/GitHub-PhilBKouokam-181717?style=flat-square&logo=github)](https://github.com/PhilBKouokam)

Built with React, Vite, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Why I Built It

The goal was never simply to create another portfolio or arrange projects in a gallery. I wanted the website to establish how I approach product and engineering work before someone opens my résumé.

The experience is designed to communicate four things clearly:

- **Engineering philosophy** — why useful, trustworthy products matter more than technical novelty.
- **Product thinking** — how real user problems guide decisions about scope, interaction, and value.
- **Systems thinking** — how architecture, content, accessibility, performance, and delivery work together.
- **Technical credibility** — evidence through shipped products, engineering work, technologies, and certifications.

## Design Philosophy

> Software is easy to build. Software people genuinely enjoy using is much harder.

That belief shaped both the content and the interface. The website avoids treating technology as the story. Instead, it uses simplicity, clarity, and thoughtful presentation to help visitors understand the reasoning behind the work.

The design aims to earn trust through readable copy, honest product descriptions, predictable navigation, restrained motion, and a clear distinction between primary products and supporting engineering work. Every section is intended to answer a useful question rather than add decoration.

## Product Overview

From a visitor's perspective, the homepage is one continuous narrative:

1. **Identity** — AI-Native Full-Stack Engineer.
2. **Philosophy** — why I build and what I believe good engineering should accomplish.
3. **Process** — how I investigate, architect, build, verify, and ship.
4. **Products** — evidence of product judgment and full-stack engineering through CalorieBank, SpendWise, and Habit Tracker.
5. **Principles** — the standards behind technical and product decisions.
6. **Technologies and certifications** — the tools and foundations that support the work.
7. **Contact** — a direct invitation to continue the conversation.

This sequence makes the site a product narrative rather than a traditional portfolio gallery.

## Features

### Professional Identity

- Clear AI-Native Full-Stack Engineer positioning.
- Philosophy-first narrative focused on product judgment, systems thinking, and user needs.
- Consistent access to the canonical résumé and professional profiles.

### Product Showcase

- Three primary products presented through the problem, product response, engineering decisions, technologies, and relevant actions.
- Additional engineering work presented with intentionally secondary visual weight.
- Truthful links to live products, source repositories, demonstrations, and documentation.

### Engineering Process

- A five-stage workflow: Investigate, Architect, Build, Verify, and Ship.
- Engineering principles that explain how decisions are evaluated.
- AI presented as an accelerator within a disciplined, human-reviewed process.

### Responsive Experience

- Layouts designed for mobile, tablet, laptop, and wide desktop viewports.
- Responsive product cards, navigation, typography, spacing, and media.
- Stable layouts and optimized project imagery.

### Accessibility

- Semantic page structure and descriptive accessible names.
- Keyboard-operable navigation, calls to action, product links, and mobile dialog.
- Visible focus states and focused anchor destinations.
- Reduced-motion and forced-colors support.

### SEO

- Centralized titles, descriptions, canonical URLs, and social metadata.
- Open Graph and Twitter image support.
- Route-aware metadata for the homepage and 404 experience.

### Résumé Access

- A stable canonical résumé at [`/resume.pdf`](https://philbk.dev/resume.pdf).
- Résumé links available from the header, hero, contact section, and footer.

## Architecture

The application separates structured content from presentation so the story can evolve without coupling every copy change to component logic.

```text
Structured Content
        ↓
Reusable Components
        ↓
Page Composition
        ↓
SEO and Metadata
        ↓
Production Build and Deployment
```

### Responsibilities

- **Content** — JavaScript modules define the hero, philosophy, process, products, principles, technologies, certifications, navigation, and shared site information.
- **Reusable components** — layout, section, portfolio, and UI components translate structured content into consistent, accessible interface patterns.
- **Page composition** — route-level pages arrange those sections into the intended narrative while keeping routing concerns separate.
- **SEO** — shared metadata utilities keep page titles, canonical URLs, social metadata, and structured information aligned with the site's content.
- **Deployment** — Vite produces the optimized static build, while Vercel serves the production site and stable public assets.

This separation keeps content updates predictable, reduces duplicated markup, and makes visual or narrative changes easier to verify across responsive layouts.

## Engineering Decisions

### Why React

The homepage contains repeated but distinct interaction and presentation patterns: product cards, section headings, navigation behavior, metadata updates, and responsive content groups. React provides a clear component model for sharing those patterns without turning the page into one large template.

### Why Vite

Vite keeps local development fast and the production pipeline straightforward. Its small configuration surface is appropriate for a client-rendered portfolio while still supporting multiple HTML entry points and build-time metadata replacement.

### Why Tailwind CSS

Tailwind keeps responsive rules and design-system decisions close to the components that use them. The tradeoff is dense class markup, but the result is a consistent spacing, typography, color, and breakpoint system without a large collection of narrowly scoped stylesheets.

### Why Framer Motion

Framer Motion supports restrained entrance and interaction transitions with reusable reduced-motion checks. Animation is treated as hierarchy and feedback, not spectacle, and the interface remains complete when motion is reduced.

### Why Structured Content Modules

Narrative and product data live outside presentation components. That boundary makes claims easier to review, links easier to audit, and section content easier to refine without rewriting layout logic.

### Why Reusable UI Components

Shared buttons, badges, project actions, previews, technology lists, section headings, and layout primitives create consistent behavior across the site. Reuse also concentrates accessibility and responsive decisions in fewer places, reducing the risk of sections drifting apart over time.

## Technology Stack

### Interface

- React
- JavaScript
- HTML
- Tailwind CSS
- Framer Motion
- Lucide React

### Application and Routing

- React Router
- Structured JavaScript content modules
- Reusable React components

### Quality and Delivery

- ESLint
- Git and GitHub
- Vite production builds
- Vercel deployment

## Development Workflow

AI-assisted development helped accelerate investigation, architecture exploration, implementation, debugging, review, and documentation. It did not replace engineering judgment.

Technical decisions, product claims, accessibility review, responsive testing, build validation, and final verification remained under human review. The working sequence used throughout the project was:

```text
Investigate → Architect → Build → Verify → Ship
```

## Project Structure

```text
src/
├── assets/                 # Project imagery and other source assets
├── components/
│   ├── layout/             # Shared page and layout primitives
│   ├── portfolio/          # Product, process, and certification presentation
│   ├── sections/           # Homepage narrative sections
│   └── ui/                 # Reusable interface primitives
├── constants/              # Route constants
├── content/                # Portfolio copy and structured content
├── pages/                  # Route-level page composition
├── seo/                    # Shared metadata and SEO configuration
├── utils/                  # Shared navigation behavior
├── App.jsx                 # Application routes
├── index.css               # Tailwind theme and global styles
└── main.jsx                # React application entry point
```

## Local Development

### Prerequisites

- Node.js 20 or later
- npm

### Installation

From the `philbk-portfolio` directory:

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

## Visual Design Philosophy

The visual direction draws useful lessons from product companies such as Apple, Vercel, Linear, and Stripe without attempting to reproduce any one of them. The broader goal is a coherent interface built around:

- **Clarity over decoration** — every visual element should support comprehension or interaction.
- **Restrained hierarchy** — strong typography, spacing, contrast, and subtle accents establish importance without excessive visual noise.
- **Accessibility** — semantic structure, keyboard support, visible focus, sufficient contrast, and reduced-motion behavior are part of the design system.
- **Readability** — controlled line lengths and generous spacing keep philosophy and product narratives comfortable to scan.
- **Responsiveness** — each layout adapts intentionally instead of merely shrinking a desktop composition.
- **Performance** — restrained animation, optimized assets, stable dimensions, and a focused dependency set protect the experience.

The result is intended to feel like a polished product website: confident, useful, and respectful of the visitor's attention.

## Status

The production site is available at [philbk.dev](https://philbk.dev). Accessibility, performance, maintainability, truthful product claims, and responsive behavior remain ongoing engineering requirements.
