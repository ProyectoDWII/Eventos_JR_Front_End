import React, { createContext, useContext, useState } from 'react';

// Create the Context
const AuthContext = createContext(undefined);

/**
 * AuthContext Provider Component
 */
export function AuthContextProvider({ children }) {
  const [state, setState] = useState(null);

  const value = {
    state,
    setState
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
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
