// src/pages/Skills.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaShieldAlt, FaCloud, FaCode, FaLaptopCode, 
  FaNetworkWired, FaDatabase, FaLock, FaDocker 
} from 'react-icons/fa'

const skillsData = [
  {
    category: "Cybersécurité",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "Nmap", level: 90, description: "Scan de ports et découverte réseau" },
      { name: "Nessus", level: 85, description: "Analyse de vulnérabilités" },
      { name: "BurpSuite", level: 88, description: "Test d'intrusion web" },
      { name: "Metasploit", level: 82, description: "Framework d'exploitation" },
      { name: "ISO 27001", level: 80, description: "Normes de sécurité" },
      { name: "Cryptographie", level: 78, description: "Chiffrement et sécurité" }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Docker", level: 85, description: "Containerisation" },
      { name: "Kubernetes", level: 75, description: "Orchestration" },
      { name: "GitLab CI/CD", level: 80, description: "Intégration continue" },
      { name: "AWS", level: 70, description: "Cloud computing" }
    ]
  },
  {
    category: "Langages",
    icon: FaCode,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Python", level: 90, description: "Scripting et automatisation" },
      { name: "JavaScript", level: 85, description: "Développement web" },
      { name: "Java", level: 75, description: "Applications d'entreprise" },
      { name: "PHP", level: 75, description: "Backend web" },
      { name: "C", level: 70, description: "Programmation système" }
    ]
  },
  {
    category: "Frameworks",
    icon: FaLaptopCode,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Django", level: 88, description: "Framework Python" },
      { name: "React", level: 82, description: "Frontend moderne" },
      { name: "Node.js", level: 80, description: "JavaScript backend" },
      { name: "Spring Boot", level: 72, description: "Framework Java" },
      { name: "Bootstrap", level: 85, description: "CSS Framework" }
    ]
  },
  {
    category: "Systèmes & Réseaux",
    icon: FaNetworkWired,
    color: "from-yellow-400 to-orange-500",
    skills: [
      { name: "Linux", level: 90, description: "Administration système" },
      { name: "TCP/IP", level: 85, description: "Protocoles réseau" },
      { name: "Windows Server", level: 80, description: "Active Directory" },
      { name: "Cisco", level: 75, description: "Équipement réseau" }
    ]
  },
  {
    category: "Bases de données",
    icon: FaDatabase,
    color: "from-blue-400 to-indigo-500",
    skills: [
      { name: "PostgreSQL", level: 85, description: "Base de données relationnelle" },
      { name: "MySQL", level: 80, description: "Base de données SQL" },
      { name: "MongoDB", level: 75, description: "Base de données NoSQL" },
      { name: "Redis", level: 70, description: "Cache et files d'attente" }
    ]
  }
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

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
            Compétences Techniques
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et de mon expertise dans le domaine de la cybersécurité
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Grille des compétences */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="bg-dark-secondary/30 rounded-xl overflow-hidden cyber-border hover:border-cyan-500/40 transition-all">
                {/* En-tête de catégorie */}
                <div className={`bg-gradient-to-r ${category.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <category.icon className="text-white text-2xl" />
                    <h2 className="text-xl font-bold text-white">{category.category}</h2>
                  </div>
                </div>

                {/* Liste des compétences */}
                <div className="p-6 space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="group cursor-pointer"
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onMouseLeave={() => setSelectedSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barre de progression */}
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>

                      {/* Description (apparaît au survol) */}
                      {selectedSkill === skill && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-xs text-gray-400"
                        >
                          {skill.description}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section "En cours d'apprentissage" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 rounded-full">
            <FaLock className="text-cyan-400" />
            <span className="text-gray-300">
              En apprentissage continu : <span className="text-cyan-400">Kubernetes Avancé | AWS Security | IA & Cybersécurité</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills