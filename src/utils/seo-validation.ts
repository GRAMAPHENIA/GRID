// Utilidades para validar y testear configuración SEO
import type { SEOData } from '../types';

/**
 * Valida que los datos SEO cumplan con las mejores prácticas
 */
export function validateSEOData(seo: SEOData): {
  isValid: boolean;
  warnings: string[];
  errors: string[];
} {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Validar título
  if (!seo.title) {
    errors.push('El título es obligatorio');
  } else {
    if (seo.title.length < 30) {
      warnings.push('El título es muy corto (recomendado: 30-60 caracteres)');
    }
    if (seo.title.length > 60) {
      warnings.push('El título es muy largo (recomendado: 30-60 caracteres)');
    }
  }

  // Validar descripción
  if (!seo.description) {
    errors.push('La descripción es obligatoria');
  } else {
    if (seo.description.length < 120) {
      warnings.push('La descripción es muy corta (recomendado: 120-160 caracteres)');
    }
    if (seo.description.length > 160) {
      warnings.push('La descripción es muy larga (recomendado: 120-160 caracteres)');
    }
  }

  // Validar keywords
  if (!seo.keywords || seo.keywords.length === 0) {
    warnings.push('Se recomienda incluir palabras clave');
  } else if (seo.keywords.length > 10) {
    warnings.push('Demasiadas palabras clave (recomendado: 5-10)');
  }

  // Validar Open Graph
  if (seo.openGraph) {
    if (!seo.openGraph.image) {
      warnings.push('Se recomienda incluir una imagen Open Graph');
    }
    if (!seo.openGraph.title) {
      warnings.push('Se recomienda incluir un título Open Graph específico');
    }
  }

  // Validar canonical URL
  if (seo.canonical && !isValidURL(seo.canonical)) {
    errors.push('La URL canónica no es válida');
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors
  };
}

/**
 * Valida si una URL es válida
 */
function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Genera un reporte de SEO para debugging
 */
export function generateSEOReport(seo: SEOData): string {
  const validation = validateSEOData(seo);
  
  let report = '=== REPORTE SEO ===\n\n';
  
  report += `Título: "${seo.title}" (${seo.title?.length || 0} caracteres)\n`;
  report += `Descripción: "${seo.description}" (${seo.description?.length || 0} caracteres)\n`;
  report += `Keywords: ${seo.keywords?.join(', ') || 'Ninguna'}\n`;
  report += `Canonical: ${seo.canonical || 'No definida'}\n`;
  report += `OG Image: ${seo.openGraph?.image || 'No definida'}\n\n`;
  
  if (validation.errors.length > 0) {
    report += '❌ ERRORES:\n';
    validation.errors.forEach(error => {
      report += `  - ${error}\n`;
    });
    report += '\n';
  }
  
  if (validation.warnings.length > 0) {
    report += '⚠️  ADVERTENCIAS:\n';
    validation.warnings.forEach(warning => {
      report += `  - ${warning}\n`;
    });
    report += '\n';
  }
  
  if (validation.isValid && validation.warnings.length === 0) {
    report += '✅ SEO optimizado correctamente\n';
  }
  
  return report;
}

/**
 * Extrae palabras clave automáticamente de un texto
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Palabras comunes a filtrar
  const stopWords = new Set([
    'el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'es', 'se', 'no', 'te', 'lo', 'le',
    'da', 'su', 'por', 'son', 'con', 'para', 'al', 'del', 'los', 'las', 'una', 'como',
    'pero', 'sus', 'le', 'ya', 'o', 'fue', 'este', 'ha', 'si', 'porque', 'esta', 'son',
    'entre', 'cuando', 'muy', 'sin', 'sobre', 'ser', 'tiene', 'también', 'me', 'hasta',
    'hay', 'donde', 'han', 'quien', 'están', 'estado', 'desde', 'todo', 'nos', 'durante',
    'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'fueron', 'ese', 'eso', 'había',
    'ante', 'ellos', 'e', 'esto', 'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro',
    'otras', 'otra', 'él', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos',
    'cual', 'poco', 'ella', 'estar', 'haber', 'estas', 'estaba', 'estamos', 'pueden',
    'hacen', 'entonces', 'tiempo', 'cada', 'más', 'años'
  ]);

  // Limpiar y dividir el texto
  const words = text
    .toLowerCase()
    .replace(/[^\w\sáéíóúñü]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Contar frecuencias
  const wordCount = new Map<string, number>();
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });

  // Ordenar por frecuencia y tomar las más relevantes
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}