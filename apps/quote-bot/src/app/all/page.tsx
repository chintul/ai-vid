import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { quotes } from "@/lib/quote-database";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Quotes | QuoteBot",
  description: `Browse all ${quotes.length} inspirational quotes across multiple categories.`,
};

export default function AllQuotesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <Container maxWidth="xl">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <Heading level={1} className="mb-4 text-indigo-900">
            All Quotes
          </Heading>
          <p className="text-xl text-slate-700">
            Browse our complete collection of {quotes.length} inspirational quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <Card key={quote.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {quote.category}
                </Badge>
                <blockquote className="text-lg font-serif italic text-slate-800 mb-4">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <p className="text-slate-600">— {quote.author}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {quote.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
