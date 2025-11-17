import type { MetadataRoute } from "next";

export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Generates a sitemap entry
 */
export function createSitemapEntry(
  url: string,
  options?: Omit<SitemapEntry, "url">
): MetadataRoute.Sitemap[0] {
  return {
    url,
    lastModified: options?.lastModified || new Date(),
    changeFrequency: options?.changeFrequency || "weekly",
    priority: options?.priority || 0.5,
  };
}

/**
 * Generates a sitemap from an array of URLs
 */
export function generateSitemap(
  baseUrl: string,
  paths: string[],
  options?: Omit<SitemapEntry, "url">
): MetadataRoute.Sitemap {
  return paths.map((path) =>
    createSitemapEntry(`${baseUrl}${path}`, options)
  );
}

/**
 * Generates a sitemap for dynamic routes
 */
export function generateDynamicSitemap(
  baseUrl: string,
  items: Array<{ slug: string; updatedAt?: Date | string }>,
  pathPrefix: string = "",
  options?: Omit<SitemapEntry, "url" | "lastModified">
): MetadataRoute.Sitemap {
  return items.map((item) =>
    createSitemapEntry(`${baseUrl}${pathPrefix}/${item.slug}`, {
      ...options,
      lastModified: item.updatedAt || new Date(),
    })
  );
}

/**
 * Combines multiple sitemaps into one
 */
export function combineSitemaps(
  ...sitemaps: MetadataRoute.Sitemap[]
): MetadataRoute.Sitemap {
  return sitemaps.flat();
}
