import { useState } from "react";
import Layout from "./components/Layout";
import GeneratorForm from "./components/GeneratorForm";
import IdeasDisplay from "./components/IdeasDisplay";
import type { Idea, BackendApiResponse } from "./types";
import { API_CONFIG, MESSAGES } from "./config/constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [businessType, setBusinessType] = useState("");
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessType.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const apiUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GENERATE_IDEAS}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessType: businessType.trim() }),
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }

      const data: BackendApiResponse = await response.json();

      if (data.success && data.ideas && Array.isArray(data.ideas)) {
        // Transformar la respuesta del backend al formato esperado por el frontend
        const transformedIdeas: Idea[] = data.ideas.map((idea, index) => ({
          id: Date.now() + index, // Generar ID único
          title: idea.titulo_gancho,
          description: idea.descripcion_ejecucion,
          category: `${idea.categoria} | ${idea.formato_sugerido}`,
        }));
        setIdeas(transformedIdeas);
      } else {
        throw new Error(MESSAGES.ERROR_INVALID_RESPONSE);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : MESSAGES.ERROR_CONNECTION);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBusinessTypeChange = (value: string) => {
    setBusinessType(value);
  };

  return (
    <Layout>
      <GeneratorForm
        businessType={businessType}
        onBusinessTypeChange={handleBusinessTypeChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <IdeasDisplay ideas={ideas} isLoading={isLoading} error={error} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}

export default App;
