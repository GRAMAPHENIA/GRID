// Constantes del sitio web Red Fang Luthier

// Esquema de colores
export const COLORS = {
  dark: '#101112',
  light: '#f0f8ff', // aliceblue
  darkLight: '#14181b',
  accent: '#d2691e', // chocolate/madera
  accentLight: '#daa520', // goldenrod
  zinc900: '#18181b',
  zinc800: '#27272a',
} as const;

// Configuración principal del sitio
export const SITE_CONFIG = {
  name: 'Red Fang Luthier',
  description: 'Constructor artesanal de instrumentos musicales con técnicas tradicionales y materiales de la más alta calidad',
  url: 'https://redfangluthier.com',
  locale: 'es',
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
} as const;

// Elementos de navegación
export const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/works', label: 'Trabajos' },
  { href: '/services', label: 'Servicios' },
  { href: '/about', label: 'Acerca de' },
  { href: '/contact', label: 'Contacto' },
] as const;

// Keywords SEO por defecto
export const DEFAULT_KEYWORDS = [
  'luthier',
  'guitarras artesanales',
  'instrumentos musicales',
  'construcción de guitarras',
  'reparación de instrumentos',
  'restauración de guitarras',
  'luthería tradicional',
  'instrumentos de cuerda',
  'guitarras clásicas',
  'guitarras flamencas'
] as const;

// Configuración de robots.txt
export const ROBOTS_CONFIG = {
  userAgent: '*',
  allow: '/',
  disallow: ['/admin/', '/private/', '/*.json$'],
  sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  crawlDelay: 1
} as const;