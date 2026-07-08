import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import SectionHeader from '../components/common/SectionHeader'
import ContactInfo from '../components/common/ContactInfo'
import Button from '../components/common/Button'
import '../styles/pages/Contact.css'

/**
 * Contact Page - Contact form and information
 * @component
 * @returns {JSX.Element} Contact page with form and contact details
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Handle form input changes
   * @param {Event} e - Change event
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handle form submission with EmailJS
   * @param {Event} e - Submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Christian Noukimi'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai rapidement.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erreur:', error)
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou m\'envoyer un email directement.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        {/* Page header */}
        <SectionHeader
          title="Me Contacter"
          subtitle="N'hésitez pas à me contacter pour toute opportunité professionnelle ou question"
        />

        <div className="contact-page__content">
          {/* Left column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-page__info-section"
          >
            {/* Contact details */}
            <div className="contact-page__info-card">
              <h2 className="contact-page__card-title">Informations</h2>

              <div className="contact-page__info-list">
                <ContactInfo
                  icon={<FaEnvelope />}
                  label="Email"
                  value="noukimichristian@gmail.com"
                  href="mailto:noukimichristian@gmail.com"
                />

                <ContactInfo
                  icon={<FaPhone />}
                  label="Téléphone"
                  value="+33 7 58 26 09 14"
                  href="tel:+33758260914"
                />

                <ContactInfo
                  icon={<FaMapMarkerAlt />}
                  label="Localisation"
                  value="Orléans, France"
                />
              </div>
            </div>

            {/* Social links */}
            <div className="contact-page__info-card">
              <h2 className="contact-page__card-title">Me suivre</h2>
              <div className="contact-page__social-links">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/christian-danis-noukimi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/ChristianLeKaide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__social-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>

            {/* Map */}
            <div className="contact-page__info-card">
              <h2 className="contact-page__card-title">Ma localisation</h2>
              <div className="contact-page__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170515.9853983784!2d1.7898244999999998!3d47.902964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4d9d8f2b6a32f%3A0x40b82c3688b3ba0!2sOrl%C3%A9ans%2C%20France!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map d'Orléans"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-page__form-section"
          >
            <div className="contact-page__form-card">
              <h2 className="contact-page__card-title">Envoyez-moi un message</h2>

              <form onSubmit={handleSubmit} className="contact-page__form">
                {/* Name input */}
                <div className="contact-page__form-group">
                  <label htmlFor="name" className="contact-page__form-label">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-page__form-input"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email input */}
                <div className="contact-page__form-group">
                  <label htmlFor="email" className="contact-page__form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-page__form-input"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Message textarea */}
                <div className="contact-page__form-group">
                  <label htmlFor="message" className="contact-page__form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="contact-page__form-textarea"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {/* Status message */}
                {status.message && (
                  <div
                    className={`contact-page__status contact-page__status--${status.type}`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isLoading}
                  className="contact-page__submit-button"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
