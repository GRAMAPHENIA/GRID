// Exportación centralizada de todos los tipos del sistema

// Tipos de instrumentos
export type { 
  Instrument, 
  InstrumentType, 
  InstrumentStatus, 
  InstrumentSpecifications 
} from './instrument';

// Tipos de servicios
export type { 
  Service, 
  ServiceCategory, 
  PriceRange 
} from './service';

// Tipos de SEO y metadatos
export type { 
  SEOData, 
  OpenGraphData, 
  TwitterCardData, 
  StructuredData 
} from './seo';

// Tipos de formularios de contacto
export type { 
  ContactFormData, 
  ContactFormErrors, 
  ContactFormState,
  ServiceType,
  InstrumentType as ContactInstrumentType,
  ContactSubject,
  ValidationRule,
  FormValidationRules,
  ContactSubmissionResponse
} from './contact';

// Tipos comunes y utilidades
export type {
  BaseEntity,
  PaginationParams,
  PaginatedResponse,
  FilterOptions,
  ApiResponse,
  LoadingState,
  AsyncState,
  NavigationItem,
  ImageData,
  SiteConfig,
  BreadcrumbItem,
  Alert,
  AlertType
} from './common';