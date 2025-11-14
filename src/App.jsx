import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Marketing from './components/Marketing'
import IT from './components/IT'
import { Header, useLang } from './components/Shared'

function App() {
  const langState = useLang()
  const { t } = langState

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header langState={langState} />
      <main className="">
        <Routes>
          <Route path="/" element={<Landing t={t} />} />
          <Route path="/marketing" element={<Marketing t={t} />} />
          <Route path="/it" element={<IT t={t} />} />
        </Routes>
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Leonardo Notargiacomo</footer>
    </div>
  )
}

export default App
