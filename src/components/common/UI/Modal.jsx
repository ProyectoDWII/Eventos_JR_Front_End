import React, { useEffect } from 'react';

/**
 * Reusable Overlay Modal Component
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Dictates visibility of the modal
 * @param {function} props.onClose - Triggers closing the modal
 * @param {React.ReactNode} [props.title] - Modal header title
 * @param {React.ReactNode} [props.footer] - Modal action buttons or footer
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Maximum width sizing
 * @param {boolean} [props.closeOnOverlay=true] - Clicking the backdrop overlay triggers onClose
 * @param {boolean} [props.closeOnEsc=true] - Hitting Escape key triggers onClose
 * @param {React.ReactNode} props.children - Modal content
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  footer,
  size = 'md',
  closeOnOverlay = true,
  closeOnEsc = true,
  children
}) {
  // Listen for ESC keypress to close modal
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  // Sizing definitions
  const sizeStyles = {
    sm: 'max-w-md w-full',
    md: 'max-w-lg w-full',
    lg: 'max-w-3xl w-full'
  };

  const handleOverlayClick = (e) => {
    if (closeOnOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className={`bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200 ${
          sizeStyles[size]
        }`}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-150/40 dark:border-zinc-800/40 flex items-center justify-between">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
            {title || 'Información'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content / Body */}
        <div className="flex-1 p-6 overflow-y-auto text-sm text-zinc-650 dark:text-zinc-305">
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-zinc-150/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-950/20 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
