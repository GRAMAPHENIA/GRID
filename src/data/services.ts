// Datos de servicios del luthier Red Fang

import type { Service } from '../types/service';

export const SERVICES_DATA: Service[] = [
  {
    id: 'construccion',
    name: 'Construcción',
    description: 'Guitarras clásicas y flamencas hechas a medida con técnicas tradicionales',
    category: 'construction',
    duration: '3-6 meses',
    priceRange: {
      min: 2500,
      max: 8000,
      currency: 'EUR'
    },
    icon: 'construction',
    featured: true,
    available: true,
    tags: ['artesanal', 'personalizado']
  },
  {
    id: 'reparacion',
    name: 'Reparación',
    description: 'Diagnóstico y reparación profesional de instrumentos de cuerda',
    category: 'repair',
    duration: '1-4 semanas',
    priceRange: {
      min: 50,
      max: 800,
      currency: 'EUR'
    },
    icon: 'repair',
    featured: true,
    available: true,
    tags: ['diagnóstico', 'ajuste']
  }
];

// Función para obtener servicios por categoría
export function getServicesByCategory(category: Service['category']): Service[] {
  return SERVICES_DATA.filter(service => service.category === category);
}

// Función para obtener servicios destacados
export function getFeaturedServices(): Service[] {
  return SERVICES_DATA.filter(service => service.featured);
}

// Función para obtener un servicio por ID
export function getServiceById(id: string): Service | undefined {
  return SERVICES_DATA.find(service => service.id === id);
}