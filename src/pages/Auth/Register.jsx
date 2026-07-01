import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/auth/RegisterForm';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12">
      <RegisterForm />
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        ¿Ya tienes una cuenta?{' '}
        <Link 
          to="/login" 
          className="text-indigo-655 dark:text-indigo-400 font-semibold hover:underline transition duration-150"
        >
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
