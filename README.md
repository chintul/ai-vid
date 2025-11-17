# Passive Income Monorepo

A complete monorepo containing 4 SEO-optimized, passive-income web applications built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Projects

### 1. **Problem Helper** (`apps/problem-helper`)
**Domain:** problemhelper.ai
**Port:** 3001

Step-by-step solutions to everyday micro-problems. Features:
- 🔍 Searchable problem database
- 📖 Category organization
- 💡 Pro tips and related problems
- 🗺️ Auto-generated sitemap
- 📱 Mobile-responsive

**Target SEO:** Long-tail queries like "how to calculate heating cost for 6x6 house"

---

### 2. **Niche Glossary** (`apps/niche-glossary`)
**Domain:** nicheglossary.com
**Port:** 3002

Comprehensive glossary of 1,000+ niche industry terms. Features:
- 📚 20+ niche categories (goat farming, metal forging, etc.)
- 🎲 Random term discovery
- 🔗 Related terms linking
- 📑 Use cases and examples
- 🗺️ Full sitemap coverage

**Target SEO:** Ultra-niche terminology with zero competition

---

### 3. **QuoteBot** (`apps/quote-bot`)
**Domain:** quotebot.world
**Port:** 3003

Daily inspiration and themed quotes. Features:
- 📅 Consistent daily quote
- 🎲 Random quote generation
- 🏷️ Themed categories
- 📋 Copy & share functionality
- 🐦 Twitter integration
- 🎨 Beautiful gradient UI

**Target SEO:** Category-based queries like "discipline quotes", "spiritual wisdom"

---

### 4. **MicroTrends Dashboard** (`apps/micro-trends`)
**Domain:** microtrends.watch
**Port:** 3004

Track emerging microtrends and niche topics. Features:
- 📊 Trend dashboard with growth indicators
- 🌱 Emerging vs rising trends
- 🏷️ Category organization
- 📈 Search volume indicators
- 🔗 Related topics linking

**Target SEO:** Trend-spotting queries and niche discovery

---

## 📦 Shared Packages

### `@passive-income/ui`
Reusable UI components based on shadcn/ui:
- Button, Card, Badge, Input, Container
- Heading, Link components
- Tailwind CSS with class-variance-authority

### `@passive-income/utils`
Common utilities:
- String manipulation (capitalize, slugify, truncate)
- Date formatting and calculations
- Random selection and shuffling
- Slug generation and keyword extraction

### `@passive-income/seo`
SEO helpers for Next.js:
- Metadata generation
- Sitemap helpers
- Robots.txt generation
- Structured data (Schema.org)

### `@passive-income/analytics`
Analytics tracking:
- Google Analytics integration
- Page view tracking
- Event tracking
- Custom conversions

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build System:** Turborepo
- **Package Manager:** npm
- **Deployment:** Vercel
- **Node Version:** >=18.0.0

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 10.0.0
```

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd passive-income-monorepo

# Install all dependencies
npm install
```

### Development

```bash
# Run all apps in development mode
npm run dev

# Run specific app
cd apps/problem-helper && npm run dev
cd apps/niche-glossary && npm run dev
cd apps/quote-bot && npm run dev
cd apps/micro-trends && npm run dev
```

### Building

```bash
# Build all apps
npm run build

# Build specific app
npx turbo run build --filter=problem-helper
npx turbo run build --filter=niche-glossary
npx turbo run build --filter=quote-bot
npx turbo run build --filter=micro-trends
```

### Linting & Type Checking

```bash
# Run lint for all packages
npm run lint

# Run type check
npm run type-check

# Format code
npm run format
```

---

## 🌐 Deployment

Each app can be deployed independently to Vercel:

### Deploy via Vercel CLI

```bash
# Deploy problem-helper
cd apps/problem-helper
vercel --prod

# Deploy niche-glossary
cd apps/niche-glossary
vercel --prod

# Deploy quote-bot
cd apps/quote-bot
vercel --prod

# Deploy micro-trends
cd apps/micro-trends
vercel --prod
```

### Vercel Dashboard Setup

1. Import the repository
2. Set **Root Directory** to the app path (e.g., `apps/problem-helper`)
3. Vercel auto-detects Next.js and uses the `vercel.json` config
4. Set custom domain in project settings
5. Deploy!

### Environment Variables

Each app may need:
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (optional)
- `NEXT_PUBLIC_SITE_URL` (for production)

---

## 📊 SEO Strategy

### Core Principles

1. **Ultra-low competition keywords**
   - Target long-tail queries with <100 monthly searches
   - Focus on hyper-specific problems and niche topics

2. **Content depth**
   - Each page has unique, valuable content
   - Step-by-step guides, definitions, use cases
   - Internal linking for authority distribution

3. **Static generation**
   - All pages pre-rendered at build time
   - Fast loading speeds = better rankings
   - Optimal Core Web Vitals

4. **Comprehensive sitemaps**
   - Auto-generated for all pages
   - Submitted to Google Search Console
   - Weekly updates for freshness

### Scaling Strategy

**Short-term (Months 1-3):**
- Deploy all 4 apps to custom domains
- Submit sitemaps to Google Search Console
- Start tracking in Google Analytics
- Monitor initial rankings

**Mid-term (Months 3-6):**
- Expand content (50-100 new pages per app)
- Add Google AdSense
- Build backlinks through content sharing
- Optimize based on search performance

**Long-term (Months 6-12):**
- Scale to 1,000+ pages per app
- Add affiliate partnerships
- Create content APIs for developers
- Launch premium features

---

## 💰 Monetization Ideas

### All Apps
- Google AdSense
- Affiliate links
- Sponsored content
- API access

### App-Specific
**Problem Helper:**
- Tool/product affiliate links
- Premium solution packs
- Video tutorials (YouTube monetization)

**Niche Glossary:**
- Industry-specific ads
- Course/book affiliate links
- Premium glossaries (PDF downloads)

**QuoteBot:**
- Quote merchandise
- Premium quote collections
- Custom quote image generation

**MicroTrends:**
- Trend reports (paid)
- Newsletter subscriptions
- Market research API
- Consulting services

---

## 📈 Performance

Each app is optimized for:
- ⚡ **Fast load times** (<2s FCP)
- 📱 **Mobile-first** responsive design
- ♿ **Accessibility** (WCAG 2.1 AA)
- 🔍 **SEO** (100/100 Lighthouse scores)

---

## 🤝 Contributing

This is a personal passive-income project, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 License

MIT License - feel free to use this as a template for your own passive-income projects.

---

## 🎯 Project Goals

1. ✅ Build 4 functional, deployable apps
2. ✅ Create reusable shared package infrastructure
3. ✅ Implement comprehensive SEO optimization
4. ✅ Design for zero-maintenance operation
5. 🎯 Achieve first Google rankings (Month 2-3)
6. 🎯 Generate first revenue (Month 3-4)
7. 🎯 Scale to $100/month passive income (Month 6-12)

---

## 📚 Documentation

Each app has its own README with specific details:
- [Problem Helper README](./apps/problem-helper/README.md)
- [Niche Glossary README](./apps/niche-glossary/README.md)
- [QuoteBot README](./apps/quote-bot/README.md)
- [MicroTrends README](./apps/micro-trends/README.md)

---

## 🐛 Known Issues

- Some shared package types may need explicit imports in apps
- First build might be slow due to Turbo cache initialization
- Dev mode runs all apps simultaneously (resource intensive)

---

## 🔮 Future Enhancements

- [ ] Add automated content generation via GPT/Claude
- [ ] Implement scheduled sitemap updates
- [ ] Create admin dashboard for content management
- [ ] Add A/B testing for conversion optimization
- [ ] Build mobile apps (React Native)
- [ ] Add multi-language support
- [ ] Create browser extensions

---

**Built with ❤️ for passive income generation**

For questions or collaboration: [Your contact info]
