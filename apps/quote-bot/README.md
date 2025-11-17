# QuoteBot

**Domain:** quotebot.world

## Overview

QuoteBot is a beautiful, minimalist quote application that serves daily inspiration across multiple themes. Features include random quote generation, category browsing, and easy social sharing.

## Features

- 📅 **Daily quote** - Consistent quote each day based on date
- 🎲 **Random quotes** - Instant inspiration on demand
- 🏷️ **Themed categories** (Love, Discipline, Productivity, Spiritual, etc.)
- 📋 **Copy to clipboard** for easy sharing
- 🐦 **Twitter sharing** integration
- 📱 **Responsive design** with beautiful gradients
- 🔍 **SEO optimized** with category pages

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Client-side interactivity
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

The app runs on port 3003 by default.

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set the root directory to `apps/quote-bot` in Vercel settings.

## SEO Strategy

- **Category pages** for topical SEO (love quotes, discipline quotes, etc.)
- **Daily refresh** encourages repeat visits
- **Social sharing** drives backlinks
- **Long-tail keywords** like "Mongolian wisdom quotes"
- **Static generation** for fast loading

## Adding New Quotes

Edit `src/lib/quote-database.ts` and add quote objects:

```typescript
{
  id: "unique-id",
  text: "Your quote text",
  author: "Author Name",
  category: "Category",
  tags: ["tag1", "tag2", "tag3"]
}
```

## Content Expansion

To scale to 1,000+ quotes:
1. Use GPT/Claude to generate themed quotes
2. Source from public domain collections
3. Add niche categories (stoic, entrepreneurship, mindfulness)
4. Create "quote of the day" collection pages
5. Add image generation for social sharing

## Categories

Current categories:
- Love
- Discipline
- Productivity
- Spiritual
- Friendship
- Mongolian
- Courage
- Work
- Motivation
- Self
- Life
- Action

## Monetization Ideas

- Google AdSense on quote pages
- Affiliate links to quote books
- Premium quote packs
- Quote image generator (paid feature)
- API access for developers
