import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import adminService from '../../services/adminService';

/**
 * UsuariosPage - Panel de administración para el CRUD y control de usuarios
 * Conectado directamente a la API real del backend.
 */
export default function UsuariosPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar usuarios al montar la vista
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await adminService.getAll();
      if (response.success && response.data) {
        setUsers(response.data);
      } else {
        setUsers(response || []);
      }
    } catch (err) {
      console.error('Error cargando usuarios:', err);
      setError('No se pudo conectar con el servidor para obtener la lista de usuarios.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Mostrar mensaje de éxito temporal
  const triggerSuccessFeedback = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  // Alternar Rol de Usuario (client <-> admin)
  const handleToggleRole = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'client' : 'admin';
    try {
      const response = await adminService.updateRole(userId, newRole);
      if (response.success) {
        triggerSuccessFeedback('Rol de usuario actualizado con éxito.');
        loadUsers(); // Recargar datos
      }
    } catch (err) {
      console.error('Error al cambiar rol:', err);
      setError(err.response?.data?.message || 'Error al intentar actualizar el rol.');
    }
  };

  // Suspender / Desactivar cuenta (Soft Delete)
  const handleSuspendUser = async (userId) => {
    if (!window.confirm('¿Está seguro de que desea suspender esta cuenta de usuario? El usuario no podrá iniciar sesión.')) {
      return;
    }
    try {
      const response = await adminService.delete(userId);
      if (response.success) {
        triggerSuccessFeedback('Usuario suspendido (baja lógica) correctamente.');
        loadUsers();
      }
    } catch (err) {
      console.error('Error al suspender usuario:', err);
      setError(err.response?.data?.message || 'No se pudo suspender la cuenta del usuario.');
    }
  };

  // Restaurar cuenta desactivada
  const handleRestoreUser = async (userId) => {
    try {
      const response = await adminService.restore(userId);
      if (response.success) {
        triggerSuccessFeedback('Usuario restaurado y reactivado con éxito.');
        loadUsers();
      }
    } catch (err) {
      console.error('Error al restaurar usuario:', err);
      setError(err.response?.data?.message || 'No se pudo reactivar la cuenta del usuario.');
    }
  };

  const sanitizedSearchTerm = DOMPurify.sanitize(searchTerm);

  const filteredUsers = users.filter((user) => {
    const term = sanitizedSearchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      user.name?.toLowerCase().includes(term) || 
      user.email?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Gestión de Usuarios
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Administra los roles, suspensiones lógicas (LGPDPPSO) y cuentas de clientes y fotógrafos.
          </p>
        </div>
        <button
          onClick={loadUsers}
          className="px-4 py-2 text-xs font-bold text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-50 dark:text-zinc-200 dark:hover:text-white dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-xl transition duration-150 shadow-sm flex items-center gap-2 cursor-pointer self-start"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Actualizar Lista
        </button>
      </div>

      {/* Notifications and Feedback */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-xs text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-2 animate-in slide-in-from-top-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          {successMsg}
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-xs text-red-700 dark:text-red-400 font-semibold flex items-center justify-between gap-2 animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            {error}
          </div>
          <button onClick={() => setError(null)} className="font-bold uppercase text-[10px] tracking-wider text-red-500 hover:text-red-700 cursor-pointer">
            Descartar
          </button>
        </div>
      )}

      {/* Main Table / List Container */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Search Bar with XSS Sanitization */}
        <div className="p-5 border-b border-zinc-150 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre o correo..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-150"
            />
            <span className="absolute left-3.5 top-2.5 text-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
              </svg>
            </span>
          </div>
          {searchTerm && (
            <div className="text-xs text-zinc-500 dark:text-zinc-450 leading-none">
              Búsqueda sanitizada (XSS): <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{sanitizedSearchTerm}</span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-600/20 border-t-indigo-650 animate-spin" />
            <span className="text-xs text-zinc-400 font-semibold">Consultando base de datos MongoDB...</span>
          </div>
        ) : users.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">No se encontraron usuarios</h3>
            <p className="text-xs text-zinc-500">No existen cuentas registradas en la base de datos de MongoDB.</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Sin coincidencias</h3>
            <p className="text-xs text-zinc-500">No se encontraron usuarios que coincidan con la búsqueda.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-100 dark:border-zinc-800/60">
                  <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Usuario</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Contacto</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Rol</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Estado</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {filteredUsers.map((user) => {
                  const displayRole = user.role === 'admin' ? 'Fotógrafo / Admin' : 'Cliente';
                  const isDeleted = user.deletedAt !== null || user.status === 'inactive';
                  
                  return (
                    <tr 
                      key={user._id} 
                      className={`hover:bg-zinc-50/50 dark:hover:bg-zinc-850/20 transition-colors ${
                        isDeleted ? 'opacity-60 bg-zinc-50/20 dark:bg-zinc-950/10' : ''
                      }`}
                    >
                      {/* Name & Avatar */}
                      <td className="px-6 py-4.5">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full font-black text-xs flex items-center justify-center shrink-0 shadow-sm ${
                            user.role === 'admin' 
                              ? 'bg-gradient-to-tr from-indigo-650 to-indigo-500 text-white' 
                              : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
                          }`}>
                            {user.name?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50 block">
                              {user.name}
                            </span>
                            <span className="text-[10px] text-zinc-400 font-medium font-mono">
                              ID: {user._id}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Email & Phone */}
                      <td className="px-6 py-4.5">
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block">
                          {user.email}
                        </span>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">
                          Tel: {user.phoneNumber || 'No provisto'}
                        </span>
                      </td>

                      {/* Role Badge */}
                      <td className="px-6 py-4.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                          user.role === 'admin'
                            ? 'bg-indigo-50/70 border-indigo-200/50 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900/40 dark:text-indigo-400'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-850 dark:border-zinc-800 dark:text-zinc-350'
                        }`}>
                          {displayRole}
                        </span>
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4.5">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          isDeleted
                            ? 'bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
                        }`}>
                          <span className={`w-1 h-1 rounded-full ${isDeleted ? 'bg-red-500' : 'bg-emerald-500'}`} />
                          {isDeleted ? 'Suspendido' : 'Activo'}
                        </span>
                      </td>

                      {/* Action Buttons */}
                      <td className="px-6 py-4.5 text-right space-x-2">
                        {/* Toggle Role Button */}
                        <button
                          onClick={() => handleToggleRole(user._id, user.role)}
                          className="px-2.5 py-1.5 text-[10px] font-bold text-indigo-600 hover:text-white hover:bg-indigo-600 dark:text-indigo-400 dark:hover:text-white dark:hover:bg-indigo-600 border border-indigo-200 dark:border-indigo-900/60 rounded-lg transition duration-150 cursor-pointer inline-flex items-center gap-1"
                          title="Alternar rol del usuario"
                        >
                          Cambiar Rol
                        </button>

                        {/* Suspend / Restore Button */}
                        {isDeleted ? (
                          <button
                            onClick={() => handleRestoreUser(user._id)}
                            className="px-2.5 py-1.5 text-[10px] font-bold text-emerald-600 hover:text-white hover:bg-emerald-600 dark:text-emerald-405 dark:hover:text-white dark:hover:bg-emerald-600 border border-emerald-200 dark:border-emerald-900/60 rounded-lg transition duration-150 cursor-pointer inline-flex items-center gap-1"
                            title="Reactivar la cuenta"
                          >
                            Reactivar
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSuspendUser(user._id)}
                            className="px-2.5 py-1.5 text-[10px] font-bold text-red-600 hover:text-white hover:bg-red-650 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-600 border border-red-200 dark:border-red-900/60 rounded-lg transition duration-150 cursor-pointer inline-flex items-center gap-1"
                            title="Suspender cuenta"
                          >
                            Suspender
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
