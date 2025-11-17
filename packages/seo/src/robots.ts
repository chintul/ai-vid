import type { MetadataRoute } from "next";

/**
 * Generates a robots.txt configuration
 */
export function generateRobots(
  siteUrl: string,
  options?: {
    disallow?: string[];
    allowAll?: boolean;
  }
): MetadataRoute.Robots {
  const disallow = options?.disallow || [];
  const allowAll = options?.allowAll !== false;

  return {
    rules: {
      userAgent: "*",
      allow: allowAll ? "/" : undefined,
      disallow: disallow.length > 0 ? disallow : undefined,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

/**
 * Generates a restrictive robots.txt (blocks all crawlers)
 */
export function generateRestrictiveRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

/**
 * Generates robots.txt for development environment
 */
export function generateDevelopmentRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

/**
 * Generates robots.txt with custom rules for different user agents
 */
export function generateCustomRobots(
  siteUrl: string,
  rules: Array<{
    userAgent: string;
    allow?: string | string[];
    disallow?: string | string[];
    crawlDelay?: number;
  }>
): MetadataRoute.Robots {
  return {
    rules: rules.map((rule) => ({
      userAgent: rule.userAgent,
      allow: rule.allow,
      disallow: rule.disallow,
      crawlDelay: rule.crawlDelay,
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
