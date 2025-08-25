// Utilidades para generar sitemap.xml dinámico
import { SITE_CONFIG } from './constants';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Genera las URLs estáticas del sitio
 */
export function getStaticSitemapEntries(): SitemapEntry[] {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/works`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    }
  ];
}

/**
 * Genera URLs dinámicas para instrumentos (cuando estén disponibles)
 */
export function getInstrumentSitemapEntries(instruments: Array<{ slug: string; updatedAt?: Date }>): SitemapEntry[] {
  const baseUrl = SITE_CONFIG.url;
  
  return instruments.map(instrument => ({
    url: `${baseUrl}/works/${instrument.slug}`,
    lastmod: instrument.updatedAt?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.7
  }));
}

/**
 * Genera el XML del sitemap completo
 */
export function generateSitemapXML(entries: SitemapEntry[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = entries.map(entry => {
    let urlXml = `  <url>\n    <loc>${entry.url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority !== undefined) {
      urlXml += `\n    <priority>${entry.priority}</priority>`;
    }
    
    urlXml += '\n  </url>';
    return urlXml;
  }).join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
}

/**
 * Genera sitemap completo con todas las URLs
 */
export function generateFullSitemap(instruments: Array<{ slug: string; updatedAt?: Date }> = []): string {
  const staticEntries = getStaticSitemapEntries();
  const instrumentEntries = getInstrumentSitemapEntries(instruments);
  const allEntries = [...staticEntries, ...instrumentEntries];
  
  return generateSitemapXML(allEntries);
}