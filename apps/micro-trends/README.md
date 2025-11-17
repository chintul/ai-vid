# MicroTrends Dashboard

**Domain:** microtrends.watch

## Overview

MicroTrends is a dashboard-style website tracking emerging topics, rare hobbies, niche sports, and minor subcultures. Perfect for trend spotters, content creators, and curious minds looking to discover what's next.

## Features

- 📊 **Trend Dashboard** with growth indicators
- 🌱 **Emerging trends** section for early discoveries
- 📈 **Rising trends** tracking
- 🏷️ **Category organization** (Rare Hobbies, Niche Sports, etc.)
- 🔍 **Detailed trend pages** with tags and related topics
- 📱 **Responsive design** with clean UI
- 🗺️ **SEO optimized** for discoverability

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

The app runs on port 3004 by default.

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set the root directory to `apps/micro-trends` in Vercel settings.

## SEO Strategy

- **Long-tail keywords** for niche topics (e.g., "urban foraging trend", "disc golf growth")
- **Category pages** for broader topic coverage
- **Trend status badges** (emerging, rising, stable) for timely content
- **Regular updates** with new trends
- **Related topics** for internal linking

## Adding New Trends

Edit `src/lib/trends-database.ts` and add trend objects:

```typescript
{
  id: "unique-id",
  title: "Trend Name",
  slug: "trend-name",
  category: "Category",
  description: "Detailed description...",
  growthRate: "emerging" | "rising" | "stable",
  searchVolume: "low" | "medium" | "high",
  tags: ["tag1", "tag2"],
  relatedTopics: ["topic1", "topic2"],
  lastUpdated: "2024-01-20"
}
```

## Current Categories

- Rare Hobbies (Urban Foraging, Lock Sport, Magnet Fishing)
- Niche Sports (Disc Golf, Spikeball, Bossaball)
- Small Tools (Japanese Pull Saws, Pocket Microscopes)
- Weird Questions (Why do pigeons bob heads, etc.)
- Minor Subcultures (Cottagecore, Van Life, Dark Academia)
- Emerging Materials (Mushroom Leather)
- Urban Agriculture (Rooftop Beekeeping)
- Media Trends (Slow TV)

## Content Expansion

To scale to 100+ trends:
1. Research Reddit, TikTok, and niche forums
2. Track Google Trends for emerging keywords
3. Monitor niche communities and Discord servers
4. Add 10-20 trends per category
5. Update growth rates quarterly

## Monetization Ideas

- Google AdSense
- Affiliate links to trend-related products
- Newsletter subscriptions for trend updates
- API access for marketers and researchers
- Trend reports (PDF downloads)
- Sponsored trend features

## Data Updates

Manually update trends weekly or use automation:
- Scrape Google Trends data
- Monitor social media APIs
- Track search volume changes
- Update growth rate indicators
