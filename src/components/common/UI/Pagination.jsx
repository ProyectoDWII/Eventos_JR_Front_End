import React from 'react';

/**
 * Reusable Data Pagination Navigation Component
 * 
 * @param {Object} props
 * @param {number} props.currentPage - Current active page number (1-indexed)
 * @param {number} props.totalPages - Total quantity of pages
 * @param {function} props.onPageChange - Handler fired when clicking a page button
 * @param {number} [props.maxVisiblePages=5] - Maximum visible numerical page buttons window
 * @param {string} [props.className=''] - Additional Tailwind classes for container
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  className = '',
  ...props
}) {
  if (totalPages <= 1) return null;

  // Calculates which page numbers to render
  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    const showLeftEllipsis = start > 2;
    const showRightEllipsis = end < totalPages - 1;

    // Always include page 1 at start if window starts later
    if (start > 1) {
      pages.push(1);
      if (showLeftEllipsis) pages.push('...');
    }

    for (let i = Math.max(1, start); i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Always include last page at end if window ends earlier
    if (end < totalPages) {
      if (showRightEllipsis) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className={`flex items-center justify-center gap-1.5 py-4 ${className}`}
      aria-label="Paginación de resultados"
      {...props}
    >
      {/* Previous Page Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 disabled:opacity-40 disabled:pointer-events-none transition-colors duration-200 cursor-pointer"
        aria-label="Página anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-zinc-600 dark:text-zinc-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Pages list */}
      <div className="flex items-center gap-1.5">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-9 h-9 flex items-center justify-center text-sm font-semibold text-zinc-400 select-none"
              >
                &bull;&bull;&bull;
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={`page-${page}`}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={isActive ? 'page' : undefined}
              className={`w-9 h-9 rounded-xl text-sm font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/10'
                  : 'border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 disabled:opacity-40 disabled:pointer-events-none transition-colors duration-200 cursor-pointer"
        aria-label="Página siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-zinc-600 dark:text-zinc-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </nav>
  );
}
