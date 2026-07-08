import '../../styles/components/ContactInfo.css'

/**
 * ContactInfo Component - Reusable contact information item
 *
 * @component
 * @param {JSX.Element} icon - Icon component
 * @param {string} label - Contact label (e.g., "Email")
 * @param {string} value - Contact value (e.g., "example@email.com")
 * @param {string} [href] - Optional link href (email, phone, etc.)
 * @returns {JSX.Element} Contact information display
 *
 * @example
 * <ContactInfo
 *   icon={<FaEnvelope />}
 *   label="Email"
 *   value="contact@example.com"
 *   href="mailto:contact@example.com"
 * />
 */
const ContactInfo = ({ icon, label, value, href }) => {
  const content = (
    <div className="contact-info">
      <div className="contact-info__icon-wrapper">
        {icon}
      </div>
      <div className="contact-info__content">
        <p className="contact-info__label">{label}</p>
        <p className="contact-info__value">{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-info__link">
      {content}
    </a>
  ) : (
    content
  )
}

export default ContactInfo
