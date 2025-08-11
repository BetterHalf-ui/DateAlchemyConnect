// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-P2WKJ5GE9R', {
      page_path: url
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category?: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track application form clicks
export const trackApplicationClick = (language: 'en' | 'fr') => {
  trackEvent('application_click', 'engagement', `application_${language}`);
};

// Track blog navigation
export const trackBlogNavigation = (from: string) => {
  trackEvent('blog_navigation', 'navigation', from);
};

// Track language switching
export const trackLanguageSwitch = (from: string, to: string) => {
  trackEvent('language_switch', 'user_preference', `${from}_to_${to}`);
};

// Track referral clicks
export const trackReferralClick = () => {
  trackEvent('referral_click', 'engagement', 'nominate_someone');
};