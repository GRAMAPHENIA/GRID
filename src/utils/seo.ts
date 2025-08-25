// Utilidades SEO para Red Fang Luthier
import type { SEOData, StructuredData, OpenGraphData, TwitterCardData } from '../types';
import { SITE_CONFIG, DEFAULT_KEYWORDS } from './constants';

/**
 * Genera datos SEO completos para una página
 */
export function generateSEO(data: Partial<SEOData> = {}): SEOData {
  const baseTitle = data.title || SITE_CONFIG.name;
  const fullTitle = data.title && data.title !== SITE_CONFIG.name 
    ? `${data.title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.name;

  return {
    title: fullTitle,
    description: data.description || SITE_CONFIG.description,
    keywords: data.keywords || [...DEFAULT_KEYWORDS],
    ogImage: data.ogImage || '/images/og-default.jpg',
    canonical: data.canonical,
    structuredData: data.structuredData,
    openGraph: generateOpenGraph(data.openGraph, { title: baseTitle, description: data.description }),
    twitter: generateTwitterCard(data.twitter, { title: baseTitle, description: data.description }),
    robots: data.robots || 'index, follow',
    author: data.author || SITE_CONFIG.author.name,
    language: data.language || SITE_CONFIG.locale,
    charset: data.charset || 'UTF-8',
    viewport: data.viewport || 'width=device-width, initial-scale=1.0',
    themeColor: data.themeColor || '#d2691e'
  };
}

/**
 * Genera datos Open Graph optimizados
 */
export function generateOpenGraph(
  og: Partial<OpenGraphData> = {}, 
  defaults: { title?: string; description?: string } = {}
): OpenGraphData {
  return {
    title: og.title || defaults.title || SITE_CONFIG.name,
    description: og.description || defaults.description || SITE_CONFIG.description,
    image: og.image || '/images/og-default.jpg',
    url: og.url || SITE_CONFIG.url,
    type: og.type || 'website',
    siteName: og.siteName || SITE_CONFIG.name,
    locale: og.locale || 'es_ES'
  };
}

/**
 * Genera datos Twitter Card optimizados
 */
export function generateTwitterCard(
  twitter: Partial<TwitterCardData> = {},
  defaults: { title?: string; description?: string } = {}
): TwitterCardData {
  return {
    card: twitter.card || 'summary_large_image',
    site: twitter.site || '@redfangluthier',
    creator: twitter.creator || '@redfangluthier',
    title: twitter.title || defaults.title || SITE_CONFIG.name,
    description: twitter.description || defaults.description || SITE_CONFIG.description,
    image: twitter.image || '/images/og-default.jpg'
  };
}

/**
 * Genera structured data para el luthier/artesano
 */
export function generateLuthierStructuredData(overrides: Partial<StructuredData> = {}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': SITE_CONFIG.name,
    'jobTitle': 'Luthier',
    'description': SITE_CONFIG.description,
    'url': SITE_CONFIG.url,
    'email': SITE_CONFIG.contact.email,
    'telephone': SITE_CONFIG.contact.phone,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Madrid',
      'addressCountry': 'ES',
      'streetAddress': SITE_CONFIG.contact.address
    },
    'sameAs': [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube
    ],
    'knowsAbout': [
      'Construcción de guitarras',
      'Reparación de instrumentos',
      'Restauración de instrumentos antiguos',
      'Luthería tradicional',
      'Instrumentos de cuerda'
    ],
    'makesOffer': {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Product',
        'name': 'Instrumentos musicales artesanales',
        'category': 'Instrumentos musicales',
        'description': 'Guitarras y otros instrumentos de cuerda construidos artesanalmente'
      }
    },
    'openingHours': 'Mo-Fr 09:00-18:00',
    ...overrides
  };
}

/**
 * Genera structured data para un instrumento específico
 */
export function generateInstrumentStructuredData(instrument: {
  name: string;
  description: string;
  price?: number;
  currency?: string;
  images: string[];
  specifications: Record<string, any>;
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': instrument.name,
    'description': instrument.description,
    'image': instrument.images,
    'brand': {
      '@type': 'Brand',
      'name': SITE_CONFIG.name
    },
    'manufacturer': {
      '@type': 'Person',
      'name': SITE_CONFIG.name,
      'jobTitle': 'Luthier'
    },
    'category': 'Instrumentos Musicales',
    'additionalProperty': Object.entries(instrument.specifications).map(([key, value]) => ({
      '@type': 'PropertyValue',
      'name': key,
      'value': value
    })),
    ...(instrument.price && {
      'offers': {
        '@type': 'Offer',
        'price': instrument.price,
        'priceCurrency': instrument.currency || 'EUR',
        'availability': 'https://schema.org/InStock',
        'seller': {
          '@type': 'Person',
          'name': SITE_CONFIG.name
        }
      }
    })
  };
}

/**
 * Genera structured data para un servicio
 */
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  category: string;
  priceRange?: { min: number; max: number; currency?: string };
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'category': service.category,
    'provider': {
      '@type': 'Person',
      'name': SITE_CONFIG.name,
      'jobTitle': 'Luthier'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'España'
    },
    ...(service.priceRange && {
      'offers': {
        '@type': 'Offer',
        'priceRange': `${service.priceRange.min}-${service.priceRange.max} ${service.priceRange.currency || 'EUR'}`,
        'priceCurrency': service.priceRange.currency || 'EUR'
      }
    })
  };
}