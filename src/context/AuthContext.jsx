import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

// Create the Context
const AuthContext = createContext(undefined);

/**
 * AuthContext Provider Component
 */
export function AuthContextProvider({ children }) {
  const [state, setState] = useState(() => {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        return {
          isAuthenticated: true,
          user,
          loading: false,
        };
      } catch (e) {
        console.error('Error parseando sesión previa:', e);
      }
    }

    return {
      isAuthenticated: false,
      user: null,
      loading: false,
    };
  });

  // Efecto para verificar si la sesión sigue siendo válida (con cookies HttpOnly)
  useEffect(() => {
    const verifyToken = async () => {
      if (state.isAuthenticated) {
        try {
          // Intentamos cargar el perfil para validar la sesión actual
          await authService.getProfile();
        } catch (error) {
          console.warn(
            'Sesión expirada o token inválido en servidor, cerrando sesión.'
          );

          logoutUser();
        }
      }
    };

    verifyToken();
  }, []);

  const loginUser = async (email, password) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await authService.login({ email, password });
      const { user } = response;

      // Mapeamos los roles del backend a los roles del frontend:
      // 'client' -> 'cliente'
      // 'admin'  -> 'fotografo' (El administrador del sistema es el fotógrafo)
      let frontendRole = user.role;
      if (user.role === 'client') {
        frontendRole = 'cliente';
      } else if (user.role === 'admin') {
        frontendRole = 'fotografo';
      }

      const frontendUser = {
        ...user,
        role: frontendRole,
      };

      localStorage.setItem('user', JSON.stringify(frontendUser));

      setState({
        isAuthenticated: true,
        user: frontendUser,
        loading: false,
      });

      return frontendUser;
    } catch (error) {
      setState((prev) => ({ ...prev, loading: false }));
      throw error;
    }
  };

  const registerUser = async (userData) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await authService.register(userData);
      const { user } = response;

      // Mapeamos los roles del backend a los roles del frontend:
      // 'client' -> 'cliente'
      // 'admin'  -> 'fotografo'
      let frontendRole = user.role;
      if (user.role === 'client') {
        frontendRole = 'cliente';
      } else if (user.role === 'admin') {
        frontendRole = 'fotografo';
      }

      const frontendUser = {
        ...user,
        role: frontendRole,
      };

      localStorage.setItem('user', JSON.stringify(frontendUser));

      setState({
        isAuthenticated: true,
        user: frontendUser,
        loading: false,
      });

      return frontendUser;
    } catch (error) {
      setState((prev) => ({ ...prev, loading: false }));
      throw error;
    }
  };

  async function logoutUser() {
    try {
      // Llamamos al servicio de logout para limpiar la cookie del backend
      await authService.logout();
    } catch (e) {
      console.warn('Error llamando a logout en servidor:', e);
    }

    // Limpiamos los datos locales en el cliente
    localStorage.removeItem('user');
    setState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  }

  const value = {
    state,
    setState,
    loginUser,
    registerUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to use the AuthContext
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
}
