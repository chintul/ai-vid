import { MetadataRoute } from "next";
import { trends, getAllCategories } from "@/lib/trends-database";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://microtrends.watch";

  const trendUrls = trends.map((trend) => ({
    url: `${baseUrl}/trend/${trend.slug}`,
    lastModified: new Date(trend.lastUpdated),
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
      url: `${baseUrl}/trends`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...categoryUrls,
    ...trendUrls,
  ];
}
