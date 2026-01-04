import type { Metadata } from "next";

export interface SEOImageConfig {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string | SEOImageConfig;
  url?: string;
  siteName?: string;
  locale?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generates Next.js metadata object with comprehensive SEO tags
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image,
    url,
    siteName,
    locale = "en_US",
    type = "website",
    author,
    publishedTime,
    modifiedTime,
  } = config;

  // Handle image parameter - can be string or object with dimensions
  const imageUrl = typeof image === "string" ? image : image?.url;
  const imageData = typeof image === "string"
    ? { url: image, alt: title }
    : image
      ? { url: image.url, width: image.width, height: image.height, alt: image.alt || title }
      : undefined;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(", "),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type,
      images: imageData ? [imageData] : undefined,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
      creator: author ? `@${author.replace(/\s/g, "")}` : undefined,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metadata;
}

/**
 * Generates article metadata
 */
export function generateArticleMetadata(
  config: Omit<SEOConfig, "type"> & { publishedTime: string }
): Metadata {
  return generateMetadata({
    ...config,
    type: "article",
  });
}

/**
 * Generates default site metadata
 */
export function generateSiteMetadata(config: {
  siteName: string;
  siteUrl: string;
  description: string;
  defaultImage?: string;
}): Metadata {
  return generateMetadata({
    title: config.siteName,
    description: config.description,
    url: config.siteUrl,
    siteName: config.siteName,
    image: config.defaultImage,
  });
}

/**
 * Merges metadata with default site metadata
 */
export function mergeMetadata(
  defaultMetadata: Metadata,
  pageMetadata: Partial<SEOConfig>
): Metadata {
  return {
    ...defaultMetadata,
    ...generateMetadata({
      title: pageMetadata.title || (defaultMetadata.title as string),
      description: pageMetadata.description || (defaultMetadata.description as string),
      keywords: pageMetadata.keywords,
      image: pageMetadata.image,
      url: pageMetadata.url,
    }),
  };
}
