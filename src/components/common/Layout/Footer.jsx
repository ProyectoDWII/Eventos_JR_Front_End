import React from 'react';

/**
 * Minimalist and Responsive Footer Component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Eventos JR
          </span>
          <p className="text-xs text-zinc-400 mt-1">
            &copy; {currentYear} Eventos JR. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Términos de Servicio
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Privacidad
          </a>
          <a href="mailto:soporte@eventosjr.com" className="hover:text-primary transition-colors duration-200">
            Soporte
          </a>
        </div>
      </div>
    </footer>
  );
}
