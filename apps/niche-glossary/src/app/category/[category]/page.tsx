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

  const relatedTermsList = terms
    .flatMap((t) => t.relatedTerms)
    .slice(0, 10)
    .join(", ");

  return {
    title: `${categoryName} Terms & Definitions`,
    description: `Browse ${terms.length} specialized ${categoryName.toLowerCase()} terms with clear definitions, use cases, and examples. Professional glossary for ${categoryName.toLowerCase()} industry terminology.`,
    keywords: [categoryName, "glossary", "definitions", "terminology", relatedTermsList],
    openGraph: {
      title: `${categoryName} Terms & Definitions`,
      description: `${terms.length} professional ${categoryName.toLowerCase()} terms explained`,
      url: `https://niche-glossary.vercel.app/category/${params.category}`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${categoryName} Glossary`,
        },
      ],
    },
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
