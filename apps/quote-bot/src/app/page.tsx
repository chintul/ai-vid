"use client";

import { useState } from "react";
import { Container, Heading, Button, Card, CardContent, Badge } from "@passive-income/ui";
import { getDailyQuote, getRandomQuote, getAllCategories, Quote } from "@/lib/quote-database";
import Link from "next/link";

export default function HomePage() {
  const dailyQuote = getDailyQuote();
  const [currentQuote, setCurrentQuote] = useState<Quote>(dailyQuote);
  const categories = getAllCategories();

  const handleRandomQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${currentQuote.text}" - ${currentQuote.author}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4 text-indigo-900">
            QuoteBot
          </Heading>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Daily inspiration and wisdom from around the world
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="shadow-2xl border-indigo-200">
            <CardContent className="p-8 md:p-12">
              <Badge variant="secondary" className="mb-4">
                {currentQuote.category}
              </Badge>
              <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-800 mb-6 leading-relaxed">
                &ldquo;{currentQuote.text}&rdquo;
              </blockquote>
              <p className="text-xl text-slate-600 text-right">— {currentQuote.author}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {currentQuote.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button onClick={handleRandomQuote} size="lg">
              🎲 Random Quote
            </Button>
            <Button onClick={handleCopyQuote} variant="outline" size="lg">
              📋 Copy
            </Button>
            <Button onClick={handleShareTwitter} variant="outline" size="lg">
              🐦 Share
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`}>
                <Card className="hover:shadow-md transition-shadow hover:border-indigo-300">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-slate-800">{category}</h3>
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
