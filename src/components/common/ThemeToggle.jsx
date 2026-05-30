// src/components/common/ThemeToggle.jsx
import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Vérifier le thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme')
    const isDark = savedTheme === 'dark' || (savedTheme === null && true)
    
    setDarkMode(isDark)
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-dark-secondary/50 hover:bg-cyan-500/20 transition-colors ml-4"
      aria-label="Changer le thème"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-cyan-400 text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle