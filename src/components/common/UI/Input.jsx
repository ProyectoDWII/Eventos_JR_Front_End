import React from 'react';

/**
 * Reusable Form Input Component
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text displayed above the input
 * @param {string} [props.error] - Error message displayed below the input (activates error styling)
 * @param {React.ReactNode} [props.icon] - Optional icon displayed inside the input at the start
 * @param {string} [props.className=''] - Additional class name for container styling
 * @param {string} [props.type='text'] - Input type (text, password, email, number, etc.)
 */
export default function Input({
  label,
  error,
  icon,
  className = '',
  type = 'text',
  id,
  required,
  disabled,
  ...props
}) {
  const inputId = id || props.name;

  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          type={type}
          disabled={disabled}
          required={required}
          className={`w-full text-sm rounded-xl border bg-white/50 dark:bg-zinc-950/50 outline-none transition-all duration-200 ${
            icon ? 'pl-10 pr-4' : 'px-4'
          } ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-zinc-200 dark:border-zinc-800 focus:border-primary focus:ring-1 focus:ring-primary'
          } ${
            disabled
              ? 'opacity-50 cursor-not-allowed bg-zinc-100 dark:bg-zinc-900'
              : 'py-2.5'
          }`}
          {...props}
        />
      </div>

      {error && (
        <span className="text-xs text-red-500 dark:text-red-400 font-semibold mt-0.5 animate-in fade-in duration-200">
          {error}
        </span>
      )}
    </div>
  );
}
