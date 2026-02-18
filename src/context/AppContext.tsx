import React, { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { theme } from '../theme/theme'

interface AppContextType {
  theme: typeof theme
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={{ theme }}>
      {children}
    </AppContext.Provider>
  )
}
