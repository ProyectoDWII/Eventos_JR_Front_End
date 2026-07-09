import React from 'react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-20 lg:py-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition duration-300"
    >
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-150 dark:border-indigo-900 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650 dark:bg-indigo-400 animate-pulse" />
          Planificación y Fotografía de Eventos
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl mx-auto leading-none">
          Hacemos de tus Momentos Especiales{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Recuerdos Eternos
          </span>
        </h1>

        <p className="text-zinc-500 dark:text-zinc-400 mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Coordinación profesional de bodas, quince años y eventos especiales.
          Fotografía artística de alta definición para capturar cada emoción.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleScrollTo('contacto')}
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-750 rounded-2xl transition duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 active:scale-95 cursor-pointer"
          >
            Cotizar Mi Evento
          </button>
          <button
            onClick={() => handleScrollTo('servicios')}
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            Ver Servicios
          </button>
        </div>
      </div>
    </section>
  );
}
