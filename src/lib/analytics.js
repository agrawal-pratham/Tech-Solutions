/**
 * Analytics Utility for Tech Solutions
 * Integrates:
 * 1. Google Analytics 4 (GA4) - G-NLPQCWCG1G
 * 2. Microsoft Clarity - nfjtkrqli4
 * 3. Vercel Analytics & Speed Insights
 */

export const GA_TRACKING_ID = "G-NLPQCWCG1G";
export const CLARITY_PROJECT_ID = "nfjtkrqli4";

// Log page views on client-side route changes
export const trackPageView = (url) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4 pageview
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // Microsoft Clarity page navigation tag
    if (typeof window.clarity === "function") {
      window.clarity("set", "page", url);
    }
  }
};

// Log specific custom events (conversions, interactions, form submissions)
export const trackEvent = ({ action, category = "general", label = "", value = 0, params = {} }) => {
  if (typeof window !== "undefined") {
    // GA4 Custom Event
    if (typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        ...params,
      });
    }

    // Microsoft Clarity Custom Event
    if (typeof window.clarity === "function") {
      window.clarity("event", action);
      if (label) {
        window.clarity("set", action, String(label));
      }
    }
  }
};

// Set custom user or session attributes in Clarity
export const setClarityTag = (key, value) => {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("set", key, String(value));
  }
};
