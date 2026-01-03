"use client";

import { useState } from "react";
import { Container, Heading, Card, CardContent, Badge, Button } from "@passive-income/ui";
import { Quote } from "@/lib/quote-database";
import Link from "next/link";

interface CategoryViewerProps {
    categoryName: string;
    initialQuotes: Quote[];
    initialFeaturedQuote?: Quote;
}

export function CategoryViewer({ categoryName, initialQuotes, initialFeaturedQuote }: CategoryViewerProps) {
    const [featuredQuote, setFeaturedQuote] = useState<Quote | undefined>(initialFeaturedQuote);

    const handleNewRandom = () => {
        if (initialQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * initialQuotes.length);
            setFeaturedQuote(initialQuotes[randomIndex]);
        }
    };

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
                        {categoryName} Quotes
                    </Heading>
                    <p className="text-xl text-muted-foreground">{initialQuotes.length} inspiring quotes</p>
                </div>

                {featuredQuote && (
                    <div className="max-w-3xl mx-auto mb-12">
                        <Card className="shadow-2xl border-primary/20">
                            <CardContent className="p-8">
                                <blockquote className="text-2xl font-serif italic text-foreground mb-6">
                                    &ldquo;{featuredQuote.text}&rdquo;
                                </blockquote>
                                <p className="text-xl text-muted-foreground text-right">— {featuredQuote.author}</p>
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
                    {initialQuotes.map((quote) => (
                        <Card key={quote.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
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
