// Generación dinámica del sitemap.xml
import type { APIRoute } from 'astro';
import { generateFullSitemap } from '../utils/sitemap';

export const GET: APIRoute = async () => {
  // Por ahora usamos un array vacío para instrumentos
  // Cuando implementemos el sistema de portfolio, aquí cargaremos los datos reales
  const instruments: Array<{ slug: string; updatedAt?: Date }> = [
    // Datos de ejemplo que se reemplazarán con datos reales
    { slug: 'guitarra-clasica-001', updatedAt: new Date('2024-01-15') },
    { slug: 'guitarra-flamenca-002', updatedAt: new Date('2024-02-10') },
    { slug: 'mandolina-artesanal-003', updatedAt: new Date('2024-03-05') }
  ];

  const sitemap = generateFullSitemap(instruments);

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
    },
  });
};