// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
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