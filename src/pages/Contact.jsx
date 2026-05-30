// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Remplacez ces IDs par vos vrais identifiants EmailJS
      // Pour utiliser EmailJS, inscrivez-vous sur https://www.emailjs.com/
    const result = await emailjs.send(
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
      
      setStatus({ type: 'success', message: 'Message envoyé avec succès ! Je vous répondrai rapidement.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erreur:', error)
      setStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer ou m\'envoyer un email directement.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Me Contacter
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité professionnelle ou question
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Colonne gauche - Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <h2 className="text-2xl font-bold text-white mb-6">Informations</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <FaEnvelope className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:noukimichristian@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      noukimichristian@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <FaPhone className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                    <a href="tel:+33758260914" className="text-white hover:text-cyan-400 transition-colors">
                      +33 7 58 26 09 14
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localisation</p>
                    <p className="text-white">Orléans, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <h2 className="text-2xl font-bold text-white mb-6">Me suivre</h2>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/christian-danis-noukimi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                >
                  <FaLinkedin className="text-cyan-400 text-2xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                >
                  <FaGithub className="text-cyan-400 text-2xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                >
                  <FaTwitter className="text-cyan-400 text-2xl" />
                </motion.a>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <h2 className="text-2xl font-bold text-white mb-4">Ma localisation</h2>
              <div className="rounded-lg overflow-hidden h-64">
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

          {/* Colonne droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-primary border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-3 rounded-lg ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact