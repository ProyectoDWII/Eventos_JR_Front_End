import React from 'react';

export default function ServiciosDestacados() {
  const servicios = [
    {
      id: 1,
      titulo: 'Fotografía Profesional',
      descripcion: 'Sesiones artísticas, cobertura completa durante el evento, edición digital y entrega en alta definición.',
      detalles: ['Sesión previa al evento', 'Galería digital privada', 'Álbum impreso premium'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Organización Integral',
      descripcion: 'Planeación de principio a fin, coordinación de proveedores, logística, decoración y dirección el día del evento.',
      detalles: ['Asesoría de diseño', 'Gestión de locación', 'Cronograma minuto a minuto'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Catering & Banquetería',
      descripcion: 'Menús personalizados, postres de alta repostería y servicios de coctelería adaptados a tu presupuesto.',
      detalles: ['Degustación previa', 'Opciones vegetarianas/veganas', 'Servicio de meseros calificados'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697-.056-4.024-.166C6.845 7.96 6 7.005 6 5.912V4.5h12v1.413c0 1.092-.845 2.048-1.977 2.172A38.62 38.62 0 0112 8.25zM12 15.75V21m-3.75-3.75h7.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wider uppercase">Nuestros Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-2 tracking-tight">
            Especialistas en Eventos Inolvidables
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
            Te ofrecemos soluciones a la medida para que disfrutes de tu gran día sin preocupaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 hover:border-indigo-500/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{servicio.titulo}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">{servicio.descripcion}</p>
              
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-4" />
              
              <ul className="space-y-2">
                {servicio.detalles.map((detalle, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-650 dark:text-zinc-400">
                    <svg className="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {detalle}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
