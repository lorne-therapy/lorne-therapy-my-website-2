type AnalyticsValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 event. Never pass names, emails, phone numbers, or anything a
 * visitor typed: event parameters must stay generic (page, section, CTA location).
 */
export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;

  const payload: Record<string, AnalyticsValue> = {
    page_path: window.location.pathname,
  };
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) payload[key] = value;
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}

/** Site-wide engagement tracking: scroll depth on every page (no personal data). */
export function initSiteAnalytics(pageKey: string) {
  if (typeof window === 'undefined') return;
  const seen = new Set<number>();
  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.round((window.scrollY / scrollable) * 100);
    [25, 50, 75, 90].forEach((t) => {
      if (percent >= t && !seen.has(t)) {
        seen.add(t);
        trackEvent('scroll_depth', { page_key: pageKey, percent_scrolled: t });
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
