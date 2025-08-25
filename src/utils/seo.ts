import type { SEOData } from '../types';
import { SITE_CONFIG } from './constants';

export function generateSEO(data: Partial<SEOData>): SEOData {
  return {
    title: data.title ? `${data.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
    description: data.description || SITE_CONFIG.description,
    keywords: data.keywords || ['luthier', 'guitarras', 'instrumentos', 'artesanal', 'construcción', 'reparación'],
    ogImage: data.ogImage,
    canonical: data.canonical,
    structuredData: data.structuredData,
  };
}