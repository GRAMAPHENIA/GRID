# Project Structure

## Root Directory
```
/
├── src/                    # Source code
├── public/                 # Static assets (images, favicon)
├── dist/                   # Build output (generated)
├── .astro/                 # Astro cache and generated files
├── .kiro/                  # Kiro configuration and specs
└── node_modules/           # Dependencies
```

## Source Organization (`src/`)
```
src/
├── components/             # Reusable UI components
│   ├── forms/             # Form-related components
│   ├── sections/          # Page section components
│   └── ui/                # Basic UI elements
├── layouts/               # Page layout templates
│   └── BaseLayout.astro   # Main layout wrapper
├── pages/                 # Route-based pages (Astro routing)
│   └── index.astro        # Homepage
├── styles/                # Global CSS styles
│   └── global.css         # Global stylesheet
├── types/                 # TypeScript type definitions
│   ├── index.ts           # General types
│   ├── instrument.ts      # Instrument data types
│   ├── seo.ts            # SEO metadata types
│   └── service.ts         # Service data types
└── utils/                 # Utility functions and constants
    ├── constants.ts       # App constants
    └── seo.ts            # SEO helper functions
```

## Component Organization
- **UI Components** (`src/components/ui/`) - Basic reusable elements (buttons, cards, etc.)
- **Section Components** (`src/components/sections/`) - Page-specific sections (Hero, Portfolio, etc.)
- **Form Components** (`src/components/forms/`) - Contact forms and form elements
- **Layout Components** (`src/layouts/`) - Page structure and common layouts

## File Naming Conventions
- **Components**: PascalCase (e.g., `Header.astro`, `ContactForm.astro`)
- **Pages**: lowercase with hyphens (e.g., `index.astro`, `about.astro`)
- **Types**: lowercase with descriptive names (e.g., `instrument.ts`, `service.ts`)
- **Utils**: lowercase with descriptive names (e.g., `seo.ts`, `constants.ts`)

## Static Assets (`public/`)
- Images, icons, and other static files
- Directly accessible at root URL (e.g., `/favicon.svg`)
- No processing or optimization by build system

## Configuration Files
- `astro.config.mjs` - Astro configuration
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts