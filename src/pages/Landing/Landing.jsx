import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6 font-sans text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <div className="max-w-md w-full text-center p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 shadow-xl relative overflow-hidden">
        {/* Abstract glow circle in the card */}
        <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Camera/Logo Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          ¡Bienvenido a Eventos JR!
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm leading-relaxed">
          Tu plataforma favorita para capturar y gestionar momentos memorables.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/login" className="w-full h-11 rounded-lg text-sm font-semibold bg-primary hover:opacity-90 text-white shadow-md shadow-primary/20 flex items-center justify-center transition-all">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="w-full h-11 rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}
