import { MetadataRoute } from "next";
import { getAllCategories } from "@/lib/quote-database";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quotebot.world";
  const categories = getAllCategories();

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

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
    ...categoryUrls,
  ];
}
