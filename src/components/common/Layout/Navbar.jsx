import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';

/**
 * Responsive, Adaptive and Premium Navbar Component.
 * Integrates authentication state, theme toggling, dashboard toggles, and smooth home navigation.
 */
export default function Navbar({ onMenuToggle }) {
  const { state: authState, setState: setAuthState } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDashboard = location.pathname.startsWith('/cliente') || 
                      location.pathname.startsWith('/fotografo') || 
                      location.pathname.startsWith('/admin');

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    setProfileOpen(false);
    navigate('/');
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Helper to get active page title in dashboard
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'Panel General';
    if (path.includes('/solicitudes')) return 'Solicitudes';
    if (path.includes('/paquetes')) return 'Paquetes';
    if (path.includes('/servicios')) return 'Servicios';
    if (path.includes('/usuarios')) return 'Gestión de Usuarios';
    if (path.includes('/reportes')) return 'Reportes y Métricas';
    if (path.includes('/personalizar')) return 'Personalizar Evento';
    if (path.includes('/solicitar')) return 'Solicitar Cobertura';
    return 'Eventos JR';
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'fotografo':
        return 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20';
      default:
        return 'bg-indigo-500/10 text-indigo-550 border border-indigo-500/20';
    }
  };

  const getRoleLabel = (role) => {
    if (role === 'admin') return 'Admin';
    if (role === 'fotografo') return 'Fotógrafo';
    return 'Cliente';
  };

  const userInitials = authState?.user?.name
    ? authState.user.name.substring(0, 2).toUpperCase()
    : 'U';

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 h-16">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger button (visible on dashboard in mobile only) */}
          {isDashboard && (
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Abrir Menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          )}

          {/* Hamburger button (visible on public in mobile only) */}
          {!isDashboard && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Abrir Menú de Navegación"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75h14.5M4.75 12h14.5m-14.5 5.25h14.5" />
              </svg>
            </button>
          )}

          {/* Logo or Title */}
          {!isDashboard ? (
            <Link to="/" className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                JR
              </span>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-350 bg-clip-text text-transparent group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-250">
                Eventos JR
              </span>
            </Link>
          ) : (
            <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {getPageTitle()}
            </h1>
          )}
        </div>

        {/* Center / Navigation Links (Public View only) */}
        {!isDashboard && (
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <button onClick={() => handleNavClick('hero')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Inicio</button>
            <button onClick={() => handleNavClick('servicios')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Servicios</button>
            <button onClick={() => handleNavClick('testimonios')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Testimonios</button>
            <button onClick={() => handleNavClick('contacto')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Contacto</button>
          </div>
        )}

        {/* Right Section / Actions */}
        <div className="flex items-center gap-4">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Alternar Tema"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          {/* User Profile or Auth Buttons */}
          {authState?.isAuthenticated ? (
            <div className="relative">
              {/* Profile Button */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-650 to-cyan-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {userInitials}
                </div>
                <span className="hidden sm:block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {authState.user?.name}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-zinc-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)}></div>
                  
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-2 shadow-2xl z-20 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2.5 border-b border-zinc-100 dark:border-zinc-800/60">
                      <p className="text-xs font-semibold text-zinc-400">Sesión iniciada</p>
                      <p className="text-sm font-bold truncate mt-0.5">{authState.user?.name}</p>
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5 ${getRoleBadgeClass(authState.user?.role)}`}>
                        {getRoleLabel(authState.user?.role)}
                      </span>
                    </div>
                    <div className="pt-2">
                      {!isDashboard && (
                        <Link
                          to={`/${authState.user?.role}/dashboard`}
                          onClick={() => setProfileOpen(false)}
                          className="flex w-full items-center px-3 py-2 text-xs font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                        >
                          Ir a mi Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-3 py-2 text-xs font-semibold text-red-500 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 transition-colors duration-200"
              >
                Ingresar
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 transition-all shadow-md shadow-indigo-650/10"
              >
                Registrarse
              </Link>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu (Public View only) */}
      {!isDashboard && mobileMenuOpen && (
        <>
          <div className="fixed inset-0 top-16 z-30 bg-zinc-950/20 dark:bg-zinc-950/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute top-16 left-0 right-0 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 p-4 space-y-2 animate-in slide-in-from-top duration-200">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="block w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-zinc-700 hover:text-indigo-650 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:bg-zinc-900 transition"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavClick('servicios')} 
              className="block w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-zinc-700 hover:text-indigo-650 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:bg-zinc-900 transition"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleNavClick('testimonios')} 
              className="block w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-zinc-700 hover:text-indigo-650 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:bg-zinc-900 transition"
            >
              Testimonios
            </button>
            <button 
              onClick={() => handleNavClick('contacto')} 
              className="block w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-zinc-700 hover:text-indigo-650 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:bg-zinc-900 transition"
            >
              Contacto
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
