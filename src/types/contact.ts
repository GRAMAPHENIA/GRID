// Tipos para formularios de contacto y comunicación

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  serviceType?: ServiceType;
  instrumentType?: InstrumentType;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError?: string;
}

// Tipos específicos para el contexto del luthier
export type ServiceType = 
  | 'construction' 
  | 'repair' 
  | 'restoration' 
  | 'setup' 
  | 'consultation' 
  | 'other';

export type InstrumentType = 
  | 'guitar' 
  | 'bass' 
  | 'violin' 
  | 'mandolin' 
  | 'ukulele' 
  | 'other';

export type ContactSubject = 
  | 'quote_request' 
  | 'repair_inquiry' 
  | 'custom_build' 
  | 'general_question' 
  | 'appointment' 
  | 'other';

// Validación de formulario
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface FormValidationRules {
  [key: string]: ValidationRule;
}

// Respuesta del servidor (para futuras integraciones)
export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
  errors?: ContactFormErrors;
}