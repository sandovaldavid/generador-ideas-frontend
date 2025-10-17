import type { Idea } from "../types";
import { MESSAGES } from "../config/constants";
import { AlertIcon, TargetIcon, LightbulbIcon } from "./icons";
import IdeaCard from "./IdeaCard";

interface IdeasDisplayProps {
  ideas: Idea[];
  isLoading: boolean;
  error: string | null;
}

export default function IdeasDisplay({ ideas, isLoading, error }: IdeasDisplayProps) {
  // Estado de Carga
  if (isLoading) {
    return (
      <div className="mt-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-xl p-12 border border-primary-200 dark:border-neutral-800 animate-fade-in">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <LightbulbIcon size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
            {MESSAGES.LOADING}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">{MESSAGES.LOADING_SUBTITLE}</p>
        </div>
      </div>
    );
  }

  // Estado de Error
  if (error) {
    return (
      <div className="mt-8 bg-error-50 dark:bg-error-900/20 rounded-2xl shadow-xl p-8 border border-error-200 dark:border-error-800 animate-fade-in">
        <div className="flex items-start space-x-4">
          <AlertIcon size={40} className="text-error-600 dark:text-error-400 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-error-800 dark:text-error-200 mb-2">
              {MESSAGES.ERROR_TITLE}
            </h3>
            <p className="text-error-600 dark:text-error-300">{error}</p>
            <p className="text-error-500 dark:text-error-400 text-sm mt-2">
              {MESSAGES.ERROR_RETRY}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Estado de Éxito (sin ideas aún)
  if (ideas.length === 0) {
    return null;
  }

  // Estado de Éxito (con ideas)
  return (
    <div className="mt-8 animate-fade-in">
      <div className="flex items-center justify-center mb-6 gap-2">
        <TargetIcon className="text-primary" size={36} />
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 text-center">
          {MESSAGES.SUCCESS_TITLE}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ideas.map((idea, index) => (
          <IdeaCard key={idea.id || index} idea={idea} index={index} />
        ))}
      </div>
    </div>
  );
}
