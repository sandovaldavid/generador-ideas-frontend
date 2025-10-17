import { useState } from "react";
import type { Idea } from "../types";
import { copyToClipboard } from "../utils/helpers";
import { LightbulbIcon } from "./icons";

interface IdeaCardProps {
  idea: Idea;
  index: number;
}

export default function IdeaCard({ idea, index }: IdeaCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    const textToCopy = `${idea.title}\n${idea.description}${idea.category ? `\nCategoría: ${idea.category}` : ""}`;
    const success = await copyToClipboard(textToCopy);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-lg p-6 border border-primary-200 dark:border-neutral-800 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <LightbulbIcon
          size={28}
          className="text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1"
        />
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex-1">
          {idea.title}
        </h3>
      </div>

      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
        {idea.description}
      </p>

      <div className="flex items-center justify-between">
        {idea.category && (
          <div className="inline-block">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
              {idea.category}
            </span>
          </div>
        )}

        <button
          onClick={handleCopyToClipboard}
          className={`ml-auto px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
            copied
              ? "bg-success-100 dark:bg-success-900/80 text-success-700 dark:text-success-300"
              : "bg-primary-100 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800"
          }`}
        >
          {copied ? "¡Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );
}
