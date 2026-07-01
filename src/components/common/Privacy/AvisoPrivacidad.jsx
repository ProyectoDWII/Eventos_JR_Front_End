import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AvisoPrivacidad - Componente simplificado de aviso de privacidad con checkbox de consentimiento.
 * Cumple con la LGPDPPSO (Ley de Protección de Datos Personales).
 * 
 * @param {boolean} checked - Estado actual del checkbox.
 * @param {function} onChange - Función manejadora del cambio de estado.
 * @param {string} error - Mensaje de error a mostrar si el consentimiento es requerido.
 */
export default function AvisoPrivacidad({ checked, onChange, error }) {
  return (
    <div className="my-4 p-4 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 transition duration-300">
      <div className="flex items-start gap-3">
        <div className="flex items-center h-5">
          <input
            id="privacy-consent"
            name="privacy-consent"
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`w-5 h-5 rounded border bg-white dark:bg-zinc-850 cursor-pointer focus:ring-2 focus:outline-none transition duration-150 ${
              error 
                ? 'border-red-500 dark:border-red-500 focus:ring-red-500 text-red-600' 
                : 'border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500 text-indigo-600'
            }`}
          />
        </div>
        <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <label htmlFor="privacy-consent" className="cursor-pointer select-none font-medium text-zinc-700 dark:text-zinc-300">
            Doy mi consentimiento para el tratamiento de mis datos personales.
          </label>
          <p className="mt-1.5 text-zinc-500 dark:text-zinc-500 text-[11px] sm:text-xs">
            <strong>Aviso Simplificado:</strong> Eventos JR utilizará los datos aquí recabados únicamente para la finalidad del servicio solicitado (gestión de cuentas, cotizaciones de eventos o atención a sus mensajes). Para mayor detalle acerca del tratamiento, las transferencias y el ejercicio de sus <strong>derechos ARCO</strong>, consulte nuestro{' '}
            <Link 
              to="/aviso-privacidad" 
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition duration-150"
            >
              Aviso de Privacidad Integral
            </Link>.
          </p>
        </div>
      </div>
      
      {error && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-medium animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
