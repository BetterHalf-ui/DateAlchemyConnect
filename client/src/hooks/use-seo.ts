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
    const siteUrl = 'https://thedatealchemy.com';
    
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
    
    // Comprehensive structured data for LocalBusiness + Service
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://thedatealchemy.com/#organization",
      "name": "The Date Alchemy",
      "alternateName": ["Date Alchemy", "The Date Alchemy Mauritius", "TDA Matchmaking"],
      "description": "Premium matchmaking service for global professionals in Mauritius. Ultra-curated introductions with vetted singles, compatibility assessments, and personalized date planning.",
      "url": "https://thedatealchemy.com",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/da-logo.png`,
        "width": 512,
        "height": 512
      },
      "image": `${siteUrl}/social-share-v2.jpg`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Port Louis",
        "addressRegion": "Port Louis District",
        "addressCountry": "MU",
        "postalCode": ""
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -20.1609,
        "longitude": 57.5012
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Mauritius"
        },
        {
          "@type": "City",
          "name": "Port Louis"
        },
        {
          "@type": "City", 
          "name": "Grand Baie"
        },
        {
          "@type": "City",
          "name": "Flic en Flac"
        }
      ],
      "serviceType": [
        "Matchmaking Service",
        "Dating Service",
        "Professional Matchmaking",
        "Relationship Coaching",
        "Singles Events"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Matchmaking Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Matchmaking Membership",
              "description": "1-year matchmaking membership with curated introductions, compatibility assessment, and personalized support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Singles Socials Events",
              "description": "Exclusive singles events and intimate brunches for networking and meeting potential matches"
            }
          }
        ]
      },
      "priceRange": "Rs 8,000",
      "currenciesAccepted": "MUR",
      "paymentAccepted": ["Cash", "Bank Transfer"],
      "email": "hello@thedatealchemy.com",
      "sameAs": [
        "https://www.instagram.com/thedatealchemy",
        "https://www.facebook.com/thedatealchemy"
      ],
      "foundingDate": "2022",
      "founder": {
        "@type": "Person",
        "name": "The Date Alchemy Founders"
      },
      "slogan": "Ultra-Curated Matchmaking for Busy Singles",
      "knowsAbout": [
        "Matchmaking",
        "Dating in Mauritius",
        "Professional Singles",
        "Relationship Coaching",
        "Compatibility Assessment",
        "Attachment Theory",
        "Singles Events Mauritius"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Organization schema for brand recognition
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://thedatealchemy.com/#org",
      "name": "The Date Alchemy",
      "url": "https://thedatealchemy.com",
      "logo": `${siteUrl}/da-logo.png`,
      "description": "Mauritius' premium matchmaking service for sophisticated professionals seeking meaningful relationships",
      "areaServed": "Mauritius",
      "sameAs": [
        "https://www.instagram.com/thedatealchemy",
        "https://www.facebook.com/thedatealchemy"
      ]
    };

    // WebSite schema for sitelinks search
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://thedatealchemy.com/#website",
      "url": "https://thedatealchemy.com",
      "name": "The Date Alchemy",
      "description": "Premium matchmaking service in Mauritius for global professionals",
      "publisher": {
        "@id": "https://thedatealchemy.com/#organization"
      },
      "inLanguage": ["en", "fr"]
    };

    // Combine all schemas
    const allSchemas = [localBusinessSchema, organizationSchema, websiteSchema];
    
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Add new structured data
    allSchemas.forEach(schema => {
      const structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(schema);
      document.head.appendChild(structuredDataScript);
    });
    
  }, [title, description, keywords, ogImage, canonical, language]);
}