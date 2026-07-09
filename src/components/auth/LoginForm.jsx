import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAuth } from '../../context/AuthContext';
import AvisoPrivacidad from '../common/Privacy/AvisoPrivacidad';

export default function LoginForm() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Sanitización preventiva contra XSS
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedPassword = DOMPurify.sanitize(password);

    if (!sanitizedEmail) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(sanitizedEmail)) {
      newErrors.email = 'El formato del correo es inválido.';
    }

    if (!sanitizedPassword) {
      newErrors.password = 'La contraseña es requerida.';
    } else if (sanitizedPassword.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }

    // Critical block: check if privacy consent checkbox is checked
    if (!acceptedPrivacy) {
      newErrors.privacy =
        'Debe aceptar el Aviso de Privacidad y consentir el tratamiento de sus datos para continuar.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const user = await loginUser(sanitizedEmail, sanitizedPassword);
      setLoading(false);
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      setLoading(false);
      const serverMessage =
        error.response?.data?.message || error.response?.data?.error;
      setErrors({
        general:
          serverMessage ||
          'Correo electrónico o contraseña incorrectos. Por favor, intente de nuevo.',
      });
    }
  };

  return (
    <div className="w-full">
      {/* Banner de aviso inicial ANTES de introducir datos personales */}
      <div className="mb-6 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-4 text-xs text-indigo-800 dark:text-indigo-300 flex items-start gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-indigo-650 dark:text-indigo-400 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
        <div>
          <span className="font-bold">
            Protección de Datos Personales (LGPDPPSO):
          </span>
          <p className="mt-0.5 leading-relaxed text-zinc-650 dark:text-zinc-400">
            Eventos JR protege su información. Por favor, lea nuestro aviso
            simplificado al final de la página y marque la casilla para
            habilitar el ingreso.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* General error feedback */}
        {errors.general && (
          <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-xs text-red-600 dark:text-red-400 font-semibold leading-relaxed">
            {errors.general}
          </div>
        )}

        {/* Email input */}
        <div>
          <label
            className="block text-xs font-semibold text-zinc-555 dark:text-zinc-400 uppercase tracking-wider mb-1"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password input */}
        <div>
          <label
            className="block text-xs font-semibold text-zinc-555 dark:text-zinc-400 uppercase tracking-wider mb-1"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.password && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        {/* Privacy Notice Component */}
        <AvisoPrivacidad
          checked={acceptedPrivacy}
          onChange={(e) => setAcceptedPrivacy(e.target.checked)}
          error={errors.privacy}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 font-semibold text-white bg-indigo-600 hover:bg-indigo-750 rounded-xl transition duration-200 shadow-md shadow-indigo-650/10 hover:shadow-indigo-650/20 active:scale-98 disabled:opacity-55 cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Iniciando sesión...
            </span>
          ) : (
            'Iniciar Sesión'
          )}
        </button>
      </form>
    </div>
  );
}
