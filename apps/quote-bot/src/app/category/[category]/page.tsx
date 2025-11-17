"use client";

import { useState, useEffect } from "react";
import { Container, Heading, Card, CardContent, Badge, Button } from "@passive-income/ui";
import { getQuotesByCategory, getRandomQuoteByCategory, Quote } from "@/lib/quote-database";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = typeof params.category === "string" ? params.category : "";
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [featuredQuote, setFeaturedQuote] = useState<Quote | undefined>();

  useEffect(() => {
    const categoryQuotes = getQuotesByCategory(categoryName);
    setQuotes(categoryQuotes);
    setFeaturedQuote(getRandomQuoteByCategory(categoryName));
  }, [categoryName]);

  const handleNewRandom = () => {
    const newQuote = getRandomQuoteByCategory(categoryName);
    if (newQuote) setFeaturedQuote(newQuote);
  };

  if (quotes.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <Container>
          <p>Category not found</p>
          <Link href="/" className="text-indigo-600">
            Go back home
          </Link>
        </Container>
      </main>
    );
  }

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
            {categoryName} Quotes
          </Heading>
          <p className="text-xl text-slate-700">{quotes.length} inspiring quotes</p>
        </div>

        {featuredQuote && (
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="shadow-2xl border-indigo-200">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-serif italic text-slate-800 mb-6">
                  &ldquo;{featuredQuote.text}&rdquo;
                </blockquote>
                <p className="text-xl text-slate-600 text-right">— {featuredQuote.author}</p>
              </CardContent>
            </Card>
            <div className="mt-4 text-center">
              <Button onClick={handleNewRandom} variant="outline">
                🎲 Another {categoryName} Quote
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <Card key={quote.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
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
