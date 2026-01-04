import { notFound } from "next/navigation";
import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { generateMetadata as genMeta, generateArticleSchema } from "@passive-income/seo";
import { getTrendBySlug, trends } from "@/lib/trends-database";
import type { Metadata } from "next";
import Link from "next/link";

interface TrendPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return trends.map((trend) => ({
    slug: trend.slug,
  }));
}

export async function generateMetadata({ params }: TrendPageProps): Promise<Metadata> {
  const trend = getTrendBySlug(params.slug);

  if (!trend) {
    return {};
  }

  return genMeta({
    title: `${trend.title} - ${trend.category}`,
    description: trend.description,
    keywords: [...trend.tags, trend.category, "microtrend"],
    url: `https://micro-trends.vercel.app/trend/${trend.slug}`,
    type: "article",
    image: {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: trend.title,
    },
  });
}

export default function TrendPage({ params }: TrendPageProps) {
  const trend = getTrendBySlug(params.slug);

  if (!trend) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = generateArticleSchema({
    title: trend.title,
    description: trend.description,
    publishedDate: trend.dateIdentified || trend.lastUpdated,
    modifiedDate: trend.lastUpdated,
    url: `https://micro-trends.vercel.app/trend/${trend.slug}`,
    image: "https://micro-trends.vercel.app/og-image.png",
    publisherName: "MicroTrends",
    publisherLogo: "https://micro-trends.vercel.app/logo.png",
  });

  const growthRateColors = {
    emerging: "bg-emerald-100 text-emerald-800 border-emerald-300",
    rising: "bg-blue-100 text-blue-800 border-blue-300",
    stable: "bg-slate-100 text-slate-800 border-slate-300",
  };

  const growthRateIcons = {
    emerging: "🌱",
    rising: "📈",
    stable: "📊",
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Container maxWidth="lg">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">
            ← Back to Dashboard
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">{trend.category}</Badge>
              <Badge className={growthRateColors[trend.growthRate]}>
                {growthRateIcons[trend.growthRate]} {trend.growthRate}
              </Badge>
            </div>
            <Heading level={1} className="mb-4">
              {trend.title}
            </Heading>
            <p className="text-xl text-slate-600">{trend.description}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Growth Status</div>
                <div className="text-lg font-bold capitalize">{trend.growthRate}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Search Volume</div>
                <div className="text-lg font-bold capitalize">{trend.searchVolume}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Last Updated</div>
                <div className="text-lg font-bold">
                  {new Date(trend.lastUpdated).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {trend.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {trend.relatedTopics.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Related Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {trend.relatedTopics.map((topic) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </article>

        <div className="mt-12 pt-8 border-t">
          <Link href={`/category/${trend.category.toLowerCase().replace(/\s+/g, "-")}`}>
            <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">
              More {trend.category} trends →
            </Badge>
          </Link>
        </div>
      </Container>
    </main>
  );
}
