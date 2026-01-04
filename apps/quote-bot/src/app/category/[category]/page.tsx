import { Container } from "@passive-income/ui";
import { quotes as staticQuotes } from "@/lib/quote-database";
import { getAllQuotes } from "@/lib/content-loader";
import { CategoryViewer } from "@/components/CategoryViewer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Generate static params for all known categories
export async function generateStaticParams() {
  const fileQuotes = await getAllQuotes();
  const allQuotes = [...staticQuotes, ...fileQuotes];
  const categories = Array.from(new Set(allQuotes.map((q) => q.category.toLowerCase())));

  return categories.map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categorySlug = params.category;
  const fileQuotes = await getAllQuotes();
  const allQuotes = [...staticQuotes, ...fileQuotes];

  const categoryQuotes = allQuotes.filter(
    (q) => q.category.toLowerCase() === categorySlug.toLowerCase()
  );

  if (categoryQuotes.length === 0) {
    return {};
  }

  const categoryName = categoryQuotes[0].category;
  const authors = Array.from(new Set(categoryQuotes.map(q => q.author))).slice(0, 5).join(", ");

  return {
    title: `${categoryName} Quotes - Inspiration & Wisdom`,
    description: `Explore ${categoryQuotes.length} inspiring ${categoryName.toLowerCase()} quotes from ${authors} and more. Daily motivation and wisdom to inspire your journey.`,
    keywords: [categoryName, "quotes", "inspiration", "wisdom", "motivation", authors],
    openGraph: {
      title: `${categoryName} Quotes`,
      description: `${categoryQuotes.length} inspiring ${categoryName.toLowerCase()} quotes`,
      url: `https://quotezzz.vercel.app/category/${categorySlug}`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${categoryName} Quotes`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category;

  const fileQuotes = await getAllQuotes();
  const allQuotes = [...staticQuotes, ...fileQuotes];

  // Robust matching for category (case insensitive)
  const categoryQuotes = allQuotes.filter(
    (q) => q.category.toLowerCase() === categorySlug.toLowerCase()
  );

  if (categoryQuotes.length === 0) {
    return notFound();
  }

  // Get the display name from the first quote
  const categoryName = categoryQuotes[0].category;

  const featuredQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

  return (
    <CategoryViewer
      categoryName={categoryName}
      initialQuotes={categoryQuotes}
      initialFeaturedQuote={featuredQuote}
    />
  );
}
