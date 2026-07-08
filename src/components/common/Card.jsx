import '../../styles/components/Card.css'

/**
 * Card Component - Generic reusable card container
 *
 * @component
 * @param {JSX.Element} children - Card content
 * @param {string} [className] - Additional CSS classes
 * @param {function} [onClick] - Click handler
 * @param {boolean} [clickable=false] - Whether card is clickable
 * @param {string} [variant='default'] - Card style variant
 * @returns {JSX.Element} Card component
 *
 * @example
 * <Card variant="bordered" clickable onClick={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Card content here</p>
 * </Card>
 */
const Card = ({
  children,
  className = '',
  onClick,
  clickable = false,
  variant = 'default'
}) => {
  const variantClass = `card--${variant}`
  const interactiveClass = clickable ? 'card--clickable' : ''

  return (
    <div
      className={`card ${variantClass} ${interactiveClass} ${className}`}
      onClick={onClick}
      role={clickable ? 'button' : 'article'}
      tabIndex={clickable ? 0 : -1}
    >
      {children}
    </div>
  )
}

export default Card
