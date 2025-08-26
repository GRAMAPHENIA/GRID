// Constantes del sitio web Red Fang Luthier

// Esquema de colores minimalista
export const COLORS = {
  // Colores base
  almostBlack: '#111111',
  pureWhite: '#FFFFFF',
  
  // Paleta ocre
  ochre50: '#fdf8f3',
  ochre100: '#f9ede0',
  ochre200: '#f2d8bf',
  ochre300: '#e8bd94',
  ochre400: '#dc9b67',
  ochre500: '#d2691e',
  ochre600: '#b8571a',
  ochre700: '#9a4617',
  ochre800: '#7d3a18',
  ochre900: '#653016',
  
  // Grises neutros
  neutral50: '#fafafa',
  neutral100: '#f5f5f5',
  neutral200: '#e5e5e5',
  neutral300: '#d4d4d4',
  neutral400: '#a3a3a3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  
  // Alias para compatibilidad
  dark: '#111111',
  light: '#FFFFFF',
  darkLight: '#171717',
  accent: '#d2691e',
  accentLight: '#e8bd94',
} as const;

// Configuración principal del sitio
export const SITE_CONFIG = {
  name: 'Carpena Guitars',
  description: 'Constructor de instrumentos musicales con técnicas tradicionales y materiales de la más alta calidad',
  url: 'https://carpenaguitars.com',
  locale: 'es',
  author: {
    name: 'Carpena',
    email: 'info@carpenaguitars.com',
    url: 'https://carpenaguitars.com'
  },
  social: {
    instagram: 'https://instagram.com/carpenaguitars',
    facebook: 'https://facebook.com/carpenaguitars',
    youtube: 'https://youtube.com/@carpenaguitars'
  },
  contact: {
    email: 'info@carpenaguitars.com',
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
  'guitarras personalizadas',
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