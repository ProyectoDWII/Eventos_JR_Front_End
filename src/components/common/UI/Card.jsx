import React from 'react';

/**
 * Reusable Card Component with header, body and footer slots
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.title] - Card header title text or node
 * @param {React.ReactNode} [props.subtitle] - Card header subtitle text or node
 * @param {React.ReactNode} [props.headerExtra] - Extra content on the right side of the header
 * @param {React.ReactNode} [props.footer] - Card footer content
 * @param {boolean} [props.hoverable=false] - Enables hover translation and shadow enhancements
 * @param {React.ReactNode} props.children - Card body content (main slot)
 * @param {string} [props.className=''] - Additional Tailwind classes for container
 */
export default function Card({
  title,
  subtitle,
  headerExtra,
  footer,
  hoverable = false,
  children,
  className = '',
  ...props
}) {
  const hasHeader = title || subtitle || headerExtra;

  return (
    <div
      className={`rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-lg transition-all duration-300 ${
        hoverable
          ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-zinc-300 dark:hover:border-zinc-700/80'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Card Header */}
      {hasHeader && (
        <div className="px-6 py-4 border-b border-zinc-150/40 dark:border-zinc-800/40 flex items-center justify-between gap-4">
          <div className="min-w-0">
            {title && (
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 truncate">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-zinc-400 dark:text-zinc-550 truncate mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          {headerExtra && <div className="flex-shrink-0">{headerExtra}</div>}
        </div>
      )}

      {/* Card Body */}
      <div className="p-6">{children}</div>

      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 border-t border-zinc-150/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-950/20 rounded-b-2xl">
          {footer}
        </div>
      )}
    </div>
  );
}
