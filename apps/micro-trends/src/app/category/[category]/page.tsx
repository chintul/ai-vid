import { notFound } from "next/navigation";
import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { getTrendsByCategory, getAllCategories } from "@/lib/trends-database";
import type { Metadata } from "next";
import Link from "next/link";
import { unslugify } from "@passive-income/utils";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = unslugify(params.category);
  const trends = getTrendsByCategory(categoryName);

  if (trends.length === 0) {
    return {};
  }

  return {
    title: `${categoryName} | MicroTrends`,
    description: `Explore ${trends.length} microtrends in ${categoryName}.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = unslugify(params.category);
  const trends = getTrendsByCategory(categoryName);

  if (trends.length === 0) {
    notFound();
  }

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
            {categoryName}
          </Heading>
          <p className="text-xl text-slate-600">{trends.length} microtrends in this category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends.map((trend) => (
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
                  <div className="flex flex-wrap gap-1 mt-3">
                    {trend.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
