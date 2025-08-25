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
  };
  status: 'available' | 'sold' | 'commission';
  featured: boolean;
  slug: string;
}