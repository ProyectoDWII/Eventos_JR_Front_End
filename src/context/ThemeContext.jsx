import React, { createContext, useContext, useState } from 'react';

// Create the Context
const ThemeContext = createContext(undefined);

/**
 * ThemeContext Provider Component
 */
export function ThemeContextProvider({ children }) {
  const [state, setState] = useState(null);

  const value = {
    state,
    setState
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use the ThemeContext
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
