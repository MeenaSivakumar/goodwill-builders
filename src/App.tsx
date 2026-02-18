import { Suspense } from 'react'
import { AppProvider } from './context/AppContext'
import { MobileMenuProvider } from './context/MobileMenuContext'
import { ProjectFilterProvider } from './context/ProjectFilterContext'
import { AppRouter } from './routes/router'
import './index.css'

function App() {
  return (
    <AppProvider>
      <MobileMenuProvider>
        <ProjectFilterProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </ProjectFilterProvider>
      </MobileMenuProvider>
    </AppProvider>
  )
}

export default App
