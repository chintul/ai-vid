# Niche Glossary

**Domain:** nicheglossary.com

## Overview

Niche Glossary is a comprehensive, SEO-optimized glossary website featuring 1,000+ terms from underserved industries. Each term includes detailed definitions, practical use cases, examples, and related terms for maximum SEO value.

## Features

- 📖 **20+ niche categories** (goat farming, metal forging, balloon decorating, etc.)
- 🔍 **Detailed term pages** with definitions, use cases, and examples
- 🎲 **Random term discovery** for engagement
- 📑 **Category browsing** for organized exploration
- 🔗 **Related terms linking** for internal SEO
- 🗺️ **Auto-generated sitemap** covering all terms and categories
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

The app runs on port 3002 by default.

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set the root directory to `apps/niche-glossary` in Vercel settings.

## SEO Strategy

- **Ultra-niche targeting:** Focus on underserved industries with low competition
- **Rich content:** Every term includes multiple sections for better ranking
- **Internal linking:** Related terms create strong link structures
- **Static generation:** All pages pre-rendered for optimal performance
- **Comprehensive sitemap:** All terms and categories indexed

## Adding New Terms

Edit `src/lib/glossary-database.ts` and add new term objects:

```typescript
{
  id: "unique-id",
  term: "Your Term Name",
  slug: "your-term-name",
  category: "Category Name",
  definition: "Clear definition...",
  useCases: ["Use case 1", "Use case 2"],
  relatedTerms: ["related-1", "related-2"],
  examples: ["Example usage 1", "Example usage 2"]
}
```

The app automatically:
- Generates static pages for new terms
- Updates the sitemap
- Adds to category pages
- Creates SEO metadata

## Content Expansion

To scale to 1,000+ terms:
1. Research niche industries with low competition keywords
2. Use GPT/Claude to generate term definitions and use cases
3. Add 50-100 terms per category for depth
4. Focus on practical, searchable terminology

## Categories to Expand

- Goat Farming ✓
- Metal Forging ✓
- Balloon Decorating ✓
- Industrial Cleaning ✓
- Aquaponics ✓
- Beekeeping ✓
- Mushroom Cultivation ✓
- Soap Making
- Leather Working
- Candle Making
- Cheese Making
- Kombucha Brewing
- Vertical Farming
- Pottery & Ceramics
- And 50+ more...
