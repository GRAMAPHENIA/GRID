import type { Instrument } from '../types/instrument';

// Datos mock de instrumentos del luthier Red Fang
export const instruments: Instrument[] = [
  {
    id: '1',
    name: 'Stratocaster Artesanal Sunburst',
    type: 'guitar',
    description: 'Guitarra eléctrica estilo Stratocaster construida completamente a mano con maderas seleccionadas. Cuenta con un sonido brillante y versátil, perfecta para blues, rock y jazz.',
    images: [],
    specifications: {
      wood: 'Cuerpo: Aliso, Mástil: Arce, Diapasón: Palisandro',
      finish: 'Sunburst nitrocelulosa envejecida',
      scale: '25.5" (648mm)',
      year: 2024,
      strings: 6,
      pickups: '3 pastillas single-coil artesanales',
      hardware: 'Puente vintage tremolo, clavijas Gotoh'
    },
    status: 'available',
    featured: true,
    slug: 'stratocaster-artesanal-sunburst',
    price: 2800,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Telecaster Butterscotch Vintage',
    type: 'guitar',
    description: 'Telecaster clásica con el icónico acabado butterscotch. Construcción tradicional que respeta las especificaciones originales de los años 50.',
    images: [],
    specifications: {
      wood: 'Cuerpo: Fresno, Mástil: Arce',
      finish: 'Butterscotch blonde nitrocelulosa',
      scale: '25.5" (648mm)',
      year: 2023,
      strings: 6,
      pickups: '2 pastillas single-coil vintage',
      hardware: 'Puente fijo con silletas de latón'
    },
    status: 'sold',
    featured: true,
    slug: 'telecaster-butterscotch-vintage',
    price: 2400,
    createdAt: new Date('2023-11-20')
  },
  {
    id: '3',
    name: 'Les Paul Studio Caoba',
    type: 'guitar',
    description: 'Les Paul de caoba sólida con tapa de arce flameado. Sonido potente y sustain excepcional, ideal para rock y metal.',
    images: [],
    specifications: {
      wood: 'Cuerpo: Caoba con tapa de arce, Mástil: Caoba, Diapasón: Palisandro',
      finish: 'Cherry sunburst brillante',
      scale: '24.75" (628mm)',
      year: 2024,
      strings: 6,
      pickups: '2 humbuckers artesanales',
      hardware: 'Puente Tune-o-matic, cordal stop-bar'
    },
    status: 'available',
    featured: false,
    slug: 'les-paul-studio-caoba',
    price: 3200,
    createdAt: new Date('2024-02-10')
  },
  {
    id: '4',
    name: 'Bajo Precision Vintage',
    type: 'bass',
    description: 'Bajo eléctrico de 4 cuerdas inspirado en los clásicos Precision Bass. Sonido profundo y definido, perfecto para cualquier género musical.',
    images: [],
    specifications: {
      wood: 'Cuerpo: Aliso, Mástil: Arce, Diapasón: Palisandro',
      finish: 'Olympic white envejecido',
      scale: '34" (864mm)',
      year: 2023,
      strings: 4,
      pickups: '1 pastilla split-coil vintage',
      hardware: 'Puente vintage con silletas ajustables'
    },
    status: 'commission',
    featured: true,
    slug: 'bajo-precision-vintage',
    price: 2600,
    createdAt: new Date('2023-12-05')
  },
  {
    id: '5',
    name: 'Violín Acústico Clásico',
    type: 'violin',
    description: 'Violín acústico construido siguiendo técnicas tradicionales europeas. Maderas envejecidas naturalmente por más de 10 años.',
    images: [],
    specifications: {
      wood: 'Tapa: Abeto alemán, Fondo y aros: Arce balcánico',
      finish: 'Barniz al alcohol tradicional',
      scale: '13" (330mm)',
      year: 2024,
      strings: 4,
      hardware: 'Clavijas de ébano, cordal de ébano con microafinadores'
    },
    status: 'available',
    featured: false,
    slug: 'violin-acustico-clasico',
    price: 4500,
    createdAt: new Date('2024-03-01')
  },
  {
    id: '6',
    name: 'Mandolina Bluegrass A-Style',
    type: 'mandolin',
    description: 'Mandolina estilo A tradicional, perfecta para bluegrass y música folk. Construcción completamente artesanal con atención al detalle.',
    images: [],
    specifications: {
      wood: 'Tapa: Abeto sitka, Fondo y aros: Arce',
      finish: 'Natural satinado',
      scale: '13.875" (352mm)',
      year: 2023,
      strings: 8,
      hardware: 'Clavijas de fricción tradicionales'
    },
    status: 'sold',
    featured: false,
    slug: 'mandolina-bluegrass-astyle',
    price: 1800,
    createdAt: new Date('2023-10-15')
  }
];

// Función para obtener instrumentos filtrados
export function getInstruments(filter?: Partial<InstrumentFilter>): Instrument[] {
  if (!filter) return instruments;
  
  return instruments.filter(instrument => {
    if (filter.type && instrument.type !== filter.type) return false;
    if (filter.status && instrument.status !== filter.status) return false;
    if (filter.featured !== undefined && instrument.featured !== filter.featured) return false;
    return true;
  });
}

// Función para obtener un instrumento por slug
export function getInstrumentBySlug(slug: string): Instrument | undefined {
  return instruments.find(instrument => instrument.slug === slug);
}

// Función para obtener instrumentos destacados
export function getFeaturedInstruments(): Instrument[] {
  return instruments.filter(instrument => instrument.featured);
}