import React from 'react';

/**
 * Reusable Dropdown Selector Component
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text displayed above the select field
 * @param {Array<{value: string|number, label: string}>} props.options - Option items list
 * @param {string|number} props.value - Selected value
 * @param {function} props.onChange - Select change handler
 * @param {string} [props.error] - Error message displayed below (activates red warning borders)
 * @param {boolean} [props.disabled=false] - Disables interactions
 * @param {boolean} [props.required=false] - Appends red asterisk to the label
 * @param {string} [props.className=''] - Additional Tailwind classes for container
 */
export default function Select({
  label,
  options = [],
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  id,
  ...props
}) {
  const selectId = id || props.name;

  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`w-full text-sm rounded-xl border bg-white/50 dark:bg-zinc-950/50 outline-none transition-all duration-200 px-4 py-2.5 appearance-none pr-10 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-zinc-200 dark:border-zinc-800 focus:border-primary focus:ring-1 focus:ring-primary'
          } ${
            disabled
              ? 'opacity-50 cursor-not-allowed bg-zinc-100 dark:bg-zinc-900'
              : 'cursor-pointer'
          }`}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50"
            >
              {opt.label || opt.value}
            </option>
          ))}
        </select>

        {/* Custom Chevron Indicator overlay */}
        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      {error && (
        <span className="text-xs text-red-500 dark:text-red-400 font-semibold mt-0.5 animate-in fade-in duration-200">
          {error}
        </span>
      )}
    </div>
  );
}
