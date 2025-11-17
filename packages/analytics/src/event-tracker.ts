import { trackEvent } from "./google-analytics";

/**
 * Common event categories
 */
export enum EventCategory {
  USER_INTERACTION = "user_interaction",
  NAVIGATION = "navigation",
  SEARCH = "search",
  SHARE = "share",
  DOWNLOAD = "download",
  FORM = "form",
  ERROR = "error",
}

/**
 * Event parameters interface
 */
export interface EventParams {
  category?: EventCategory | string;
  label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Tracks button clicks
 */
export function trackButtonClick(
  buttonName: string,
  additionalParams?: EventParams
): void {
  trackEvent("button_click", {
    button_name: buttonName,
    category: EventCategory.USER_INTERACTION,
    ...additionalParams,
  });
}

/**
 * Tracks link clicks
 */
export function trackLinkClick(
  linkUrl: string,
  linkText?: string,
  additionalParams?: EventParams
): void {
  trackEvent("link_click", {
    link_url: linkUrl,
    link_text: linkText,
    category: EventCategory.NAVIGATION,
    ...additionalParams,
  });
}

/**
 * Tracks search queries
 */
export function trackSearch(
  searchTerm: string,
  resultCount?: number,
  additionalParams?: EventParams
): void {
  trackEvent("search", {
    search_term: searchTerm,
    result_count: resultCount,
    category: EventCategory.SEARCH,
    ...additionalParams,
  });
}

/**
 * Tracks social shares
 */
export function trackShare(
  platform: string,
  contentType?: string,
  contentId?: string,
  additionalParams?: EventParams
): void {
  trackEvent("share", {
    platform,
    content_type: contentType,
    content_id: contentId,
    category: EventCategory.SHARE,
    ...additionalParams,
  });
}

/**
 * Tracks form submissions
 */
export function trackFormSubmit(
  formName: string,
  success: boolean = true,
  additionalParams?: EventParams
): void {
  trackEvent("form_submit", {
    form_name: formName,
    success,
    category: EventCategory.FORM,
    ...additionalParams,
  });
}

/**
 * Tracks errors
 */
export function trackError(
  errorMessage: string,
  errorType?: string,
  additionalParams?: EventParams
): void {
  trackEvent("error", {
    error_message: errorMessage,
    error_type: errorType,
    category: EventCategory.ERROR,
    ...additionalParams,
  });
}

/**
 * Tracks downloads
 */
export function trackDownload(
  fileName: string,
  fileType?: string,
  additionalParams?: EventParams
): void {
  trackEvent("download", {
    file_name: fileName,
    file_type: fileType,
    category: EventCategory.DOWNLOAD,
    ...additionalParams,
  });
}

/**
 * Tracks custom conversion events
 */
export function trackConversion(
  conversionName: string,
  value?: number,
  additionalParams?: EventParams
): void {
  trackEvent("conversion", {
    conversion_name: conversionName,
    value,
    ...additionalParams,
  });
}
