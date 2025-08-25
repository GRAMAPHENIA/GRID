# Tech Stack

## Framework & Build System
- **Astro 5.13.3** - Static site generator with component islands architecture
- **TypeScript** - Type-safe development with strict typing
- **Vite** - Fast build tool and dev server

## Styling & UI
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Custom Design System** - Defined color palette and animations in tailwind.config.js
- **Responsive Design** - Mobile-first approach with custom breakpoints

## Key Dependencies
- `@tailwindcss/vite` - Vite integration for Tailwind CSS
- Modern ES modules (`"type": "module"` in package.json)

## Development Commands
```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture Patterns
- **Component-based** - Reusable .astro components
- **Type-safe** - TypeScript interfaces for all data structures
- **Static generation** - Pre-built pages for optimal performance
- **Island architecture** - Minimal JavaScript, hydration only when needed

## Performance Considerations
- Static site generation for fast loading
- Tailwind CSS purging for minimal bundle size
- Lazy loading for images and non-critical content
- SEO optimization with structured data