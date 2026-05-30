// src/components/home/Hero.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TypingAnimation from './TypingAnimation'
import ParticleBackground from '../common/ParticleBackground'

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-dark-primary rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <img src="/photo.jpg" alt="" />
                  </span>
                </div>
              </div>
              <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Présentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Christian <span className="gradient-text">Noukimi</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              Étudiant en <span className="text-cyan-400">Master 2 Cybersécurité</span>
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionné par la sécurité informatique, le pentesting et la protection 
              des systèmes d'information. Basé à Orléans, France.
            </p>

            <TypingAnimation texts={["Cybersecurity Engineer","Pentester","Fullstack Developer", "IT Security Manager", "DevOps", "Formateur Python"]} />

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
                >
                  Voir mes projets
                </motion.button>
              </Link>
              
              <a href="/Cv.pdf">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold transition-all w-full sm:w-auto"
                >
                  Télécharger mon CV
                </motion.button>
              </a>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-semibold transition-all w-full sm:w-auto"
                >
                  Me contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero