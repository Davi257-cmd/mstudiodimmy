import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'M Studio Dimmy - Beleza e Estética Premium em Fortaleza',
  description = 'Realce sua beleza com Dimmy Marinho. Especialista em sobrancelhas, maquiagem e consultoria de imagem. Agende seu horário!',
  keywords = 'sobrancelhas, maquiagem, design de sobrancelhas, consultoria de imagem, beleza, estética, Fortaleza, Dimmy Marinho',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://mstudiodimmy.com.br',
  noindex = false,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const existingTag = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex,nofollow' : 'index,follow');
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', 'pt_BR', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Structured data for Local Business
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'M Studio Dimmy',
      description: description,
      url: ogUrl,
      telephone: '+55 85 99616-3468',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Oliveira Sobrinho',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        postalCode: '60330-140',
        addressCountry: 'BR'
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      priceRange: '$$',
      image: ogImage,
      areaServed: {
        '@type': 'City',
        name: 'Fortaleza'
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Optional: Remove dynamically added meta tags on unmount
      // This is usually not necessary as the component will update on route change
    };
  }, [title, description, keywords, ogImage, ogUrl, noindex]);

  return null;
};

export default SEO;