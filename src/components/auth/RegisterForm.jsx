import React, { useState } from 'react';
import AvisoPrivacidad from '../common/Privacy/AvisoPrivacidad';

export default function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('cliente');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (!password) {
      newErrors.password = 'La contraseña es requerida.';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    // Critical block: check if privacy consent checkbox is checked
    if (!acceptedPrivacy) {
      newErrors.privacy = 'Debe aceptar el Aviso de Privacidad y consentir el tratamiento de sus datos para registrarse.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(true);
    // Simulate API call
    console.log('Registro exitoso:', { nombre, email, rol, acceptedPrivacy });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 p-8">
      {/* Banner de aviso inicial ANTES de introducir datos personales */}
      <div className="mb-6 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-4 text-xs text-indigo-800 dark:text-indigo-300 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-650 dark:text-indigo-400 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <div>
          <span className="font-bold">Protección de Datos Personales (LGPDPPSO):</span>
          <p className="mt-0.5 leading-relaxed text-zinc-650 dark:text-zinc-400">
            Eventos JR protege su información. Por favor, lea nuestro aviso simplificado al final de la página y marque la casilla para habilitar el registro.
          </p>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Crear Cuenta</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Regístrate para solicitar o proveer servicios</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-255 dark:border-emerald-900/50 rounded-2xl p-6 text-center shadow-sm">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">¡Registro Simulado con Éxito!</h3>
          <p className="text-sm text-emerald-755 dark:text-emerald-400 mt-2">
            Se ha creado la cuenta y registrado el consentimiento conforme a la LGPDPPSO.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setNombre('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              setAcceptedPrivacy(false);
            }}
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition"
          >
            Registrar otro usuario
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Juan Pérez"
              className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                errors.nombre 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
              }`}
            />
            {errors.nombre && (
              <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Tipo de Usuario (Rol)
            </label>
            <select
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-200 border-zinc-250 dark:border-zinc-750 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-150"
            >
              <option value="cliente">Cliente (Busco organizar mi evento)</option>
              <option value="fotografo">Fotógrafo (Quiero ofrecer mis servicios)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                errors.password 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
              }`}
            />
            {errors.password && (
              <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-550 focus:ring-2 focus:outline-none transition duration-150 ${
                errors.confirmPassword 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.confirmPassword}</p>
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
            Registrarse
          </button>
        </form>
      )}
    </div>
  );
}
