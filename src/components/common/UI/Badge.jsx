import React from 'react';

/**
 * Reusable Status Badge Component
 * 
 * @param {Object} props
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'gray'} [props.variant='primary'] - Color status variant
 * @param {'sm'|'md'} [props.size='md'] - Height and padding sizing
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.className=''] - Additional Tailwind classes for container
 */
export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  // Styles definitions per variant
  const variantStyles = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
    danger: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/25',
    warning: 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/25',
    info: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/25',
    gray: 'bg-zinc-500/10 text-zinc-650 dark:text-zinc-400 border-zinc-500/25'
  };

  // Sizing definitions
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px] tracking-wide',
    md: 'px-2.5 py-0.5 text-xs tracking-wide'
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-bold rounded-full border transition-all duration-200 ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
