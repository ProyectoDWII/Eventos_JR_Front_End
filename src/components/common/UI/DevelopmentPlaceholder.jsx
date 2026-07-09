import React from 'react';

/**
 * DevelopmentPlaceholder - Componente visual premium para mostrar módulos
 * que están actualmente bajo desarrollo debido a la falta de endpoints en el backend.
 *
 * @param {Object} props
 * @param {string} props.title - Nombre del módulo
 * @param {string} props.description - Explicación de la funcionalidad futura
 * @param {Array<string>} props.requiredEndpoints - Lista de endpoints HTTP requeridos
 */
export default function DevelopmentPlaceholder({
  title,
  description,
  requiredEndpoints = [],
}) {
  return (
    <div className="flex-1 flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        {/* Decorative background blur gradient */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left column: Icon Animation */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 animate-spin [animation-duration:15s]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13-1.41.513M5.105 6.543l-1.41-.513m14.095 5.13 1.41.513M9.18 4.5l.513 1.41m4.615 12.18-.513-1.41M12 18.75V21m-4.5-2.25L9 18M15 18l1.5.75"
              />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-cyan-500 text-white flex items-center justify-center shadow-md animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A9.379 9.379 0 0 0 21 16.14l-5.83-5.83m0 0a3 3 0 1 0-4.24-4.24 3 3 0 0 0 4.24 4.24Z"
              />
            </svg>
          </div>
        </div>

        {/* Right column: Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30 inline-block">
              Módulo en Desarrollo
            </span>
            <h2 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-50 mt-2 tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          {requiredEndpoints.length > 0 && (
            <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl p-4 border border-zinc-150 dark:border-zinc-800/60 text-left">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                Requisitos de Backend (Faltantes en la API):
              </span>
              <ul className="space-y-1.5">
                {requiredEndpoints.map((endpoint, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-350"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <code className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20 px-1.5 py-0.5 rounded">
                      {endpoint}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-xs text-zinc-450 dark:text-zinc-500 flex items-center justify-center md:justify-start gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            <span>
              Lógica y Modelo Mongoose listos. Esperando integración de rutas
              Express.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
