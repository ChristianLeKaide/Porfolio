// src/pages/Projects.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaLock, FaChalkboardTeacher } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: "Audit IT/OT",
    year: "2025",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    description: "Audit complet d'une infrastructure SCADA/IoT",
    longDescription: "Réalisation d'un audit de sécurité approfondi sur une infrastructure industrielle connectée. Analyse des vulnérabilités, propositions de correctifs et rédaction d'un rapport détaillé.",
    technologies: ["SCADA", "IoT", "Nmap", "Wireshark", "Sécurité Industrielle"],
    image: "/images/projects/audit-iot.jpg",
    details: [
      "Analyse de risque complète",
      "Tests d'intrusion sur composants IoT",
      "Proposition d'architecture sécurisée",
      "Rapport d'audit de 50+ pages"
    ]
  },
  {
    id: 2,
    title: "Application Web Sécurisée",
    year: "2023",
    icon: FaLock,
    color: "from-cyan-400 to-blue-500",
    description: "Application avec authentification renforcée",
    longDescription: "Développement d'une application web intégrant les meilleures pratiques de sécurité : authentification multi-facteurs, chiffrement des données, protection contre les injections SQL.",
    technologies: ["Docker", "JWT", "OAuth2", "HTTPS", "OWASP"],
    image: "/images/projects/secure-webapp.jpg",
    details: [
      "Authentification MFA",
      "Chiffrement AES-256",
      "Protection CSRF/XSS",
      "Déploiement Docker sécurisé"
    ]
  },
  {
    id: 3,
    title: "Plateforme Formation Python",
    year: "2023",
    icon: FaChalkboardTeacher,
    color: "from-green-400 to-emerald-500",
    description: "Projet pédagogique d'encadrement",
    longDescription: "Création d'une plateforme de formation en ligne pour l'apprentissage de Python, avec exercices interactifs, correction automatique et suivi des progrès.",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    image: "/images/projects/python-platform.jpg",
    details: [
      "100+ exercices interactifs",
      "Système de correction automatique",
      "Tableau de bord personnalisé",
      "Gestion de classes et d'étudiants"
    ]
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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
            Projets Réalisés
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes projets les plus significatifs dans le domaine de la cybersécurité et du développement
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-dark-secondary/30 rounded-xl overflow-hidden cyber-border hover:border-cyan-500/40 transition-all h-full">
                {/* Image d'illustration */}
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="text-white text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">Cliquez pour voir plus</span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-cyan-400 font-mono">{project.year}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded-md text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal pour afficher les détails du projet */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-secondary rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto cyber-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du modal */}
              <div className={`bg-gradient-to-r ${selectedProject.color} p-6 rounded-t-xl`}>
                <div className="flex items-center gap-4">
                  <selectedProject.icon className="text-white text-3xl" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-white/80">{selectedProject.year}</p>
                  </div>
                </div>
              </div>

              {/* Corps du modal */}
              <div className="p-6">
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Détails du projet</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                    <FaGithub />
                    Voir sur GitHub
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors">
                    <FaExternalLinkAlt />
                    Demo en ligne
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects