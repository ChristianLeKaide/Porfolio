import { motion } from 'framer-motion'
import '../../styles/components/Button.css'

/**
 * Button Component - Reusable button with variants
 *
 * @component
 * @param {string} children - Button label text
 * @param {('primary'|'secondary'|'ghost')} [variant='primary'] - Button style variant
 * @param {('sm'|'md'|'lg')} [size='md'] - Button size
 * @param {function} [onClick] - Click handler
 * @param {boolean} [disabled=false] - Disabled state
 * @param {string} [className] - Additional CSS classes
 * @param {JSX.Element} [icon] - Optional icon component
 * @param {string} [type='button'] - HTML button type
 * @returns {JSX.Element} Animated button
 *
 * @example
 * <Button
 *   variant="primary"
 *   size="lg"
 *   icon={<FaGithub />}
 *   onClick={handleClick}
 * >
 *   Voir sur GitHub
 * </Button>
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  icon,
  type = 'button'
}) => {
  const variantClass = `button--${variant}`
  const sizeClass = `button--${size}`

  return (
    // Utilisation de motion.button pour les animations
    // Les animations de hover et tap sont conditionnelles en fonction de l'état disabled
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`button ${variantClass} ${sizeClass} ${className}`}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  )
}

export default Button
