import React, { createContext, useContext, useState } from 'react';

// Create the Context
const ChatbotContext = createContext(undefined);

/**
 * ChatbotContext Provider Component
 */
export function ChatbotContextProvider({ children }) {
  const [state, setState] = useState(null);

  const value = {
    state,
    setState
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
}

/**
 * Custom hook to use the ChatbotContext
 */
export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotContextProvider');
  }
  return context;
}
