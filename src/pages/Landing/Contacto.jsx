import React, { useState } from 'react';
import AvisoPrivacidad from '../../components/common/Privacy/AvisoPrivacidad';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre completo es requerido.';
    }

    if (!email) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El formato del correo es inválido.';
    }

    if (!telefono.trim()) {
      newErrors.telefono = 'El teléfono de contacto es requerido.';
    } else if (!/^\d{10}$/.test(telefono.replace(/\s+/g, ''))) {
      newErrors.telefono = 'El teléfono debe contener 10 dígitos.';
    }

    if (!mensaje.trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío.';
    }

    // Critical block: check if privacy consent checkbox is checked
    if (!acceptedPrivacy) {
      newErrors.privacy = 'Debe aceptar el Aviso de Privacidad y consentir el tratamiento de sus datos para enviar el mensaje.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(true);
    // Simulate API call
    console.log('Mensaje enviado:', { nombre, email, telefono, mensaje, acceptedPrivacy });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wider uppercase">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-2 tracking-tight">
            Ponte en Contacto con Nosotros
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
            ¿Tienes dudas, deseas cotizar un evento especial o necesitas soporte? Escríbenos y nuestro equipo te atenderá a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Información de Contacto</h3>
              
              <div className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-650 dark:text-indigo-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-200">Correo Electrónico</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">contacto@eventosjr.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-655 dark:text-indigo-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.979 14.979 0 01-8.623-8.623l2.017-1.514c.362-.272.53-.733.418-1.173L11.563 3.97a1.09 1.09 0 00-1.091-.852H8.25A2.25 2.25 0 006 5.25v2.25z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-200">Teléfono</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">+52 (55) 1234 5678</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-655 dark:text-indigo-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-200">Horario de Atención</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 p-6 rounded-2xl text-white shadow-md">
              <h4 className="font-bold text-lg mb-2">Privacidad de sus Datos</h4>
              <p className="text-xs text-indigo-50 leading-relaxed">
                De conformidad con la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados/Particulares (LGPDPPSO), garantizamos que la información ingresada en este formulario de contacto está estrictamente resguardada y solo se utilizará para atender sus mensajes y cotizaciones.
              </p>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Banner de aviso inicial ANTES de introducir datos personales */}
            <div className="mb-6 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-4 text-xs text-indigo-800 dark:text-indigo-300 flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-650 dark:text-indigo-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <span className="font-bold">Protección de Datos Personales (LGPDPPSO):</span>
                <p className="mt-0.5 leading-relaxed text-zinc-650 dark:text-zinc-400">
                  Eventos JR protege su información. Por favor, lea nuestro aviso simplificado al final de la página y marque la casilla para habilitar el envío del mensaje.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-250 dark:border-emerald-900/50 rounded-2xl p-8 text-center shadow-sm">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mb-4 animate-bounce">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-sm text-emerald-755 dark:text-emerald-450 mt-2 leading-relaxed">
                  Gracias por escribirnos. Hemos registrado tu consentimiento conforme a la LGPDPPSO y nos comunicaremos contigo lo antes posible.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setNombre('');
                    setEmail('');
                    setTelefono('');
                    setMensaje('');
                    setAcceptedPrivacy(false);
                  }}
                  className="mt-6 px-6 py-2.5 bg-emerald-605 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Juan Pérez"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                        errors.nombre 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-zinc-250 dark:border-zinc-755 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.nombre && (
                      <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1">
                      Teléfono (10 dígitos)
                    </label>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="5512345678"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                        errors.telefono 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-zinc-250 dark:border-zinc-755 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.telefono && (
                      <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-zinc-250 dark:border-zinc-755 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-1">
                    Mensaje / Detalles del Evento
                  </label>
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribe tu mensaje o las especificaciones del evento que deseas planear..."
                    rows="4"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-155 resize-none ${
                      errors.mensaje 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-zinc-250 dark:border-zinc-755 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.mensaje && (
                    <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.mensaje}</p>
                  )}
                </div>

                {/* Privacy Notice Component */}
                <AvisoPrivacidad 
                  checked={acceptedPrivacy} 
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)} 
                  error={errors.privacy}
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 font-semibold text-white bg-indigo-600 hover:bg-indigo-750 rounded-xl transition duration-200 shadow-md shadow-indigo-650/10 hover:shadow-indigo-650/20 active:scale-98 cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
