// src/components/layout/Header.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from '../common/ThemeToggle'
import LanguageToggle from '../common/LanguageToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
            CN
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-all ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  />
                )}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 transition-all ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-cyan-400/10 rounded-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
