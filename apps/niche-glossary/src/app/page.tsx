import { Container, Heading, Button, Card, CardContent, Badge } from "@passive-income/ui";
import Link from "next/link";
import { glossaryTerms, getAllCategories, getRandomTerm } from "@/lib/glossary-database";

export default function HomePage() {
  const categories = getAllCategories();
  const randomTerm = getRandomTerm();
  const featuredTerms = glossaryTerms.slice(0, 6);

  return (
    <main className="min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            Niche Industry Glossary
          </Heading>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Clear definitions and practical examples for {glossaryTerms.length}+ specialized terms across underserved industries.
            From goat farming to balloon decorating.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12 flex gap-4">
          <Link href={`/term/${randomTerm.slug}`} className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              🎲 Random Term
            </Button>
          </Link>
          <Link href="/terms" className="flex-1">
            <Button className="w-full" size="lg">
              Browse All Terms
            </Button>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold">{category}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {glossaryTerms.filter((t) => t.category === category).length} terms
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTerms.map((term) => (
              <Link key={term.slug} href={`/term/${term.slug}`}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {term.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2">{term.term}</h3>
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {term.definition}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
