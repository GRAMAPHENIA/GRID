// Tipos para instrumentos musicales y especificaciones técnicas

export type InstrumentType = 'guitar' | 'bass' | 'violin' | 'mandolin' | 'other';
export type InstrumentStatus = 'available' | 'sold' | 'commission';

export interface InstrumentSpecifications {
  wood: string;
  finish: string;
  scale: string;
  year: number;
  // Especificaciones adicionales opcionales
  strings?: number;
  frets?: number;
  pickups?: string;
  bridge?: string;
  tuners?: string;
  nut?: string;
  weight?: string;
  dimensions?: {
    length: string;
    width: string;
    depth: string;
  };
}

export interface Instrument {
  id: string;
  name: string;
  type: InstrumentType;
  description: string;
  images: string[];
  specifications: InstrumentSpecifications;
  status: InstrumentStatus;
  featured: boolean;
  slug: string;
  // Propiedades adicionales para mejor funcionalidad
  price?: number;
  currency?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: string[];
  category?: string;
  shortDescription?: string;
}