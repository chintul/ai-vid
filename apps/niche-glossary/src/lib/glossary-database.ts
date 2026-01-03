import { getAllTerms } from "./terms-loader";

export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  category: string;
  definition: string;
  useCases: string[];
  relatedTerms: string[];
  examples?: string[];
}

export const glossaryTerms: GlossaryTerm[] = getAllTerms();

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(glossaryTerms.map((t) => t.category)));
}

export function searchTerms(query: string): GlossaryTerm[] {
  const lowercaseQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(lowercaseQuery) ||
      t.definition.toLowerCase().includes(lowercaseQuery) ||
      t.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getRandomTerm(): GlossaryTerm {
  return glossaryTerms[Math.floor(Math.random() * glossaryTerms.length)];
}
