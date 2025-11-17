import { MetadataRoute } from "next";
import { glossaryTerms, getAllCategories } from "@/lib/glossary-database";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nicheglossary.com";

  const termUrls = glossaryTerms.map((term) => ({
    url: `${baseUrl}/term/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categories = getAllCategories();
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryUrls,
    ...termUrls,
  ];
}
