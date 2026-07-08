/**
 * ThemeContext - Manages dark/light theme for the entire application
 * Persists theme preference in localStorage and applies transitions
 */
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

/**
 * Hook to access theme context
 * @returns {Object} { darkMode, toggleTheme, setTheme }
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

/**
 * ThemeProvider - Provides theme context to entire app
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    setDarkMode(isDark)

    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transition')

    // Apply theme to DOM
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)

    // Remove transition class after initialization to prevent flash
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
      setIsInitialized(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  /**
   * Toggle theme with smooth transition
   */
  const toggleTheme = useCallback(() => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode

      // Add transition class for smooth animation
      document.documentElement.classList.add('theme-transition')

      // Update DOM
      document.documentElement.classList.toggle('dark', newDarkMode)
      document.documentElement.classList.toggle('light', !newDarkMode)
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')

      // Remove transition class after animation
      const timer = setTimeout(() => {
        document.documentElement.classList.remove('theme-transition')
      }, 300)

      return newDarkMode
    })
  }, [])

  /**
   * Set specific theme (dark or light)
   */
  const setTheme = useCallback((theme) => {
    const isDark = theme === 'dark'
    if (isDark === darkMode) return

    setDarkMode(isDark)
    document.documentElement.classList.add('theme-transition')

    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)

    return () => clearTimeout(timer)
  }, [darkMode])

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        setTheme,
        isInitialized
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}