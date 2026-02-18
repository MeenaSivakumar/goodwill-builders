import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type ProjectFilter = 'all' | 'ongoing' | 'completed'

interface ProjectFilterContextType {
  currentFilter: ProjectFilter
  setFilter: (filter: ProjectFilter) => void
}

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined)

export const useProjectFilter = () => {
  const context = useContext(ProjectFilterContext)
  if (!context) {
    throw new Error('useProjectFilter must be used within a ProjectFilterProvider')
  }
  return context
}

interface ProjectFilterProviderProps {
  children: ReactNode
}

export const ProjectFilterProvider: React.FC<ProjectFilterProviderProps> = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState<ProjectFilter>('all')

  const setFilter = (filter: ProjectFilter) => {
    setCurrentFilter(filter)
  }

  return (
    <ProjectFilterContext.Provider
      value={{
        currentFilter,
        setFilter,
      }}
    >
      {children}
    </ProjectFilterContext.Provider>
  )
}
