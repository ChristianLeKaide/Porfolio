import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLock } from 'react-icons/fa'
import SectionHeader from '../components/common/SectionHeader'
import SkillCard from '../components/skills/SkillCard'
import { skillsData } from '../data/skillsData'
import '../styles/pages/Skills.css'

/**
 * Skills Page - Display all technical skills and competencies
 * @component
 * @returns {JSX.Element} Skills page with skill categories
 */
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <div className="skills-page">
      <div className="skills-page__container">
        {/* Page header */}
        <SectionHeader
          title="Compétences Techniques"
          subtitle="Un aperçu de mes compétences techniques en développement full stack, DevOps et DevSecOps"
        />

        {/* Skills grid */}
        <div className="skills-page__grid">
          {skillsData.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              onSkillHover={setSelectedSkill}
            />
          ))}
        </div>

        {/* Continuous learning section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="skills-page__learning"
        >
          <div className="skills-page__learning-content">
            <FaLock className="skills-page__learning-icon" />
            <span className="skills-page__learning-text">
              En apprentissage continu :
              <span className="skills-page__learning-highlight">
                Kubernetes Avancé | AWS Certified Cloud Practitioner | IA & DevOps
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
