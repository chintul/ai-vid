# Problem Helper

**Domain:** problemhelper.ai

## Overview

Problem Helper is a simple, SEO-optimized app that provides step-by-step solutions to everyday micro-problems. From calculating heating costs to fixing squeaky doors, users get clear, actionable answers.

## Features

- 🔍 **Search functionality** for finding solutions
- 📚 **Organized by category** for easy browsing
- 📖 **Step-by-step instructions** for each problem
- 💡 **Pro tips** for better results
- 🔗 **Related problems** linking for SEO
- 🗺️ **Auto-generated sitemap** for search engines
- 📱 **Mobile-responsive** design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shared monorepo packages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app runs on port 3001 by default.

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set the root directory to `apps/problem-helper` in Vercel settings.

## SEO Strategy

- **Long-tail keywords:** Targets specific, low-competition queries
- **Static generation:** All problem pages are pre-rendered
- **Structured metadata:** Complete OpenGraph and Twitter cards
- **Internal linking:** Related problems boost page authority
- **Sitemap:** Auto-generated for optimal crawling

## Adding New Problems

Edit `src/lib/problem-database.ts` and add new problem objects. The app will automatically:
- Generate static pages
- Update the sitemap
- Add to category pages
- Enable search functionality

## Content Strategy

Focus on:
- Hyper-specific problems ("how to X for Y situation")
- Low search volume but high intent keywords
- Step-by-step format that's easy to skim
- Related problem linking for session depth
