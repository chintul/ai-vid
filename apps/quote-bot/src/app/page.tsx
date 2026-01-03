import { Container, Heading, Card, CardContent, Button } from "@passive-income/ui";
import { getDailyQuote, quotes as staticQuotes } from "@/lib/quote-database";
import { getAllQuotes } from "@/lib/content-loader";
import { QuoteMachine } from "@/components/QuoteMachine";
import Link from "next/link";

export default async function HomePage() {
  const fileQuotes = await getAllQuotes();
  const allQuotes = [...staticQuotes, ...fileQuotes];

  // Get daily quote based on date index from full combined list
  // Using simple math on the combined length
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const dailyQuoteIndex = dayOfYear % allQuotes.length;
  const dailyQuote = allQuotes[dailyQuoteIndex];

  const categories = Array.from(new Set(allQuotes.map((q) => q.category))).sort();

  return (
    <main className="min-h-screen bg-muted/40 py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4 text-primary">
            QuoteBot
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Daily inspiration and wisdom from around the world
          </p>
        </div>

        <QuoteMachine
          initialQuote={dailyQuote}
          allQuotes={allQuotes}
          categories={categories}
        />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`}>
                <Card className="hover:shadow-md transition-shadow hover:border-primary/50">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/all">
            <Button variant="outline" size="lg">
              View All Quotes
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
