import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ChatbotContextProvider } from './context/ChatbotContext'
import { NotificacionesContextProvider } from './context/NotificacionesContext'
import { ThemeContextProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <NotificacionesContextProvider>
            <ChatbotContextProvider>
              <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                <AppRoutes />
              </div>
            </ChatbotContextProvider>
          </NotificacionesContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
