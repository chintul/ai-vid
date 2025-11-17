import { trackPageView } from "./google-analytics";

/**
 * Tracks page views automatically on route changes
 */
export class PageViewTracker {
  private enabled: boolean = true;

  constructor(enabled: boolean = true) {
    this.enabled = enabled;
  }

  /**
   * Tracks the current page view
   */
  track(url?: string, title?: string): void {
    if (!this.enabled || typeof window === "undefined") return;

    const currentUrl = url || window.location.pathname + window.location.search;
    const pageTitle = title || document.title;

    trackPageView(currentUrl, pageTitle);
  }

  /**
   * Enables page view tracking
   */
  enable(): void {
    this.enabled = true;
  }

  /**
   * Disables page view tracking
   */
  disable(): void {
    this.enabled = false;
  }
}

/**
 * Creates a singleton page view tracker instance
 */
let trackerInstance: PageViewTracker | null = null;

export function getPageViewTracker(): PageViewTracker {
  if (!trackerInstance) {
    trackerInstance = new PageViewTracker();
  }
  return trackerInstance;
}
