import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

/**
 * ClienteDashboard - Panel principal para clientes
 */
export default function ClienteDashboard() {
  const { state } = useAuth();
  const userName = state.user?.name || 'Cliente';
  const userEmail = state.user?.email || '';

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-750 to-indigo-850 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wide uppercase">
            Portal de Cliente
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mt-2">
            ¡Hola, {userName}!
          </h1>
          <p className="text-sm text-indigo-100 font-medium leading-relaxed">
            Te damos la bienvenida a tu centro de control en Eventos JR. Aquí podrás cotizar coberturas, personalizar paquetes fotográficos y llevar el control total de los contratos de tus eventos especiales.
          </p>
          <div className="pt-2 text-xs text-indigo-200 font-mono">
            Sesión activa: <span className="underline">{userEmail}</span>
          </div>
        </div>
      </div>

      {/* Shortcuts / Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Action 1: Catálogo */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 8.38a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Ver Servicios</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Explora las especialidades de cobertura, fotografía digital, catering e iluminación para tu fiesta.
            </p>
          </div>
          <Link
            to="/cliente/servicios"
            className="mt-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline cursor-pointer"
          >
            Ir al catálogo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Action 2: Personalizar */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A9.379 9.379 0 0 0 21 16.14l-5.83-5.83m0 0a3 3 0 1 0-4.24-4.24 3 3 0 0 0 4.24 4.24Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Armar Paquete</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Personaliza las horas de cobertura fotográfica, número de copias impresas y extras del contrato.
            </p>
          </div>
          <Link
            to="/cliente/personalizar"
            className="mt-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline cursor-pointer"
          >
            Personalizar ahora
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Action 3: Reservas */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Mis Solicitudes</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Consulta el estado de aprobación de tu evento o ve tus contratos firmados digitalmente.
            </p>
          </div>
          <Link
            to="/cliente/mis-solicitudes"
            className="mt-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline cursor-pointer"
          >
            Ver mis reservas
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>

    </div>
  );
}
