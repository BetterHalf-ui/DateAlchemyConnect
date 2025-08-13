// Meta Pixel tracking utilities
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackMetaPixelEvent = (
  event: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('track', event, parameters);
    } else {
      window.fbq('track', event);
    }
  }
};

// Predefined tracking functions for common events
export const trackApplicationSubmit = () => {
  trackMetaPixelEvent('Lead');
};

export const trackContactForm = () => {
  trackMetaPixelEvent('Contact');
};

export const trackBlogRead = (postTitle?: string) => {
  trackMetaPixelEvent('ViewContent', {
    content_type: 'article',
    content_name: postTitle
  });
};

export const trackPageView = (pageName?: string) => {
  trackMetaPixelEvent('PageView', pageName ? { content_name: pageName } : undefined);
};