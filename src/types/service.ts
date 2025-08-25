// Tipos para servicios del luthier

export type ServiceCategory = 'construction' | 'repair' | 'restoration' | 'setup';

export interface PriceRange {
  min: number;
  max: number;
  currency?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  duration: string;
  priceRange?: PriceRange;
  icon: string;
  // Propiedades adicionales para mejor funcionalidad
  shortDescription?: string;
  features?: string[];
  process?: string[];
  requirements?: string[];
  deliverables?: string[];
  featured?: boolean;
  available?: boolean;
  estimatedTime?: {
    min: number;
    max: number;
    unit: 'hours' | 'days' | 'weeks' | 'months';
  };
  tags?: string[];
}