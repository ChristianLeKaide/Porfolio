// src/pages/Experience.jsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaLeaf, FaGraduationCap, FaCode, FaChalkboardTeacher } from 'react-icons/fa'

// Donnees structurelles (icone, couleur, technologies) - le contenu textuel
// (titre, entreprise, periode, description) vient des fichiers de traduction
const experienceMeta = [
  { icon: FaLeaf, technologies: ["API REST", "Swagger", "Docker", "React", "Scrum"], color: "from-emerald-400 to-green-500" },
  { icon: FaGraduationCap, technologies: ["React", "JWT", "REST API", "Swagger", "VPS"], color: "from-cyan-400 to-blue-500" },
  { icon: FaCode, technologies: ["Python", "Django", "Docker", "REST API", "SQLi Protection"], color: "from-indigo-400 to-purple-500" },
  { icon: FaChalkboardTeacher, technologies: ["Python", "Django", "JavaScript", "React.js", "Git"], color: "from-purple-400 to-pink-500" }
]

const Experience = () => {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transformation pour l'animation de la ligne de timeline
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const translatedItems = t('experience.items', { returnObjects: true })
  const experiences = experienceMeta.map((meta, index) => ({
    id: index + 1,
    ...meta,
    ...translatedItems[index]
  }))

  return (

    // Conteneur principal avec référence pour le scroll
    // La classe "cyber-border" ajoute une bordure animée inspirée de la cybersécurité
    <div ref={containerRef} className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t('experience.title')}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-blue-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Éléments de la timeline */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-white dark:border-dark-primary z-10">
                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
              </div>

              {/* Contenu */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-dark-secondary/50 p-6 rounded-xl cyber-border hover:shadow-xl transition-all"
                >
                  {/* En-tête avec icône */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${exp.color} mb-4`}>
                    <exp.icon className="text-white text-xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{exp.period}</p>

                  {/* Description des missions */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Espace vide pour l'alternance */}
              <div className="hidden lg:block lg:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
