/**
 * LanguageToggle Component - Button to switch between French and English
 */
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './LanguageToggle.css'

/**
 * LanguageToggle - Animated FR/EN language switch button
 * @component
 * @returns {JSX.Element} Animated language toggle button
 *
 * @example
 * <LanguageToggle />
 */
const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const isFrench = i18n.resolvedLanguage === 'fr'

  const toggleLanguage = () => {
    i18n.changeLanguage(isFrench ? 'en' : 'fr')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={isFrench ? 'Switch to English' : 'Passer en français'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.span
        key={i18n.resolvedLanguage}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="language-toggle__label"
      >
        {isFrench ? 'FR' : 'EN'}
      </motion.span>
    </motion.button>
  )
}

export default LanguageToggle
