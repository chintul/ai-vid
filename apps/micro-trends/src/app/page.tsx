import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { trends, getAllCategories, getTrendsByGrowthRate } from "@/lib/trends-database";
import Link from "next/link";

export default function HomePage() {
  const categories = getAllCategories();
  const emergingTrends = getTrendsByGrowthRate("emerging");
  const risingTrends = getTrendsByGrowthRate("rising").slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            MicroTrends
          </Heading>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover emerging topics and niche interests before they go mainstream.
            Tracking {trends.length}+ microtrends across rare hobbies, sports, tools, and subcultures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">
                {risingTrends.length}
              </div>
              <div className="text-sm text-green-900 font-semibold">Rising Trends</div>
              <p className="text-xs text-green-700 mt-2">Growing in popularity</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-700 mb-2">
                {emergingTrends.length}
              </div>
              <div className="text-sm text-blue-900 font-semibold">Emerging Topics</div>
              <p className="text-xs text-blue-700 mt-2">Just getting started</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-700 mb-2">
                {categories.length}
              </div>
              <div className="text-sm text-purple-900 font-semibold">Categories</div>
              <p className="text-xs text-purple-700 mt-2">Diverse topics covered</p>
            </CardContent>
          </Card>
        </div>

        {emergingTrends.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🌱 Emerging Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergingTrends.map((trend) => (
                <Link key={trend.slug} href={`/trend/${trend.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow border-emerald-200 h-full">
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
                      <p className="text-xs text-slate-600">{categoryTrends.length} trends</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link href="/trends">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold">
              View All Trends
            </button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
