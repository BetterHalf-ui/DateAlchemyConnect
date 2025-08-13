import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function useSEO({
  title,
  description,
  keywords,
  ogImage,
  canonical
}: SEOProps = {}) {
  const { language } = useI18n();
  
  useEffect(() => {
    const siteUrl = 'https://thedatealchemy.netlify.app';
    
    // Set document title
    if (title) {
      document.title = title;
    }
    
    // Helper function to create or update meta tag
    const updateMetaTag = (selector: string, attributes: { [key: string]: string }) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        document.head.appendChild(meta);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
    };
    
    // Helper function to create or update link tag
    const updateLinkTag = (selector: string, attributes: { [key: string]: string }) => {
      let link = document.querySelector(selector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        document.head.appendChild(link);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
    };
    
    // Basic meta tags
    updateMetaTag('meta[name="description"]', {
      name: 'description',
      content: description || 'Premium matchmaking service for global professionals in Mauritius'
    });
    
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', {
        name: 'keywords',
        content: keywords
      });
    }
    
    // Viewport and mobile optimization
    updateMetaTag('meta[name="viewport"]', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    });
    
    // Language and locale
    document.documentElement.lang = language;
    updateMetaTag('meta[name="language"]', {
      name: 'language',
      content: language
    });
    
    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: title || 'The Date Alchemy - Premium Matchmaking'
    });
    
    updateMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: description || 'Premium matchmaking service for global professionals in Mauritius'
    });
    
    updateMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website'
    });
    
    updateMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical || siteUrl
    });
    
    updateMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'The Date Alchemy'
    });
    
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', {
        property: 'og:image',
        content: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
      });
      
      updateMetaTag('meta[property="og:image:alt"]', {
        property: 'og:image:alt',
        content: 'The Date Alchemy - Premium Matchmaking Service'
      });
    }
    
    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    
    updateMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title || 'The Date Alchemy - Premium Matchmaking'
    });
    
    updateMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description || 'Premium matchmaking service for global professionals in Mauritius'
    });
    
    // Canonical URL
    if (canonical) {
      updateLinkTag('link[rel="canonical"]', {
        rel: 'canonical',
        href: canonical
      });
    }
    
    // Alternate language links
    const baseUrl = canonical?.split('?')[0] || siteUrl;
    updateLinkTag('link[rel="alternate"][hreflang="en"]', {
      rel: 'alternate',
      hreflang: 'en',
      href: baseUrl
    });
    
    updateLinkTag('link[rel="alternate"][hreflang="fr"]', {
      rel: 'alternate',
      hreflang: 'fr',
      href: `${baseUrl}?lang=fr`
    });
    
    updateLinkTag('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: baseUrl
    });
    
    // Favicon and app icons
    updateLinkTag('link[rel="icon"]', {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    });
    
    // Structured data for business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "The Date Alchemy",
      "description": description || "Premium matchmaking service for global professionals in Mauritius",
      "url": canonical || siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MU",
        "addressRegion": "Mauritius"
      },
      "serviceType": "Matchmaking Service",
      "areaServed": "Mauritius",
      "priceRange": "$$$$",
      "telephone": "+230-XXX-XXXX",
      "email": "hello@thedatealchemy.com"
    };
    
    // Remove existing structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }
    
    // Add new structured data
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
  }, [title, description, keywords, ogImage, canonical, language]);
}