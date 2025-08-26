# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Agregado
- Navegación móvil completamente funcional con CSS puro (sin JavaScript)
- Menú hamburguesa con overlay glassmorphism y sidebar deslizante
- Transiciones suaves y animaciones para navegación móvil
- Responsive design mejorado para móviles en todas las páginas
- Corrección de marca de "Red Fang Luthier" a "Carpena Guitars"
- Eliminación de la palabra "artesanal" del branding
- Páginas de servicios y about completamente implementadas
- Componente Services.astro con diseño micro-minimalista
- Página services.astro simplificada con solo construcción y reparación
- Página about.astro con historia y filosofía del luthier
- Datos de servicios simplificados con información esencial
- Iconografía SVG minimalista para servicios
- Diseño de cards consistente con el portfolio

### Corregido
- Navegación móvil reescrita usando técnica de checkbox oculto
- Menú hamburguesa funcional con transiciones CSS suaves
- Layout shift eliminado en navegación móvil con posicionamiento fijo
- Orden de @import en global.css para evitar warnings de PostCSS
- Google Fonts import movido antes de Tailwind CSS import
- Responsive design mejorado en páginas works y services
- Consistencia de estilos entre secciones del sitio
- Sistema completo de portfolio/trabajos con galería responsive de instrumentos
- Página works/index.astro con filtros por tipo de instrumento y estadísticas
- Páginas dinámicas [slug].astro para instrumentos individuales con especificaciones técnicas
- Componente Portfolio.astro con grid responsive, lazy loading y filtros interactivos
- Datos mock de instrumentos con especificaciones detalladas (guitarras, bajos, violines, mandolinas)
- Sistema de lazy loading para imágenes del portfolio con IntersectionObserver
- Breadcrumb navigation y SEO optimizado para páginas de instrumentos
- Instrumentos relacionados y galería de imágenes con miniaturas
- Badges de estado (disponible, vendido, por encargo) y destacados
- Integración completa con sistema de tipos TypeScript

### Cambiado
- Migración completa a diseño minimalista con paleta de colores ocres
- Actualización de Tailwind CSS con nueva paleta de colores (ochre, neutral, almost-black, pure-white)
- Refactorización de estilos globales con variables CSS minimalistas
- Tipografía actualizada a Inter con pesos limitados (400, 500, 700)
- Componente ImagePlaceholder mejorado con colores neutros y mejor contraste
- Sistema de botones minimalistas con estados hover/focus optimizados
- Contraste mejorado para cumplir WCAG AA (4.5:1 mínimo)
- Espaciado consistente con variables CSS personalizadas
- Header simplificado sin glassmorfismo, fondo blanco puro con navegación minimalista
- Hero section completamente rediseñado sin gradientes ni efectos complejos
- Footer actualizado con colores neutros y diseño limpio
- Eliminación de efectos hover scale en cards del portfolio (mantenido solo en imágenes)
- Navegación simplificada con transiciones suaves y colores consistentes
- Páginas works actualizadas con nuevo sistema de colores minimalista

### Agregado
- Página de inicio completa con Hero section y secciones informativas
- Componente Hero.astro con animaciones migradas del CSS original
- Animaciones CSS optimizadas con respeto por reduced motion
- Sección de introducción con estadísticas del luthier
- Sección de servicios destacados con iconografía SVG
- Call-to-action final con gradiente de marca
- Meta tags específicos para la página de inicio optimizados para SEO local
- Structured data completo para luthier con información de contacto
- CSS global mejorado con animaciones y optimizaciones Core Web Vitals
- Sistema de animaciones escalonadas con delays configurables
- Sistema SEO completo con utilidades avanzadas y meta tags optimizados
- Generación dinámica de sitemap.xml con URLs estáticas y dinámicas
- Archivo robots.txt optimizado para indexación de motores de búsqueda
- Structured data JSON-LD para luthier, instrumentos y servicios
- Utilidades para meta tags específicos por tipo de página
- Sistema de validación SEO con reportes y debugging
- Configuración completa de Open Graph y Twitter Cards
- Extractor automático de palabras clave desde contenido
- Layout base completo con estructura HTML semántica y SEO optimizado
- Componente Header con navegación responsive y accesible
- Componente Footer con enlaces de navegación e información de contacto
- Componente ImagePlaceholder reutilizable con fondo zinc-900 e icono
- Componente Navigation modular para breadcrumbs y navegación secundaria
- BaseLayout mejorado con structured data JSON-LD y meta tags completos
- Skip link para accesibilidad y soporte completo de teclado
- Navegación móvil con menú hamburguesa y animaciones suaves
- Sistema completo de tipos TypeScript para el proyecto
- Interface Instrument con especificaciones técnicas detalladas
- Interface Service con categorías y rangos de precios
- Interface SEOData con Open Graph y Twitter Cards
- Tipos para formularios de contacto con validación
- Tipos comunes y utilidades del sistema (paginación, filtros, navegación)
- Archivo de ejemplos con casos de uso reales
- Exportación centralizada de todos los tipos en index.ts
- Archivos de steering para guiar el desarrollo del proyecto
- Configuración de flujo de trabajo en español
- Reglas para documentación y commits en español
- Steering de producto, tecnología, estructura y workflow

### En Progreso
- Implementación del sitio web completo siguiendo el spec creado
- Sistema de portfolio para mostrar instrumentos musicales
- Formulario de contacto funcional
- Responsive design completo

## [0.2.0] - 2025-08-25 - Setup Inicial Astro

### Agregado
- Configuración inicial del proyecto Astro 5.x con TypeScript strict
- Integración de Tailwind CSS 4.x con configuración personalizada
- Estructura de directorios organizada (components, layouts, pages, types, utils)
- Sistema de tipos TypeScript para Instrument, Service y SEOData
- BaseLayout.astro con SEO completo y metadatos
- Utilidades SEO y constantes del sitio
- Migración de paleta de colores personalizada a Tailwind
- CSS global con variables personalizadas y scrollbar customizado
- Configuración de animaciones personalizadas en Tailwind
- Build exitoso verificado

### Técnico
- Astro 5.13.3 con Vite y plugins de Tailwind
- TypeScript con configuración strict
- Estructura modular y escalable
- SEO optimizado con Open Graph y Twitter Cards

## [0.1.0] - Documentación y Planificación

### Agregado
- Documentación completa del spec para sitio web de luthier Red Fang
- Documento de requerimientos con 8 áreas principales de funcionalidad
- Documento de diseño técnico con arquitectura Astro + Tailwind + TypeScript
- Plan de implementación con 15 tareas específicas de desarrollo
- Estructura base para migración de HTML/CSS existente a stack moderno

## [0.1.0] - Proyecto Base
### Agregado
- Estructura HTML básica con navegación
- Estilos CSS con tema oscuro y animaciones
- Layout responsive básico
- Paleta de colores establecida (--dark, --light, --dark-light)
- Animaciones de entrada para navegación y contenedores