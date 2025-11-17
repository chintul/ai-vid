import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { glossaryTerms } from "@/lib/glossary-database";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Terms | Niche Glossary",
  description: `Browse all ${glossaryTerms.length} niche industry terms with definitions and examples.`,
};

export default function AllTermsPage() {
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

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
            All Terms
          </Heading>
          <p className="text-xl text-slate-600">
            Browse our complete glossary of {glossaryTerms.length} specialized industry terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTerms.map((term) => (
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
      </Container>
    </main>
  );
}
