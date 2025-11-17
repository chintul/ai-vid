import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { trends } from "@/lib/trends-database";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Trends | MicroTrends",
  description: `Browse all ${trends.length} microtrends across rare hobbies, niche sports, and emerging topics.`,
};

export default function AllTrendsPage() {
  const sortedTrends = [...trends].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <Container maxWidth="xl">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="mb-12">
          <Heading level={1} className="mb-4">
            All Trends
          </Heading>
          <p className="text-xl text-slate-600">
            Explore {trends.length} microtrends and emerging topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTrends.map((trend) => (
            <Link key={trend.slug} href={`/trend/${trend.slug}`}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={
                        trend.growthRate === "emerging"
                          ? "success"
                          : trend.growthRate === "rising"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {trend.growthRate}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {trend.searchVolume}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{trend.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-3">
                    {trend.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {trend.category}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
