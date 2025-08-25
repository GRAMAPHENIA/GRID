// Utilidades para generar meta tags específicos
import type { SEOData } from '../types';
import { SITE_CONFIG } from './constants';

/**
 * Genera meta tags para páginas de instrumentos
 */
export function generateInstrumentMetaTags(instrument: {
  name: string;
  description: string;
  type: string;
  images: string[];
  price?: number;
  currency?: string;
}): Partial<SEOData> {
  const title = `${instrument.name} - Instrumento Artesanal`;
  const description = `${instrument.description} Construido artesanalmente por Red Fang Luthier con técnicas tradicionales y materiales de alta calidad.`;
  
  const keywords = [
    instrument.type,
    'artesanal',
    'luthier',
    'instrumento musical',
    'construcción tradicional',
    'calidad premium',
    instrument.name.toLowerCase()
  ];

  return {
    title,
    description,
    keywords,
    ogImage: instrument.images[0] || '/images/og-default.jpg',
    openGraph: {
      title,
      description,
      type: 'product',
      image: instrument.images[0] || '/images/og-default.jpg'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: instrument.images[0] || '/images/og-default.jpg'
    }
  };
}

/**
 * Genera meta tags para páginas de servicios
 */
export function generateServiceMetaTags(service: {
  name: string;
  description: string;
  category: string;
}): Partial<SEOData> {
  const title = `${service.name} - Servicios de Luthería`;
  const description = `${service.description} Servicio profesional de luthería en Madrid. Calidad garantizada y años de experiencia.`;
  
  const keywords = [
    service.category,
    'servicio de luthería',
    'reparación de instrumentos',
    'luthier profesional',
    'Madrid',
    service.name.toLowerCase()
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website'
    }
  };
}

/**
 * Genera meta tags para la página de inicio
 */
export function generateHomeMetaTags(): Partial<SEOData> {
  return {
    title: SITE_CONFIG.name,
    description: `${SITE_CONFIG.description}. Especializado en construcción, reparación y restauración de guitarras y otros instrumentos de cuerda. Taller en Madrid con más de una década de experiencia.`,
    keywords: [
      'luthier Madrid',
      'guitarras artesanales',
      'construcción de guitarras',
      'reparación de instrumentos',
      'restauración de guitarras',
      'instrumentos de cuerda',
      'luthería tradicional',
      'taller de guitarras Madrid'
    ],
    openGraph: {
      title: `${SITE_CONFIG.name} - Luthier Artesanal en Madrid`,
      description: 'Instrumentos musicales únicos creados con pasión y técnica tradicional. Más de una década construyendo sueños musicales.',
      type: 'website',
      image: '/images/hero-og.jpg'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_CONFIG.name} - Maestro Luthier`,
      description: 'Descubre instrumentos únicos creados con técnicas tradicionales y materiales excepcionales.',
      image: '/images/hero-twitter.jpg'
    }
  };
}

/**
 * Genera meta tags para la página de trabajos/portfolio
 */
export function generateWorksMetaTags(): Partial<SEOData> {
  return {
    title: 'Trabajos y Portfolio',
    description: 'Explora nuestra colección de instrumentos artesanales. Guitarras clásicas, flamencas, mandolinas y más, cada una única y construida con técnicas tradicionales.',
    keywords: [
      'portfolio luthier',
      'guitarras artesanales',
      'instrumentos únicos',
      'galería de trabajos',
      'guitarras clásicas',
      'guitarras flamencas',
      'mandolinas artesanales'
    ],
    openGraph: {
      title: 'Portfolio - Red Fang Luthier',
      description: 'Descubre instrumentos únicos, cada uno con su propia personalidad y sonido excepcional.',
      type: 'website',
      image: '/images/portfolio-og.jpg'
    }
  };
}

/**
 * Genera meta tags para la página de servicios
 */
export function generateServicesMetaTags(): Partial<SEOData> {
  return {
    title: 'Servicios de Luthería',
    description: 'Servicios profesionales de construcción, reparación y restauración de instrumentos musicales. Diagnóstico gratuito y garantía de calidad en todos nuestros trabajos.',
    keywords: [
      'servicios de luthería',
      'reparación de guitarras',
      'construcción de instrumentos',
      'restauración de guitarras antiguas',
      'ajuste de instrumentos',
      'mantenimiento de guitarras',
      'luthier profesional Madrid'
    ],
    openGraph: {
      title: 'Servicios Profesionales de Luthería',
      description: 'Desde construcción personalizada hasta restauración de instrumentos antiguos. Calidad y experiencia garantizada.',
      type: 'website'
    }
  };
}

/**
 * Genera meta tags para la página de contacto
 */
export function generateContactMetaTags(): Partial<SEOData> {
  return {
    title: 'Contacto',
    description: `Ponte en contacto con Red Fang Luthier. ${SITE_CONFIG.contact.address}. Teléfono: ${SITE_CONFIG.contact.phone}. Email: ${SITE_CONFIG.contact.email}`,
    keywords: [
      'contacto luthier Madrid',
      'taller de guitarras Madrid',
      'presupuesto luthería',
      'consulta luthier',
      'ubicación taller'
    ],
    openGraph: {
      title: 'Contacto - Red Fang Luthier',
      description: 'Visita nuestro taller en Madrid o contacta para consultas y presupuestos. Estamos aquí para ayudarte con tu instrumento.',
      type: 'website'
    }
  };
}