import { MetadataRoute } from "next";
import { problemDatabase } from "@/lib/problem-database";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://problemhelper.ai";

  const problemUrls = problemDatabase.map((problem) => ({
    url: `${baseUrl}/problem/${problem.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
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
      url: `${baseUrl}/problems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...problemUrls,
  ];
}
