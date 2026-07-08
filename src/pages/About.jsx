// src/pages/About.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaGraduationCap, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const About = () => {
  // Hook d'animation - déclenche l'animation quand l'élément entre dans le viewport
  const [ref, inView] = useInView({
    triggerOnce: true,  // L'animation ne se déclenche qu'une fois
    threshold: 0.1,     // Se déclenche quand 10% de l'élément est visible
  })

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Animation d'entrée pour le titre */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            À Propos de Moi
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Section principale avec animation au scroll */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto"
        >
          {/* Colonne gauche - Photo et infos */}
          <div className="space-y-6">
            <div className="relative group">
              {/* Cadre avec effet glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-50 dark:bg-dark-secondary rounded-2xl p-8 text-center">
                {/* Photo de profil */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-400"><img src="/photo.jpg" alt="" /></span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-cyan-400 mb-2">
                  Christian Noukimi
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Développeur Full Stack / DevOps
                </p>
                
                {/* Bouton CV */}
                <motion.a
                  href="/Cv.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all"
                >
                  <FaDownload />
                  Télécharger mon CV
                </motion.a>
              </div>
            </div>
          </div>

          {/* Colonne droite - Description détaillée */}
          <div className="space-y-8">
            {/* Parcours académique */}
            <div className="bg-gray-50 dark:bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-cyan-400 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Parcours Académique</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Master 2 Architecture des systèmes d'informations
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">ECOLE IT, Orléans - France</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">2023 – 2026</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Licence en informatique fondamentale
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">Université de Yaoundé 1, Yaoundé - Cameroun</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">2021</p>
                </div>
              </div>
            </div>

            {/* Objectifs professionnels */}
            <div className="bg-gray-50 dark:bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-cyan-400 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Objectifs Professionnels</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Je recherche un CDI/CDD en développement fullstack, DevOps ou DevSecOps
                dès à présent. Mon objectif est de contribuer activement à la conception
                et la sécurisation des infrastructures tout en renforçant mon expertise
                technique et réglementaire.
              </p>
            </div>

            {/* Domaines d'expertise */}
            <div className="bg-gray-50 dark:bg-dark-secondary/50 p-6 rounded-xl cyber-border">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-cyan-400 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Domaines d'Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Développement Full Stack", "DevOps", "DevSecOps", "Sécurité IT/OT", "CI/CD", "Cloud AWS", "Formation"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About