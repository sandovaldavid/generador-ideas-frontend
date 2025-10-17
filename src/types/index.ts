export interface Idea {
  id: number;
  title: string;
  description: string;
  category?: string;
}

// Tipos de la respuesta del backend
export interface BackendIdea {
  categoria: string;
  formato_sugerido: string;
  titulo_gancho: string;
  descripcion_ejecucion: string;
}

export interface BackendApiResponse {
  success: boolean;
  ideas: BackendIdea[];
  businessType: string;
}

export interface ApiResponse {
  ideas: Idea[];
  message?: string;
}

export interface ApiError {
  error: string;
  message?: string;
}
