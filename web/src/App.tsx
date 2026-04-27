import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import { ArchiveHub } from './pages/ArchiveHub'
import { FinalReflection } from './pages/FinalReflection'
import { LandingPage } from './pages/LandingPage'
import { ScenePage } from './pages/ScenePage'

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchiveHub />} />
          <Route path="/scene/:id" element={<ScenePage />} />
          <Route path="/reflection" element={<FinalReflection />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}
