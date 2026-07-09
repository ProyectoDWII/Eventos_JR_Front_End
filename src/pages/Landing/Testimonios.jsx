import React from 'react';

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Mariana Silva',
      rol: 'Novia',
      comentario:
        'La cobertura fotográfica de nuestra boda fue simplemente perfecta. Capturaron cada momento especial con un detalle y sensibilidad increíbles. ¡Súper recomendados!',
      rating: 5,
    },
    {
      id: 2,
      nombre: 'Carlos Ortiz',
      rol: 'Director de Marketing corporativo',
      comentario:
        'Contratamos a Eventos JR para la planeación y catering de nuestro lanzamiento de marca. Todo salió excelente: la comida deliciosa, la puntualidad y la coordinación perfecta.',
      rating: 5,
    },
    {
      id: 3,
      nombre: 'Gabriela Méndez',
      rol: 'Madre de Quinceañera',
      comentario:
        'Organizar los quince años de mi hija parecía una tarea imposible hasta que los contratamos. La logística y la decoración superaron todas nuestras expectativas. ¡Muchas gracias!',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 transition duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wider uppercase">
            Opiniones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-2 tracking-tight">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
            La satisfacción de quienes confían en nosotros es nuestra mejor
            carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-650 dark:text-zinc-350 text-sm italic leading-relaxed mb-6">
                  "{testimonio.comentario}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-650 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonio.nombre.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                    {testimonio.nombre}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {testimonio.rol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
