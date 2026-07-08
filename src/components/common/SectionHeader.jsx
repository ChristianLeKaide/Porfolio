import { motion } from 'framer-motion'
import '../../styles/components/SectionHeader.css'

/**
 * SectionHeader Component - Reusable header for page sections
 *
 * @component
 * @param {string} title - Main title text
 * @param {string} [subtitle] - Optional subtitle description
 * @param {boolean} [showUnderline=true] - Show decorative underline
 * @returns {JSX.Element} Animated section header
 *
 * @example
 * <SectionHeader
 *   title="Mes Projets"
 *   subtitle="Découvrez mes réalisations"
 * />
 */
const SectionHeader = ({
  title,
  subtitle,
  showUnderline = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="section-header"
    >
      <h1 className="section-header__title gradient-text">
        {title}
      </h1>

      {subtitle && (
        <p className="section-header__subtitle">
          {subtitle}
        </p>
      )}

      {showUnderline && (
        <div className="section-header__underline"></div>
      )}
    </motion.div>
  )
}

export default SectionHeader
