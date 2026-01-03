import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { quotes as staticQuotes } from "@/lib/quote-database";
import { getAllQuotes } from "@/lib/content-loader";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const fileQuotes = await getAllQuotes();
  const totalCount = staticQuotes.length + fileQuotes.length;

  return {
    title: "All Quotes | QuoteBot",
    description: `Browse all ${totalCount} inspirational quotes across multiple categories.`,
  };
}

export default async function AllQuotesPage() {
  const fileQuotes = await getAllQuotes();
  const allQuotes = [...staticQuotes, ...fileQuotes];

  return (
    <main className="min-h-screen bg-muted/40 py-12">
      <Container maxWidth="xl">
        <div className="mb-6">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <Heading level={1} className="mb-4 text-primary">
            All Quotes
          </Heading>
          <p className="text-xl text-muted-foreground">
            Browse our complete collection of {allQuotes.length} inspirational quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allQuotes.map((quote) => (
            <Card key={quote.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {quote.category}
                </Badge>
                <blockquote className="text-lg font-serif italic text-foreground mb-4">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <p className="text-muted-foreground">— {quote.author}</p>
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
