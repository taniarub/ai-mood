import { useEffect } from "react";

interface JsonLdProps {
  type?: 'website' | 'organization' | 'service';
}

const JsonLd = ({ type = 'organization' }: JsonLdProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dream AI",
      "description": "Создаю фото, видео и сайты с помощью нейросетей. Быстро, реалистично и красиво. Для брендов, маркетплейсов и бизнеса.",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/favicon.ico",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Russian"]
      },
      "sameAs": [
        "https://t.me/laura_palmers_theme"
      ],
      "areaServed": "RU",
      "serviceType": [
        "AI Photography",
        "AI Video Content", 
        "Web Design",
        "E-commerce Solutions",
        "Product Photography",
        "Fashion Photography"
      ]
    };

    if (type === 'website') {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Dream AI",
        "description": "ИИ-контент для брендов и маркетплейсов",
        "url": "https://yourdomain.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yourdomain.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }

    if (type === 'service') {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Creative Services",
        "provider": {
          "@type": "Organization",
          "name": "Dream AI"
        },
        "areaServed": "RU",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Content Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Photography",
                "description": "Профессиональная съемка с использованием ИИ-технологий"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Product Photography",
                "description": "Предметная съемка для каталогов и маркетплейсов"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Video Content",
                "description": "Создание видеоконтента с помощью ИИ"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design",
                "description": "Разработка сайтов и веб-приложений"
              }
            }
          ]
        }
      };
    }

    return baseData;
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(getStructuredData());
    script.id = `jsonld-${type}`;
    
    // Remove existing script with same id if exists
    const existingScript = document.getElementById(`jsonld-${type}`);
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`jsonld-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
};

export default JsonLd;