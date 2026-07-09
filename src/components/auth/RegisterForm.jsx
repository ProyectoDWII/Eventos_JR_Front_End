import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAuth } from '../../context/AuthContext';
import AvisoPrivacidad from '../common/Privacy/AvisoPrivacidad';

export default function RegisterForm() {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('cliente');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Sanitización preventiva contra XSS
    const sanitizedNombre = DOMPurify.sanitize(nombre);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedPhone = DOMPurify.sanitize(phoneNumber);
    const sanitizedPassword = DOMPurify.sanitize(password);

    if (!sanitizedNombre.trim()) {
      newErrors.nombre = 'El nombre completo es requerido.';
    }

    if (!sanitizedEmail) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(sanitizedEmail)) {
      newErrors.email = 'El formato del correo es inválido.';
    }

    if (!sanitizedPassword) {
      newErrors.password = 'La contraseña es requerida.';
    } else if (sanitizedPassword.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    } else if (sanitizedPassword.length > 128) {
      newErrors.password = 'La contraseña no puede exceder los 128 caracteres.';
    }

    if (sanitizedPassword !== DOMPurify.sanitize(confirmPassword)) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    if (sanitizedPhone.trim() && !/^\d{10}$/.test(sanitizedPhone.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'El teléfono debe contener exactamente 10 dígitos.';
    }

    // Critical block: check if privacy consent checkbox is checked
    if (!acceptedPrivacy) {
      newErrors.privacy = 'Debe aceptar el Aviso de Privacidad y consentir el tratamiento de sus datos para registrarse.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const user = await registerUser({
        name: sanitizedNombre,
        email: sanitizedEmail,
        password: sanitizedPassword,
        role: rol,
        phoneNumber: sanitizedPhone
      });
      setLoading(false);
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      setLoading(false);
      const serverMessage = error.response?.data?.message || error.response?.data?.error;
      setErrors({
        general: serverMessage || 'Error al crear la cuenta. Es posible que el correo ya esté registrado.'
      });
    }
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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* General error feedback */}
        {errors.general && (
          <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-xs text-red-600 dark:text-red-400 font-semibold leading-relaxed">
            {errors.general}
          </div>
        )}

        {/* Name Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Juan Pérez"
            className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.nombre 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.nombre && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.nombre}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Número de Teléfono (Opcional)
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="5512345678"
            className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.phoneNumber 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Role Selector */}
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

        {/* Password Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
              errors.password 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-250 dark:border-zinc-750 focus:ring-indigo-500'
            }`}
          />
          {errors.password && (
            <p className="text-xs text-red-655 dark:text-red-400 mt-1 font-medium">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full px-4 py-2 rounded-xl border bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:outline-none transition duration-150 ${
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 font-semibold text-white bg-indigo-600 hover:bg-indigo-750 rounded-xl transition duration-200 shadow-md shadow-indigo-650/10 hover:shadow-indigo-650/20 active:scale-98 disabled:opacity-55 cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creando cuenta...
            </span>
          ) : (
            'Registrarse'
          )}
        </button>
      </form>
    </div>
  );
}
