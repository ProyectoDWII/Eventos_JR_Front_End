import React from 'react';

/**
 * Reusable Circular Progress Indicator (Spinner)
 * 
 * @param {Object} props
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md'] - Dimensions size of the spinner
 * @param {'primary'|'secondary'|'white'} [props.color='primary'] - Core theme coloring
 * @param {string} [props.className=''] - Additional Tailwind classes
 */
export default function Spinner({
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}) {
  // Sizing styles mapping
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  // Color styles mapping
  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white'
  };

  return (
    <svg
      className={`animate-spin ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
