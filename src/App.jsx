// src/App.jsx
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    document.documentElement.lang = i18n.resolvedLanguage
  }, [t, i18n.resolvedLanguage])

  return (
    <Router
      future={{
        v7_startTransition: true,      // Pour supprimer le premier avertissement
        v7_relativeSplatPath: true,    // Pour supprimer le deuxième avertissement
      }}
    >
      <div className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App