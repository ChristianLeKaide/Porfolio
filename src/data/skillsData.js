import {
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt
} from 'react-icons/fa'

/**
 * Structural skills data (icon, color, skill names and levels).
 * Category names and skill descriptions are translated and merged in
 * at render time from the i18n resources (see skills.categories keys).
 * @type {Array<Object>}
 */
export const skillsData = [
  {
    id: 1,
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "GitLab CI/CD", level: 80 },
      { name: "AWS", level: 70 },
      { name: "SonarQube", level: 80 },
      { name: "Trivy", level: 78 },
      { name: "Prometheus", level: 65 }
    ]
  },
  {
    id: 2,
    icon: FaCode,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 75 },
      { name: "PHP", level: 72 }
    ]
  },
  {
    id: 3,
    icon: FaLaptopCode,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "React", level: 88 },
      { name: "Django", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "Laravel", level: 70 },
      { name: "Bootstrap", level: 82 }
    ]
  },
  {
    id: 4,
    icon: FaDatabase,
    color: "from-blue-400 to-indigo-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 78 },
      { name: "Postman", level: 85 },
      { name: "Swagger (OpenAPI)", level: 85 }
    ]
  },
  {
    id: 5,
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "SAST (SonarQube)", level: 80 },
      { name: "SCA (Trivy)", level: 78 },
      { name: "DAST (OWASP ZAP)", level: 72 },
      { name: "Sécurisation applicative", level: 80 }
    ]
  }
]
