interface LoaderProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dots" | "pulse";
  message?: string;
  className?: string;
}

export default function Loader({
  size = "md",
  variant = "default",
  message,
  className = "",
}: LoaderProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const renderSpinner = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce"></div>
          </div>
        );

      case "pulse":
        return (
          <div className="relative">
            <div
              className={`${sizeClasses[size]} rounded-full bg-primary-600 dark:bg-primary-400 animate-pulse`}
            ></div>
            <div
              className={`${sizeClasses[size]} rounded-full bg-primary-400 dark:bg-primary-300 animate-ping absolute top-0 left-0`}
            ></div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <div
              className={`${sizeClasses[size]} border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin`}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
              💡
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {renderSpinner()}
      {message && (
        <p className="text-neutral-600 dark:text-neutral-300 text-center animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}
