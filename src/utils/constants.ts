// Color scheme constants
export const COLORS = {
  dark: '#101112',
  light: '#f0f8ff', // aliceblue
  darkLight: '#14181b',
  accent: '#d2691e', // chocolate/madera
  accentLight: '#daa520', // goldenrod
  zinc900: '#18181b',
  zinc800: '#27272a',
} as const;

// Site constants
export const SITE_CONFIG = {
  name: 'Red Fang Luthier',
  description: 'Constructor artesanal de instrumentos musicales',
  url: 'https://redfangluthier.com',
  locale: 'es',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { href: '/', label: 'home.' },
  { href: '/works', label: 'works.' },
  { href: '/services', label: 'services.' },
  { href: '/about', label: 'about.' },
  { href: '/contact', label: 'contact.' },
] as const;