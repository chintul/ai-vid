import { getAllTrends } from "./trends-loader";

export interface Trend {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  growthRate: "rising" | "stable" | "emerging";
  searchVolume: "low" | "medium" | "high";
  tags: string[];
  relatedTopics: string[];
  lastUpdated: string;
  metrics?: {
    momentum: string;
    competition: string;
    opportunity: string;
  };
  keywords?: string[];
  sources?: string[];
  region?: string;
  trendScore?: number;
  dateIdentified?: string;
}

// Hydrate trends from filesystem
// This is executed once when the module is loaded on the server
export const trends: Trend[] = getAllTrends();

export function getTrendBySlug(slug: string): Trend | undefined {
  return trends.find((t) => t.slug === slug);
}

export function getTrendsByCategory(category: string): Trend[] {
  return trends.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(trends.map((t) => t.category)));
}

export function getTrendsByGrowthRate(growthRate: Trend["growthRate"]): Trend[] {
  return trends.filter((t) => t.growthRate === growthRate);
}

export function searchTrends(query: string): Trend[] {
  const lowercaseQuery = query.toLowerCase();
  return trends.filter(
    (t) =>
      t.title.toLowerCase().includes(lowercaseQuery) ||
      t.description.toLowerCase().includes(lowercaseQuery) ||
      t.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
