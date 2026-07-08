import { motion } from 'framer-motion'
import Card from '../common/Card'
import '../../styles/components/SkillCard.css'

/**
 * SkillCard Component - Displays skill category with progress bars
 *
 * @component
 * @param {Object} category - Skill category object
 * @param {number} category.id - Unique category identifier
 * @param {string} category.category - Category name
 * @param {JSX.Element} category.icon - Category icon component
 * @param {string} category.color - Gradient color class
 * @param {Array<Object>} category.skills - Array of skill objects
 * @param {function} onSkillHover - Handler for skill hover events
 * @param {number} [index=0] - Animation delay index
 * @returns {JSX.Element} Skill category card with progress bars
 *
 * @example
 * <SkillCard
 *   category={categoryData}
 *   index={0}
 *   onSkillHover={handleSkillHover}
 * />
 */
const SkillCard = ({ category, onSkillHover, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-card__container"
    >
      <Card variant="bordered" className="skill-card">
        {/* Category header with icon */}
        <div className={`skill-card__header bg-gradient-to-r ${category.color}`}>
          <div className="skill-card__icon-wrapper">
            <category.icon className="skill-card__icon" />
          </div>
          <h2 className="skill-card__title">
            {category.category}
          </h2>
        </div>

        {/* Skills list */}
        <div className="skill-card__content">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
              className="skill-card__skill"
              onMouseEnter={() => onSkillHover(skill)}
              onMouseLeave={() => onSkillHover(null)}
            >
              {/* Skill name and level */}
              <div className="skill-card__header-row">
                <span className="skill-card__name">
                  {skill.name}
                </span>
                <span className="skill-card__level">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="skill-card__progress-wrapper">
                <div className="skill-card__progress-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    className={`skill-card__progress-fill bg-gradient-to-r ${category.color}`}
                  />
                </div>
              </div>

              {/* Optional description on hover */}
              {skill.description && (
                <p className="skill-card__description">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default SkillCard
