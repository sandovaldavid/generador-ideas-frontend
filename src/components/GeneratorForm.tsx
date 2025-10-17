import { PLACEHOLDERS } from "../config/constants";
import SparklesIcon from "./icons/SparklesIcon";

interface GeneratorFormProps {
  businessType: string;
  onBusinessTypeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function GeneratorForm({
  businessType,
  onBusinessTypeChange,
  onSubmit,
  isLoading,
}: GeneratorFormProps) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/90 rounded-2xl shadow-xl p-8 md:p-12 border border-primary-200 dark:border-neutral-800 animate-fade-in">
      {/* Título llamativo */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
          Generador de Ideas Infinitas
        </h1>
        <SparklesIcon size={36} className="text-primary-600 dark:text-primary-400" />
      </div>

      {/* Descripción breve */}
      <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
        Ingresa un tipo de negocio y deja que la inteligencia artificial genere ideas creativas e
        innovadoras para ti. ¡Descubre nuevas oportunidades!
      </p>

      {/* Formulario */}
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="businessType"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Tipo de Negocio
          </label>
          <input
            id="businessType"
            type="text"
            value={businessType}
            onChange={(e) => onBusinessTypeChange(e.target.value)}
            placeholder={PLACEHOLDERS.BUSINESS_TYPE}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500"
            disabled={isLoading}
            required
          />
        </div>

        {/* Botón con micro-interacciones */}
        <button
          type="submit"
          disabled={isLoading || !businessType.trim()}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-500 dark:to-accent-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generando ideas...
            </>
          ) : (
            <>
              <SparklesIcon size={20} />
              Generar Ideas
            </>
          )}
        </button>
      </form>
    </div>
  );
}
