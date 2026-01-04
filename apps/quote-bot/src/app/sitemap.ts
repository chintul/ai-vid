import { MetadataRoute } from "next";
import { getAllCategories } from "@/lib/quote-database";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quotezzz.vercel.app";
  const categories = getAllCategories();

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/daily`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/all`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...staticPages,
    ...categoryUrls,
  ];
}
