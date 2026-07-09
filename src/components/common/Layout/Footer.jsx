import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Premium and Responsive Footer Component with privacy compliance
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand & Info */}
          <div className="space-y-4">
            <div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Eventos JR
              </span>
              <p className="text-xs text-zinc-400 mt-1 dark:text-zinc-500">
                Tu socio en la captura y organización de los momentos más
                especiales.
              </p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Organización integral de eventos y servicios de fotografía
              profesional con altos estándares de calidad y protección de datos.
            </p>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-150 uppercase tracking-wider">
              Enlaces Útiles
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollTo('hero')}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('servicios')}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('contacto')}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Privacy */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-150 uppercase tracking-wider">
              Legal y Privacidad
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aviso-privacidad"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline transition-colors duration-150"
                >
                  Aviso de Privacidad Integral
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
                >
                  Términos de Servicio
                </a>
              </li>
              <li className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs pt-1 border-t border-zinc-100 dark:border-zinc-900">
                Garantizamos la protección y confidencialidad de tus datos de
                conformidad con la <strong>LGPDPPSO</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-zinc-200/50 dark:border-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <p>&copy; {currentYear} Eventos JR. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href="mailto:soporte@eventosjr.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
            >
              Soporte
            </a>
            <span>•</span>
            <span>Seguridad SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
