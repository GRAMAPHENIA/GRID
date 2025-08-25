# Design Document - Red Fang Luthier Website

## Overview

El sitio web de Red Fang será una plataforma elegante y profesional que showcase el trabajo artesanal de un luthier. Utilizando Astro como framework principal, el sitio combinará rendimiento excepcional con una experiencia de usuario refinada. El diseño mantendrá la estética oscura y minimalista del proyecto base, expandiéndola para crear una presencia web completa y profesional.

## Architecture

### Technology Stack
- **Framework**: Astro 4.x (Static Site Generation)
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript
- **Build Tool**: Vite (integrado con Astro)
- **Deployment**: Estático (compatible con Netlify, Vercel, GitHub Pages)

### Project Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── ImagePlaceholder.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Portfolio.astro
│   │   ├── Services.astro
│   │   └── Contact.astro
│   └── forms/
│       └── ContactForm.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── works/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── services.astro
│   ├── about.astro
│   └── contact.astro
├── styles/
│   └── global.css
├── types/
│   ├── instrument.ts
│   └── service.ts
└── utils/
    ├── seo.ts
    └── constants.ts
public/
├── images/
│   ├── placeholders/
│   └── instruments/
├── icons/
├── robots.txt
└── sitemap.xml
```

## Components and Interfaces

### Core Layout Components

#### BaseLayout.astro
Layout principal que incluye:
- Meta tags SEO completos
- Structured data JSON-LD
- Preload de recursos críticos
- Configuración de Tailwind
- Scripts de analytics (preparado para futuro)

#### Header.astro
Navegación principal con:
- Logo "Red Fang" 
- Menú responsive
- Animaciones de entrada suaves
- Indicadores de página activa
- Navegación por teclado completa

#### Footer.astro
Pie de página con:
- Enlaces de navegación duplicados
- Información de contacto
- Enlaces a redes sociales
- Copyright y créditos

### Content Components

#### Hero.astro
Sección principal de inicio:
- Título impactante sobre el luthier
- Descripción breve del trabajo artesanal
- Call-to-action hacia portfolio
- Imagen hero con placeholder elegante

#### Portfolio.astro
Galería de trabajos:
- Grid responsive de instrumentos
- Lazy loading de imágenes
- Filtros por tipo de instrumento
- Enlaces a páginas de detalle

#### Services.astro
Servicios ofrecidos:
- Cards de servicios (construcción, reparación, restauración)
- Iconografía apropiada
- Descripciones detalladas
- Precios orientativos (opcional)

#### ContactForm.astro
Formulario de contacto:
- Validación client-side
- Campos: nombre, email, tipo de consulta, mensaje
- Accesibilidad completa
- Estados de loading y success

### UI Components

#### ImagePlaceholder.astro
Componente reutilizable para imágenes no disponibles:
- Fondo zinc-900
- Icono de imagen sutil centrado
- Aspect ratio configurable
- Lazy loading preparado

#### Navigation.astro
Componente de navegación modular:
- Menú hamburguesa en móvil
- Transiciones suaves
- Estados hover y focus
- Breadcrumbs en páginas internas

## Data Models

### Instrument Interface
```typescript
interface Instrument {
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
```

### Service Interface
```typescript
interface Service {
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
```

### SEO Metadata Interface
```typescript
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}
```

## Design System

### Color Palette
```css
:root {
  --dark: #101112;           /* Fondo principal */
  --light: #f0f8ff;          /* Texto principal (aliceblue) */
  --dark-light: #14181b;     /* Elementos elevados */
  --accent: #d2691e;         /* Acentos (chocolate/madera) */
  --accent-light: #daa520;   /* Acentos secundarios (goldenrod) */
  --zinc-900: #18181b;       /* Placeholders */
  --zinc-800: #27272a;       /* Bordes sutiles */
}
```

### Typography Scale
- **Headings**: font-family: system-ui
- **Body**: font-family: system-ui
- **Scale**: Tailwind default (text-xs a text-9xl)
- **Line Height**: Optimizado para legibilidad

### Spacing System
- Basado en Tailwind (4px base unit)
- Contenedores: max-width responsive
- Margins: Consistentes entre secciones
- Padding: Apropiado para touch targets

### Component Patterns
- **Cards**: Fondo dark-light, bordes redondeados (rounded-3xl)
- **Buttons**: Estados hover/focus claros, transiciones suaves
- **Forms**: Labels claros, validación visual
- **Images**: Aspect ratios consistentes, lazy loading

## Error Handling

### Image Loading
- Fallback a placeholders automático
- Error states para imágenes rotas
- Progressive loading con blur-up

### Form Validation
- Validación en tiempo real
- Mensajes de error claros y accesibles
- Estados de loading durante envío

### Navigation Errors
- 404 page personalizada
- Breadcrumbs para orientación
- Enlaces de recuperación

### Performance Fallbacks
- Lazy loading con intersección observer
- Preload crítico, defer no crítico
- Graceful degradation sin JavaScript

## Testing Strategy

### Accessibility Testing
- Automated testing con axe-core
- Manual testing con lectores de pantalla
- Keyboard navigation testing
- Color contrast validation

### Performance Testing
- Lighthouse CI en build process
- Core Web Vitals monitoring
- Image optimization validation
- Bundle size monitoring

### Cross-browser Testing
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement verification

### SEO Testing
- Meta tags validation
- Structured data testing
- Sitemap generation verification
- Robots.txt compliance

## SEO Implementation

### Meta Tags Strategy
```html
<!-- Cada página incluirá -->
<title>Título específico | Red Fang Luthier</title>
<meta name="description" content="Descripción única de 150-160 caracteres">
<meta name="keywords" content="luthier, guitarras, instrumentos, artesanal">
<link rel="canonical" href="URL canónica">

<!-- Open Graph -->
<meta property="og:title" content="Título para redes sociales">
<meta property="og:description" content="Descripción para redes sociales">
<meta property="og:image" content="Imagen representativa">
<meta property="og:type" content="website">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Red Fang Luthier",
  "jobTitle": "Luthier",
  "description": "Constructor artesanal de instrumentos musicales",
  "url": "https://redfangluthier.com",
  "sameAs": ["enlaces a redes sociales"]
}
```

### Performance Optimizations
- Critical CSS inlined
- Non-critical CSS deferred
- Images optimized y served en formatos modernos
- Minimal JavaScript bundle
- Service Worker para caching (futuro)

## Responsive Design Strategy

### Breakpoints (Tailwind)
- **sm**: 640px (móvil grande)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop pequeño)
- **xl**: 1280px (desktop)
- **2xl**: 1536px (desktop grande)

### Layout Adaptations
- **Mobile**: Single column, menú hamburguesa, touch-friendly
- **Tablet**: Two column grids, expanded navigation
- **Desktop**: Multi-column layouts, hover states, keyboard shortcuts

### Image Strategy
- Responsive images con srcset
- Art direction para diferentes aspectos
- Lazy loading con intersection observer
- WebP/AVIF con fallbacks

## Animation and Interactions

### Entrance Animations
- Mantener animaciones existentes del proyecto base
- Staggered animations para elementos de lista
- Smooth scroll behavior
- Reduced motion respect

### Hover States
- Subtle scale transforms
- Color transitions
- Shadow elevations
- Cursor changes apropiados

### Loading States
- Skeleton screens para contenido
- Progress indicators para forms
- Smooth transitions entre estados

## Deployment and Build

### Build Process
```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview build local
npm run preview
```

### Optimization Features
- Automatic image optimization
- CSS purging y minification
- JavaScript tree shaking
- HTML minification
- Sitemap generation automática

### Deployment Targets
- **Netlify**: Deploy automático desde Git
- **Vercel**: Optimizaciones automáticas
- **GitHub Pages**: Build con GitHub Actions
- **Traditional hosting**: Static files upload