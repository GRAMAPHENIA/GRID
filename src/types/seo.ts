// Tipos para SEO y metadatos

export interface OpenGraphData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  siteName?: string;
  locale?: string;
}

export interface TwitterCardData {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  structuredData?: StructuredData | StructuredData[];
  // Propiedades adicionales para SEO completo
  openGraph?: OpenGraphData;
  twitter?: TwitterCardData;
  robots?: string;
  author?: string;
  language?: string;
  charset?: string;
  viewport?: string;
  themeColor?: string;
  alternateLanguages?: Array<{
    hreflang: string;
    href: string;
  }>;
  jsonLd?: StructuredData[];
}