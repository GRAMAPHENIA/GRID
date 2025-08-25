// Ejemplos de uso de los tipos del sistema
// Este archivo sirve como documentación y referencia

import type {
  Instrument,
  Service,
  ContactFormData,
  SEOData,
  SiteConfig
} from './index';

// Ejemplo de instrumento completo
export const exampleInstrument: Instrument = {
  id: 'guitar-001',
  name: 'Guitarra Clásica Artesanal',
  type: 'guitar',
  description: 'Guitarra clásica construida con maderas seleccionadas y técnicas tradicionales.',
  shortDescription: 'Guitarra clásica de concierto con tapa de cedro y aros de palisandro.',
  images: [
    '/images/instruments/guitar-001-front.jpg',
    '/images/instruments/guitar-001-back.jpg',
    '/images/instruments/guitar-001-side.jpg'
  ],
  specifications: {
    wood: 'Tapa: Cedro canadiense, Aros y fondo: Palisandro de India',
    finish: 'Laca francesa tradicional',
    scale: '650mm',
    year: 2024,
    strings: 6,
    frets: 19,
    nut: 'Hueso natural',
    bridge: 'Palisandro de India',
    tuners: 'Schaller Grand Tune',
    dimensions: {
      length: '100cm',
      width: '37cm',
      depth: '10cm'
    }
  },
  status: 'available',
  featured: true,
  slug: 'guitarra-clasica-artesanal-001',
  price: 2500,
  currency: 'EUR',
  tags: ['clásica', 'concierto', 'cedro', 'palisandro'],
  category: 'Guitarras Clásicas'
};

// Ejemplo de servicio completo
export const exampleService: Service = {
  id: 'service-repair',
  name: 'Reparación de Instrumentos',
  description: 'Servicio completo de reparación para todo tipo de instrumentos de cuerda.',
  shortDescription: 'Reparaciones profesionales con garantía de calidad.',
  category: 'repair',
  duration: '1-2 semanas',
  priceRange: {
    min: 50,
    max: 500,
    currency: 'EUR'
  },
  icon: 'repair-icon',
  features: [
    'Diagnóstico completo gratuito',
    'Reparación de grietas y roturas',
    'Ajuste de acción y entonación',
    'Cambio de trastes',
    'Reparación de clavijero'
  ],
  process: [
    'Evaluación inicial del instrumento',
    'Presupuesto detallado',
    'Reparación con materiales de calidad',
    'Pruebas y ajustes finales',
    'Entrega con garantía'
  ],
  estimatedTime: {
    min: 7,
    max: 14,
    unit: 'days'
  },
  featured: true,
  available: true,
  tags: ['reparación', 'mantenimiento', 'ajuste']
};

// Ejemplo de datos de formulario de contacto
export const exampleContactForm: ContactFormData = {
  name: 'Juan Pérez',
  email: 'juan.perez@email.com',
  phone: '+34 600 123 456',
  subject: 'quote_request',
  message: 'Estoy interesado en una guitarra clásica personalizada. ¿Podrían enviarme información sobre precios y tiempos de entrega?',
  serviceType: 'construction',
  instrumentType: 'guitar'
};

// Ejemplo de configuración SEO
export const exampleSEOData: SEOData = {
  title: 'Red Fang Luthier - Instrumentos Musicales Artesanales',
  description: 'Luthier profesional especializado en construcción, reparación y restauración de guitarras y otros instrumentos de cuerda. Artesanía tradicional con técnicas modernas.',
  keywords: ['luthier', 'guitarras', 'instrumentos musicales', 'artesanal', 'reparación', 'construcción'],
  canonical: 'https://redfangluthier.com',
  openGraph: {
    title: 'Red Fang Luthier - Maestro Artesano de Instrumentos',
    description: 'Descubre instrumentos únicos creados con pasión y técnica tradicional',
    image: '/images/og-image.jpg',
    type: 'website',
    siteName: 'Red Fang Luthier'
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Red Fang Luthier',
    'jobTitle': 'Luthier',
    'description': 'Constructor artesanal de instrumentos musicales'
  }
};

// Ejemplo de configuración del sitio
export const exampleSiteConfig: SiteConfig = {
  name: 'Red Fang Luthier',
  description: 'Instrumentos musicales artesanales de la más alta calidad',
  url: 'https://redfangluthier.com',
  logo: '/images/logo.svg',
  favicon: '/favicon.svg',
  author: {
    name: 'Red Fang',
    email: 'info@redfangluthier.com',
    url: 'https://redfangluthier.com'
  },
  social: {
    instagram: 'https://instagram.com/redfangluthier',
    facebook: 'https://facebook.com/redfangluthier',
    youtube: 'https://youtube.com/@redfangluthier'
  },
  contact: {
    email: 'info@redfangluthier.com',
    phone: '+34 600 123 456',
    address: 'Taller de Luthería, Calle Principal 123, 28001 Madrid',
    hours: 'Lunes a Viernes: 9:00 - 18:00'
  }
};