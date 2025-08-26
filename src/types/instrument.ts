// Tipos para instrumentos musicales del luthier
export interface Instrument {
  id: string;
  name: string;
  type: 'guitar' | 'bass' | 'violin' | 'mandolin' | 'other';
  description: string;
  images: string[];
  specifications: {
    wood: string;
    finish: string;
    scale: string;
    year: number;
    strings?: number;
    pickups?: string;
    hardware?: string;
  };
  status: 'available' | 'sold' | 'commission';
  featured: boolean;
  slug: string;
  price?: number;
  createdAt: Date;
}

export interface InstrumentFilter {
  type?: Instrument['type'];
  status?: Instrument['status'];
  featured?: boolean;
}