import { notFound } from "next/navigation";
import { Container, Heading, Card, CardContent, CardHeader, CardTitle, Badge } from "@passive-income/ui";
import { generateMetadata as genMeta } from "@passive-income/seo";
import { getTermBySlug, glossaryTerms } from "@/lib/glossary-database";
import type { Metadata } from "next";
import Link from "next/link";

interface TermPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const term = getTermBySlug(params.slug);

  if (!term) {
    return {};
  }

  return genMeta({
    title: `${term.term} - ${term.category}`,
    description: term.definition,
    keywords: [term.term, term.category, ...term.relatedTerms],
    url: `https://niche-glossary.vercel.app/term/${term.slug}`,
    type: "article",
    image: {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: term.term,
    },
  });
}

export default function TermPage({ params }: TermPageProps) {
  const term = getTermBySlug(params.slug);

  if (!term) {
    notFound();
  }

  // Structured data for SEO - DefinedTerm is perfect for glossary terms
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.definition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": `${term.category} Glossary`,
    },
    "url": `https://niche-glossary.vercel.app/term/${term.slug}`,
  };

  return (
    <main className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Container maxWidth="lg">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {term.category}
            </Badge>
            <Heading level={1} className="mb-4">
              {term.term}
            </Heading>
          </header>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Definition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{term.definition}</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {term.useCases.map((useCase, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {term.examples && term.examples.length > 0 && (
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {term.examples.map((example, index) => (
                    <li key={index} className="italic text-green-900">
                      &ldquo;{example}&rdquo;
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((relatedTerm) => (
                    <Badge key={relatedTerm} variant="outline" className="text-sm">
                      {relatedTerm}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </article>

        <div className="mt-12 pt-8 border-t">
          <div className="flex gap-4">
            <Link href={`/category/${term.category.toLowerCase().replace(/\s+/g, "-")}`}>
              <Badge variant="secondary" className="cursor-pointer hover:bg-slate-300">
                More {term.category} terms →
              </Badge>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
