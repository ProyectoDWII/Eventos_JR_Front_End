import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

/**
 * Modern, Minimalist and Responsive Login Page with dynamic glows.
 */
export default function Login() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6 py-12 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic backdrop glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl relative z-10 transition-all duration-300 hover:shadow-indigo-500/5">
        
        {/* Title */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 justify-center group">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-650 to-cyan-500 bg-clip-text text-transparent">
              Eventos JR
            </span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Ingresa a tu cuenta</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Completa los datos para acceder al panel de control</p>
        </div>

        {/* LoginForm component with privacy consent */}
        <LoginForm />

        {/* Footer info inside card */}
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-6">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-indigo-650 dark:text-indigo-400 font-semibold hover:underline">
            Regístrate ahora
          </Link>
        </p>
      </div>
    </div>
  );
}
