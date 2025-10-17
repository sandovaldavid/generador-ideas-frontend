/**
 * Configuración y constantes de la aplicación
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  ENDPOINTS: {
    GENERATE_IDEAS: "/api/generate-ideas",
  },
  TIMEOUT: 30000, // 30 segundos
} as const;

// Messages
export const MESSAGES = {
  LOADING: "Creando ideas increíbles...",
  LOADING_SUBTITLE: "La IA está trabajando en tus ideas",
  ERROR_TITLE: "Oops! Algo salió mal",
  ERROR_RETRY: "Por favor, intenta nuevamente en unos momentos.",
  ERROR_CONNECTION: "No se pudo conectar con el servidor. Verifica que el backend esté corriendo.",
  ERROR_INVALID_RESPONSE: "Formato de respuesta inválido",
  SUCCESS_TITLE: "Tus Ideas Generadas",
  EMPTY_INPUT: "Por favor ingresa un tipo de negocio",
} as const;

// Placeholders
export const PLACEHOLDERS = {
  BUSINESS_TYPE: "Ej: restaurante, tecnología, educación...",
} as const;