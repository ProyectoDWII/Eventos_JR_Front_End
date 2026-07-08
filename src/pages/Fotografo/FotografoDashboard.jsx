import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import adminService from '../../services/adminService';

/**
 * FotografoDashboard - Panel principal para fotógrafos/administradores
 */
export default function FotografoDashboard() {
  const { state } = useAuth();
  const userName = state.user?.name || 'Fotógrafo';
  const userEmail = state.user?.email || '';

  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await adminService.getAll();
        const usersList = response.data || response || [];
        setUserCount(usersList.length);
      } catch (err) {
        console.error('Error cargando total de usuarios:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-indigo-950 rounded-3xl p-6 md:p-8 text-white shadow-xl border border-zinc-850 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wide uppercase border border-white/10">
            Administrador de Eventos JR
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mt-2">
            ¡Hola, {userName}!
          </h1>
          <p className="text-sm text-zinc-300 font-medium leading-relaxed">
            Bienvenido a tu panel unificado de control. Como administrador y fotógrafo principal, tienes acceso completo al registro de usuarios de MongoDB y a la gestión del portafolio.
          </p>
          <div className="pt-2 text-xs text-indigo-400 font-mono">
            Administrador activo: <span className="underline text-zinc-300">{userEmail}</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Total Users (Dynamic) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
            Usuarios Registrados
          </span>
          <div className="my-4">
            {loading ? (
              <div className="w-6 h-6 rounded-full border-2 border-indigo-600/20 border-t-indigo-600 animate-spin" />
            ) : (
              <span className="text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                {userCount}
              </span>
            )}
          </div>
          <Link
            to="/admin/usuarios"
            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Administrar usuarios →
          </Link>
        </div>

        {/* Metric 2: Solicitudes (Simulado - No API) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
            Solicitudes Pendientes
          </span>
          <div className="my-4">
            <span className="text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              12
            </span>
          </div>
          <Link
            to="/fotografo/solicitudes"
            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Revisar solicitudes →
          </Link>
        </div>

        {/* Metric 3: Servicios Catálogo (Simulado - No API) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
            Servicios Catálogo
          </span>
          <div className="my-4">
            <span className="text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              8
            </span>
          </div>
          <Link
            to="/fotografo/servicios"
            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Modificar catálogo →
          </Link>
        </div>

        {/* Metric 4: Paquetes Ofrecidos (Simulado - No API) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
            Paquetes Creados
          </span>
          <div className="my-4">
            <span className="text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              4
            </span>
          </div>
          <Link
            to="/fotografo/paquetes"
            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Ajustar paquetes →
          </Link>
        </div>

      </div>

      {/* Quick Tips */}
      <div className="p-5 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300 leading-relaxed flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 5.25v.008h.008v-.008H12ZM11.25 9h.008v.008h-.008V9Zm11.25 3A9.75 9.75 0 1 1 2.25 12a9.75 9.75 0 0 1 19.5 0Z" />
        </svg>
        <div>
          <span className="font-bold block mb-0.5">Nota de Integración:</span>
          Los contadores de solicitudes, servicios y paquetes muestran datos simulados porque el backend de Express aún no tiene desarrollados los endpoints HTTP para interactuar con dichas bases de datos. La lista de usuarios es 100% real y activa en MongoDB.
        </div>
      </div>

    </div>
  );
}
