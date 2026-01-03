import { Container } from "@passive-income/ui";
import { quotes as staticQuotes } from "@/lib/quote-database";
import { getAllQuotes } from "@/lib/content-loader";
import { CategoryViewer } from "@/components/CategoryViewer";
import Link from "next/link";
import { notFound } from "next/navigation";

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
