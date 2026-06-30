import React from 'react';
import Spinner from './Spinner';

/**
 * Reusable Custom Button Component
 * 
 * @param {Object} props
 * @param {'primary'|'secondary'|'danger'|'outline'|'link'} [props.variant='primary'] - Visual style variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.loading=false] - Shows loading spinner and disables click
 * @param {boolean} [props.disabled=false] - Disables interaction and fades button
 * @param {'button'|'submit'|'reset'} [props.type='button'] - HTML button type
 * @param {React.ReactNode} [props.icon] - Optional icon component to show before text
 * @param {React.ReactNode} props.children - Button label or contents
 * @param {function} [props.onClick] - Click event handler
 * @param {string} [props.className=''] - Additional Tailwind classes
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  type = 'button',
  icon,
  children,
  onClick,
  className = '',
  ...props
}) {
  // Variant styles mapping
  const variantStyles = {
    primary: 'bg-primary hover:opacity-95 active:scale-[0.98] text-white shadow-md shadow-primary/10',
    secondary: 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 active:scale-[0.98] text-zinc-800 dark:text-zinc-200',
    danger: 'bg-red-600 hover:bg-red-750 active:scale-[0.98] text-white shadow-md shadow-red-500/10',
    outline: 'border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 active:scale-[0.98] text-zinc-700 dark:text-zinc-300',
    link: 'text-primary hover:underline p-0 h-auto bg-transparent border-transparent shadow-none'
  };

  // Size styles mapping
  const sizeStyles = {
    sm: 'h-8 px-3 rounded-lg text-xs gap-1.5',
    md: 'h-10 px-4 rounded-xl text-sm font-semibold gap-2',
    lg: 'h-12 px-6 rounded-2xl text-base font-bold gap-2.5'
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all duration-200 outline-none select-none ${
        variantStyles[variant]
      } ${
        variant === 'link' ? '' : sizeStyles[size]
      } ${
        isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
      } ${className}`}
      {...props}
    >
      {loading && (
        <Spinner
          size="sm"
          color={variant === 'primary' || variant === 'danger' ? 'white' : 'primary'}
        />
      )}
      {!loading && icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
