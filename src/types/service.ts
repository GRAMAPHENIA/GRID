export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'construction' | 'repair' | 'restoration' | 'setup';
  duration: string;
  priceRange?: {
    min: number;
    max: number;
  };
  icon: string;
}