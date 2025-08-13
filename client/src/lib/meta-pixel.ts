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
    console.log('🎯 Meta Pixel Event:', event, parameters || 'no parameters');
    if (parameters) {
      window.fbq('track', event, parameters);
    } else {
      window.fbq('track', event);
    }
  } else {
    console.log('⚠️ Meta Pixel not available:', event);
  }
};

// Predefined tracking functions for common events
export const trackApplicationSubmit = () => {
  trackMetaPixelEvent('Lead');
};

export const trackContactForm = () => {
  trackMetaPixelEvent('Contact');
};

export const trackFreeSignup = () => {
  trackMetaPixelEvent('CompleteRegistration');
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