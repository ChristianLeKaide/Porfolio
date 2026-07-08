/**
 * ThemeToggle Component - Button to switch between dark and light themes
 * Includes smooth animations and icon transitions
 */
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

/**
 * ThemeToggle - Animated theme toggle button
 * @component
 * @returns {JSX.Element} Animated theme toggle button
 *
 * @example
 * <ThemeToggle />
 */
const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={darkMode ? t('theme.switchToLight') : t('theme.switchToDark')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="theme-toggle__icon-wrapper"
        initial={false}
        animate={{
          rotate: darkMode ? 0 : 180,
          scale: 1
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 15
        }}
      >
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="theme-toggle__icon theme-toggle__icon--sun"
          >
            <FaSun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="theme-toggle__icon theme-toggle__icon--moon"
          >
            <FaMoon />
          </motion.div>
        )}
      </motion.div>

      {/* Background glow effect */}
      <motion.div
        className="theme-toggle__glow"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 3
        }}
      />
    </motion.button>
  )
}

export default ThemeToggle