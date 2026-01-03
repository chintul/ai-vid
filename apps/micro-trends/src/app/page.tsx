import { Container, Heading, Card, CardContent, Badge, Button } from "@passive-income/ui";
import { trends, getAllCategories, getTrendsByGrowthRate } from "@/lib/trends-database";
import Link from "next/link";

export default function HomePage() {
  const categories = getAllCategories();
  const emergingTrends = getTrendsByGrowthRate("emerging");
  const risingTrends = getTrendsByGrowthRate("rising");

  return (
    <main className="min-h-screen bg-muted/30 py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            MicroTrends
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover emerging topics and niche interests before they go mainstream.
            Tracking {trends.length}+ microtrends across rare hobbies, sports, tools, and subcultures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {risingTrends.length}
              </div>
              <div className="text-sm font-semibold">Rising Trends</div>
              <p className="text-xs text-muted-foreground mt-2">Growing in popularity</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {emergingTrends.length}
              </div>
              <div className="text-sm font-semibold">Emerging Topics</div>
              <p className="text-xs text-muted-foreground mt-2">Just getting started</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length}
              </div>
              <div className="text-sm font-semibold">Categories</div>
              <p className="text-xs text-muted-foreground mt-2">Diverse topics covered</p>
            </CardContent>
          </Card>
        </div>

        {emergingTrends.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🌱 Emerging Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergingTrends.map((trend) => (
                <Link key={trend.slug} href={`/trend/${trend.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow border-emerald-100 dark:border-emerald-900 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="success" className="text-xs">
                          Emerging
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {trend.searchVolume} volume
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{trend.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
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
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📈 Rising Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {risingTrends.map((trend) => (
              <Link key={trend.slug} href={`/trend/${trend.slug}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="default" className="text-xs">
                        Rising
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {trend.searchVolume} volume
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{trend.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
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
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category) => {
              const categoryTrends = trends.filter((t) => t.category === category);
              return (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{category}</h3>
                      <p className="text-xs text-muted-foreground">{categoryTrends.length} trends</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link href="/trends">
            <Button size="lg" className="px-8 py-6 text-lg">
              View All Trends
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
