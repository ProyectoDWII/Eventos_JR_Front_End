import React, { createContext, useContext, useState } from 'react';

// Create the Context
const NotificacionesContext = createContext(undefined);

/**
 * NotificacionesContext Provider Component
 */
export function NotificacionesContextProvider({ children }) {
  const [state, setState] = useState(null);

  const value = {
    state,
    setState,
  };

  return (
    <NotificacionesContext.Provider value={value}>
      {children}
    </NotificacionesContext.Provider>
  );
}

/**
 * Custom hook to use the NotificacionesContext
 */
export function useNotificaciones() {
  const context = useContext(NotificacionesContext);
  if (context === undefined) {
    throw new Error(
      'useNotificaciones must be used within a NotificacionesContextProvider'
    );
  }
  return context;
}
