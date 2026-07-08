import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const [selectedSkill, setSelectedSkill] = useState(null)

  const translatedCategories = t('skills.categories', { returnObjects: true })
  const categories = skillsData.map((cat, index) => ({
    ...cat,
    category: translatedCategories[index].category,
    skills: cat.skills.map((skill, skillIndex) => ({
      ...skill,
      description: translatedCategories[index].skills[skillIndex].description
    }))
  }))

  return (
    <div className="skills-page">
      <div className="skills-page__container">
        {/* Page header */}
        <SectionHeader
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        {/* Skills grid */}
        <div className="skills-page__grid">
          {categories.map((category, index) => (
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
              {t('skills.learning')}
              <span className="skills-page__learning-highlight">
                {t('skills.learningHighlight')}
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
