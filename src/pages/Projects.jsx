import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from '../components/common/SectionHeader'
import ProjectCard from '../components/projects/ProjectCard'
import Button from '../components/common/Button'
import TechTag from '../components/common/TechTag'
import { projectsData } from '../data/projectsData'
import '../styles/pages/Projects.css'

/**
 * Projects Page - Display all portfolio projects
 * @component
 * @returns {JSX.Element} Projects page with project grid and modal
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="projects-page">
      <div className="projects-page__container">
        {/* Page header */}
        <SectionHeader
          title="Projets Réalisés"
          subtitle="Découvrez mes projets les plus significatifs en développement full stack et DevSecOps"
        />

        {/* Projects grid */}
        <div className="projects-page__grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projects-page__modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="projects-page__modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with gradient */}
              <div
                className={`projects-page__modal-header bg-gradient-to-r ${selectedProject.color}`}
              >
                <div className="projects-page__modal-title-wrapper">
                  <selectedProject.icon className="projects-page__modal-icon" />
                  <div>
                    <h3 className="projects-page__modal-title">
                      {selectedProject.title}
                    </h3>
                    <p className="projects-page__modal-year">
                      {selectedProject.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal body */}
              <div className="projects-page__modal-body">
                {/* Description */}
                <p className="projects-page__modal-description">
                  {selectedProject.longDescription}
                </p>

                {/* Project details */}
                <div className="projects-page__modal-section">
                  <h4 className="projects-page__modal-section-title">
                    Détails du projet
                  </h4>
                  <ul className="projects-page__modal-details">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="projects-page__modal-detail-item">
                        <span className="projects-page__modal-bullet">▹</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="projects-page__modal-section">
                  <h4 className="projects-page__modal-section-title">
                    Technologies utilisées
                  </h4>
                  <div className="projects-page__modal-technologies">
                    {selectedProject.technologies.map((tech) => (
                      <TechTag key={tech} variant="primary">
                        {tech}
                      </TechTag>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="projects-page__modal-actions">
                  {selectedProject.links?.github && (
                    <Button
                      variant="primary"
                      size="md"
                      icon={<FaGithub />}
                    >
                      Voir sur GitHub
                    </Button>
                  )}
                  {selectedProject.links?.demo && (
                    <Button
                      variant="secondary"
                      size="md"
                      icon={<FaExternalLinkAlt />}
                    >
                      Demo en ligne
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
