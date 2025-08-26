# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### En Progreso
- Optimización de rendimiento y carga
- Responsive design completo
- Testing y validación
- Build y deployment
- Integración final y pulido

## [0.3.0] - 2025-08-26 - Sistema de Contacto y Accesibilidad

### Agregado
- Sistema de contacto completo con formulario funcional
- Página contact.astro con diseño minimalista consistente
- Componente ContactForm.astro con validación client-side
- Validación de campos en tiempo real con TypeScript
- Estados de loading y success en formulario de contacto
- Información de contacto, horarios y FAQ interactiva
- Tipos TypeScript completos para sistema de contacto (contact.ts)
- Accesibilidad completa WCAG 2.1 AA implementada
- ARIA labels descriptivos en todos los componentes interactivos
- Navegación por teclado completa en Header y formularios
- Roles ARIA apropiados en secciones semánticas
- Alt text descriptivo para todas las imágenes
- Indicadores de foco visibles y claros con color ochre
- Contraste de colores validado WCAG 2.1 AA
- Skip links mejorados para accesibilidad
- Anuncios a screen readers para cambios dinámicos
- Tamaños mínimos de touch targets (44px) en móvil
- Estados de error accesibles en formularios
- HTML semántico con elementos address, time, nav
- Soporte completo para prefers-reduced-motion
- Número de versión en footer del sitio

### Corregido
- Contraste de colores mejorado en todos los elementos de texto
- Estados de foco consistentes con anillos personalizados
- Navegación móvil con mejor accesibilidad por teclado
- Mensajes de validación de formularios más claros
- Iconos decorativos marcados con aria-hidden="true"
- Enlaces con focus:ring-offset para mejor visibilidad
- Botones de filtro con aria-pressed para estado actual
- ImagePlaceholder con iconos SVG inline para mejor rendimiento

### Técnico
- Cumplimiento completo con estándares WCAG 2.1 AA
- Validación de accesibilidad en todos los componentes
- Mejoras de contraste y legibilidad
- Navegación por teclado optimizada
- Compatibilidad con lectores de pantalla
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