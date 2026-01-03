import { getAllProblems } from "./problems-loader";

export interface Problem {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  steps: string[];
  tips?: string[];
  relatedProblems?: string[];
}

// Hydrate problems from filesystem
export const problemDatabase: Problem[] = getAllProblems();

export function getProblemBySlug(slug: string): Problem | undefined {
  return problemDatabase.find((p) => p.slug === slug);
}

export function searchProblems(query: string): Problem[] {
  const lowercaseQuery = query.toLowerCase();
  return problemDatabase.filter(
    (p) =>
      p.title.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.keywords.some((k) => k.toLowerCase().includes(lowercaseQuery))
  );
}

export function getProblemsByCategory(category: string): Problem[] {
  return problemDatabase.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(problemDatabase.map((p) => p.category)));
}
