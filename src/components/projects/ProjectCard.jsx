import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Card from '../common/Card'
import Button from '../common/Button'
import TechTag from '../common/TechTag'
import '../../styles/components/ProjectCard.css'

/**
 * ProjectCard Component - Displays a project with icon, description, and technologies
 *
 * @component
 * @param {Object} project - Project data object
 * @param {number} project.id - Unique project identifier
 * @param {string} project.title - Project title
 * @param {string} project.year - Project year
 * @param {JSX.Element} project.icon - Icon component to display
 * @param {string} project.color - Gradient color class
 * @param {string} project.description - Short project description
 * @param {Array<string>} project.technologies - Array of technology names
 * @param {function} onClick - Handler when card is clicked
 * @param {number} [index=0] - Animation index
 * @returns {JSX.Element} Interactive project card
 *
 * @example
 * <ProjectCard
 *   project={projectData}
 *   index={0}
 *   onClick={() => setSelectedProject(projectData)}
 * />
 */
const ProjectCard = ({ project, onClick, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="project-card__container"
    >
      <Card
        variant="bordered"
        clickable
        onClick={onClick}
        className="project-card"
      >
        {/* Header with icon and gradient */}
        <div className={`project-card__header bg-gradient-to-r ${project.color}`}>
          <project.icon className="project-card__icon" />
          <div className="project-card__overlay">
            <span className="project-card__overlay-text">Cliquez pour voir plus</span>
          </div>
        </div>

        {/* Content section */}
        <div className="project-card__content">
          {/* Title and year */}
          <div className="project-card__header-content">
            <h3 className="project-card__title">
              {project.title}
            </h3>
            <span className="project-card__year">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="project-card__description">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="project-card__technologies">
            {project.technologies.slice(0, 3).map((tech) => (
              <TechTag key={tech} variant="primary">
                {tech}
              </TechTag>
            ))}
            {project.technologies.length > 3 && (
              <TechTag variant="secondary">
                +{project.technologies.length - 3}
              </TechTag>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
