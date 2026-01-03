"use client";

import { useState } from "react";
import { Button, Card, CardContent, Badge } from "@passive-income/ui";
import { Quote } from "@/lib/quote-database";
import Link from "next/link";

interface QuoteMachineProps {
    initialQuote: Quote;
    allQuotes: Quote[];
    categories: string[];
}

export function QuoteMachine({ initialQuote, allQuotes, categories }: QuoteMachineProps) {
    const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);

    const handleRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * allQuotes.length);
        setCurrentQuote(allQuotes[randomIndex]);
    };

    const handleCopyQuote = () => {
        navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`);
    };

    const handleShareTwitter = () => {
        const text = encodeURIComponent(`"${currentQuote.text}" - ${currentQuote.author}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    };

    return (
        <div className="max-w-3xl mx-auto mb-12">
            <Card className="shadow-2xl border-primary/20">
                <CardContent className="p-8 md:p-12">
                    <Badge variant="secondary" className="mb-4">
                        {currentQuote.category}
                    </Badge>
                    <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-6 leading-relaxed">
                        &ldquo;{currentQuote.text}&rdquo;
                    </blockquote>
                    <p className="text-xl text-muted-foreground text-right">— {currentQuote.author}</p>

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
    );
}
