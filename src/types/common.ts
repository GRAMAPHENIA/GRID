// Tipos comunes y utilidades del sistema

// Tipos base para entidades
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Tipos para paginación
export interface PaginationParams {
  page: number;
  limit: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Tipos para filtros y búsqueda
export interface FilterOptions {
  search?: string;
  category?: string;
  type?: string;
  status?: string;
  featured?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Tipos para respuestas de API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string>;
}

// Tipos para estados de carga
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = any> {
  data?: T;
  loading: LoadingState;
  error?: string;
}

// Tipos para navegación
export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
  children?: NavigationItem[];
}

// Tipos para imágenes
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
}

// Tipos para configuración del sitio
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo?: string;
  favicon?: string;
  author: {
    name: string;
    email?: string;
    url?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
    hours?: string;
  };
}

// Tipos para breadcrumbs
export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// Tipos para notificaciones/alertas
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
  id?: string;
  type: AlertType;
  title?: string;
  message: string;
  dismissible?: boolean;
  duration?: number;
}