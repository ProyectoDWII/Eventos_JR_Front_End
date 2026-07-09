import React from 'react';

/**
 * Reusable Status Alert Component
 *
 * @param {Object} props
 * @param {'success'|'error'|'warning'|'info'} [props.type='info'] - Status type of alert
 * @param {string} [props.title] - Bold title above the alert message
 * @param {React.ReactNode} props.message - Main message inside the alert
 * @param {function} [props.onClose] - Close click handler (renders close icon on right)
 * @param {string} [props.className=''] - Additional Tailwind classes for container
 */
export default function Alert({
  type = 'info',
  title,
  message,
  onClose,
  className = '',
  ...props
}) {
  // Styles definitions per type
  const typeStyles = {
    success: {
      container:
        'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-400',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    error: {
      container:
        'bg-red-500/10 border-red-500/20 text-red-800 dark:text-red-400',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    warning: {
      container:
        'bg-amber-500/10 border-amber-500/20 text-amber-800 dark:text-amber-400',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    info: {
      container:
        'bg-sky-500/10 border-sky-500/20 text-sky-800 dark:text-sky-400',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      ),
    },
  };

  const currentStyle = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border text-sm transition-all duration-300 ${
        currentStyle.container
      } ${className}`}
      {...props}
    >
      {/* Type-specific Icon */}
      {currentStyle.icon}

      {/* Message Area */}
      <div className="flex-1 min-w-0 pr-4">
        {title && (
          <h4 className="font-bold tracking-tight mb-1 text-sm">{title}</h4>
        )}
        <div className="text-xs leading-relaxed opacity-90">{message}</div>
      </div>

      {/* Optional Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-0.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 opacity-70 hover:opacity-100 transition-all cursor-pointer"
          aria-label="Cerrar alerta"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
