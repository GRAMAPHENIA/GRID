// Tipos para el sistema de contacto y formularios

/**
 * Tipos de consulta disponibles en el formulario de contacto
 */
export type ContactSubject = 
  | 'construction'
  | 'repair' 
  | 'restoration'
  | 'setup'
  | 'consultation'
  | 'other';

/**
 * Tipos de servicio para el formulario (puede diferir de ServiceCategory)
 */
export type ServiceType = ContactSubject;

/**
 * Tipos de instrumento para consultas específicas
 */
export type InstrumentType = 
  | 'guitar'
  | 'bass'
  | 'violin'
  | 'mandolin'
  | 'ukulele'
  | 'other';

/**
 * Datos del formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: ContactSubject;
  instrumentType?: InstrumentType;
  message: string;
  budget?: string;
  timeline?: string;
  hasInstrument?: boolean;
  preferredContact?: 'email' | 'phone';
  newsletter?: boolean;
}

/**
 * Errores de validación del formulario
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  general?: string;
}

/**
 * Estados del formulario de contacto
 */
export type ContactFormState = 
  | 'idle'
  | 'validating'
  | 'submitting'
  | 'success'
  | 'error';

/**
 * Regla de validación para campos del formulario
 */
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message: string;
}

/**
 * Conjunto de reglas de validación para el formulario
 */
export interface FormValidationRules {
  [fieldName: string]: ValidationRule[];
}

/**
 * Respuesta del servidor al enviar el formulario
 */
export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
  submissionId?: string;
  estimatedResponse?: string; // ej: "24-48 horas"
}

/**
 * Configuración del formulario de contacto
 */
export interface ContactFormConfig {
  enablePhoneField: boolean;
  enableBudgetField: boolean;
  enableTimelineField: boolean;
  enableNewsletterSignup: boolean;
  requiredFields: (keyof ContactFormData)[];
  maxMessageLength: number;
  enableFileUpload: boolean;
  allowedFileTypes?: string[];
  maxFileSize?: number; // en MB
}

/**
 * Información de contacto del luthier
 */
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: {
    street?: string;
    city: string;
    country: string;
    postalCode?: string;
  };
  workingHours: {
    [day: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    website?: string;
  };
  appointmentRequired: boolean;
  responseTime: string; // ej: "24-48 horas"
}

/**
 * Datos para el mapa de ubicación (si se implementa)
 */
export interface LocationData {
  latitude: number;
  longitude: number;
  address: string;
  displayName: string;
  showExactLocation: boolean; // para privacidad
}

/**
 * FAQ item para la página de contacto
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'pricing' | 'process' | 'technical';
  order: number;
}

/**
 * Estadísticas de contacto (para analytics internos)
 */
export interface ContactStats {
  totalSubmissions: number;
  averageResponseTime: number; // en horas
  mostCommonInquiry: ContactSubject;
  conversionRate: number; // porcentaje de consultas que se convierten en proyectos
}

// Constantes útiles para el formulario
export const CONTACT_SUBJECTS: Record<ContactSubject, string> = {
  construction: 'Construcción de instrumento',
  repair: 'Reparación',
  restoration: 'Restauración',
  setup: 'Setup y ajustes',
  consultation: 'Consulta general',
  other: 'Otro'
};

export const INSTRUMENT_TYPES: Record<InstrumentType, string> = {
  guitar: 'Guitarra',
  bass: 'Bajo',
  violin: 'Violín',
  mandolin: 'Mandolina',
  ukulele: 'Ukulele',
  other: 'Otro'
};

// Reglas de validación por defecto
export const DEFAULT_VALIDATION_RULES: FormValidationRules = {
  name: [
    { required: true, message: 'El nombre es obligatorio' },
    { minLength: 2, message: 'El nombre debe tener al menos 2 caracteres' },
    { maxLength: 100, message: 'El nombre no puede exceder 100 caracteres' }
  ],
  email: [
    { required: true, message: 'El email es obligatorio' },
    { 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: 'Por favor, ingresa un email válido' 
    }
  ],
  phone: [
    { 
      pattern: /^[\+]?[0-9\s\-\(\)]{9,}$/, 
      message: 'Por favor, ingresa un teléfono válido' 
    }
  ],
  inquiryType: [
    { required: true, message: 'Por favor, selecciona el tipo de consulta' }
  ],
  message: [
    { required: true, message: 'El mensaje es obligatorio' },
    { minLength: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
    { maxLength: 2000, message: 'El mensaje no puede exceder 2000 caracteres' }
  ]
};