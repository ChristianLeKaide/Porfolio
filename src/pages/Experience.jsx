// src/pages/Experience.jsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaLeaf, FaGraduationCap, FaCode, FaChalkboardTeacher } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Henddu SAS - Lille",
    period: "2026",
    icon: FaLeaf,
    description: [
      "Développement et intégration d'API REST pour la collecte, le traitement et la diffusion des données de qualité de l'air, documentées via Swagger (OpenAPI)",
      "Conception d'interfaces web et de tableaux de bord interactifs (indicateurs qualité de l'air, polluants, indices AQI)",
      "Développement d'un module de génération automatisée de bulletins réglementaires au format PDF",
      "Gestion des stations de mesure, épisodes de pollution, alertes et rapports environnementaux",
      "Containerisation Docker (dev et prod) pour des déploiements reproductibles",
      "Collaboration Agile (Scrum) avec équipes techniques et experts scientifiques"
    ],
    technologies: ["API REST", "Swagger", "Docker", "React", "Scrum"],
    color: "from-emerald-400 to-green-500"
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    company: "CampusConnects — Plateforme de gestion universitaire",
    period: "2025",
    icon: FaGraduationCap,
    description: [
      "Conception complète de l'architecture fonctionnelle et UX/UI (web et mobile) avec Adobe XD",
      "Développement frontend React fidèle aux maquettes et intégration API backend",
      "Développement d'API REST : gestion des utilisateurs (authentification JWT, rôles) et gestion des cours",
      "Documentation interactive des API avec Swagger (OpenAPI)",
      "Rédaction des tests unitaires et déploiement de l'application sur VPS"
    ],
    technologies: ["React", "JWT", "REST API", "Swagger", "VPS"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Développeur Full Stack Python",
    company: "Nexgen Technology",
    period: "Fév. 2023 – Juillet 2023",
    icon: FaCode,
    description: [
      "Développement d'applications web full stack avec Python / Django",
      "Conception et intégration d'API REST (authentification, gestion des utilisateurs, endpoints métier)",
      "Sécurisation des applications : protection contre SQLi, validation des entrées, gestion des sessions",
      "Containerisation et déploiement d'applications multi-services avec Docker",
      "Participation à des audits de sécurité et rédaction de rapports techniques"
    ],
    technologies: ["Python", "Django", "Docker", "REST API", "SQLi Protection"],
    color: "from-indigo-400 to-purple-500"
  },
  {
    id: 4,
    title: "Formateur Développement Fullstack Python (CDD)",
    company: "Developers Institute",
    period: "Juillet 2023 – Déc. 2023",
    icon: FaChalkboardTeacher,
    description: [
      "Animation de formations Full Stack : Python, Django, HTML5, CSS3, JavaScript, Bootstrap, React.js",
      "Encadrement de projets web complets, de l'analyse des besoins jusqu'au déploiement",
      "Enseignement des bonnes pratiques : architecture logicielle, POO, structuration du code, gestion des erreurs",
      "Accompagnement à l'utilisation de Git et GitHub pour le versionnement collaboratif"
    ],
    technologies: ["Python", "Django", "JavaScript", "React.js", "Git"],
    color: "from-purple-400 to-pink-500"
  }
]

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transformation pour l'animation de la ligne de timeline
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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
            Parcours Professionnel
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours en développement full stack, DevOps et DevSecOps
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