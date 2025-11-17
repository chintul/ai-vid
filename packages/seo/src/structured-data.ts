/**
 * Base schema.org structured data types
 */
export interface StructuredData {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: any;
}

/**
 * Article schema
 */
export interface ArticleSchema extends StructuredData {
  "@type": "Article";
  headline: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
  datePublished: string;
  dateModified?: string;
  image?: string;
}

/**
 * Website schema
 */
export interface WebsiteSchema extends StructuredData {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

/**
 * Organization schema
 */
export interface OrganizationSchema extends StructuredData {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

/**
 * Breadcrumb schema
 */
export interface BreadcrumbSchema extends StructuredData {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * FAQ schema
 */
export interface FAQSchema extends StructuredData {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

/**
 * Generates Article structured data
 */
export function generateArticleSchema(config: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url?: string;
}): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.title,
    description: config.description,
    author: {
      "@type": "Person",
      name: config.author,
    },
    datePublished: config.publishedDate,
    dateModified: config.modifiedDate || config.publishedDate,
    image: config.image,
    url: config.url,
  };
}

/**
 * Generates Website structured data
 */
export function generateWebsiteSchema(config: {
  name: string;
  url: string;
  description?: string;
  searchUrl?: string;
}): WebsiteSchema {
  const schema: WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.name,
    url: config.url,
    description: config.description,
  };

  if (config.searchUrl) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: `${config.searchUrl}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    };
  }

  return schema;
}

/**
 * Generates Organization structured data
 */
export function generateOrganizationSchema(config: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  socialLinks?: string[];
}): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    url: config.url,
    logo: config.logo,
    description: config.description,
    sameAs: config.socialLinks,
  };
}

/**
 * Generates Breadcrumb structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates FAQ structured data
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Renders structured data as a script tag (for use in components)
 */
export function renderStructuredData(data: StructuredData): string {
  return JSON.stringify(data);
}
