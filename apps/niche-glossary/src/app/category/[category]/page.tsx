import { notFound } from "next/navigation";
import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { getTermsByCategory, getAllCategories } from "@/lib/glossary-database";
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
  const terms = getTermsByCategory(categoryName);

  if (terms.length === 0) {
    return {};
  }

  return {
    title: `${categoryName} Terms | Niche Glossary`,
    description: `Browse ${terms.length} specialized terms and definitions for ${categoryName}.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = unslugify(params.category);
  const terms = getTermsByCategory(categoryName);

  if (terms.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <Heading level={1} className="mb-4">
            {categoryName}
          </Heading>
          <p className="text-xl text-slate-600">
            {terms.length} specialized terms in this category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {terms.map((term) => (
            <Link key={term.slug} href={`/term/${term.slug}`}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{term.term}</h3>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {term.definition}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {term.relatedTerms.slice(0, 3).map((related) => (
                      <Badge key={related} variant="outline" className="text-xs">
                        {related}
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
