declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Google Analytics measurement ID type
 */
export type GAMeasurementId = `G-${string}` | `UA-${string}`;

/**
 * Initializes Google Analytics
 */
export function initGA(measurementId: GAMeasurementId): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
}

/**
 * Tracks a page view in Google Analytics
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_title: title || document.title,
  });
}

/**
 * Tracks a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, parameters);
}

/**
 * Google Analytics script tags for Next.js
 */
export function getGAScripts(measurementId: GAMeasurementId): {
  src: string;
  strategy: "afterInteractive" | "lazyOnload";
  async?: boolean;
  content?: string;
} {
  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    strategy: "afterInteractive",
    async: true,
  };
}

/**
 * Google Analytics initialization script
 */
export function getGAInitScript(measurementId: GAMeasurementId): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_path: window.location.pathname,
    });
  `;
}
