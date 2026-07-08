import '../../styles/components/TechTag.css'

/**
 * TechTag Component - Badge for technology skills
 *
 * @component
 * @param {string} children - Tag label
 * @param {('primary'|'secondary'|'ghost')} [variant='primary'] - Tag style
 * @param {boolean} [clickable=false] - Whether tag is clickable
 * @param {function} [onClick] - Click handler
 * @returns {JSX.Element} Technology tag badge
 *
 * @example
 * <TechTag variant="primary">React</TechTag>
 * <TechTag variant="secondary" clickable>Python</TechTag>
 */
const TechTag = ({
  children,
  variant = 'primary',
  clickable = false,
  onClick
}) => {
  const variantClass = `tech-tag--${variant}`
  const cursorClass = clickable ? 'tech-tag--clickable' : ''

  return (
    <span
      className={`tech-tag ${variantClass} ${cursorClass}`}
      onClick={onClick}
      role={clickable ? 'button' : 'img'}
      tabIndex={clickable ? 0 : -1}
    >
      {children}
    </span>
  )
}

export default TechTag
