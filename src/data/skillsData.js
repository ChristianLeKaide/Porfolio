import {
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt
} from 'react-icons/fa'

/**
 * Static skills data organized by category
 * @type {Array<Object>}
 */
export const skillsData = [
  {
    id: 1,
    category: "DevOps & Cloud",
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Docker", level: 90, description: "Containerisation d'applications multi-services" },
      { name: "Kubernetes", level: 75, description: "Orchestration de conteneurs" },
      { name: "GitLab CI/CD", level: 80, description: "Intégration et déploiement continus" },
      { name: "AWS", level: 70, description: "Cloud computing (AWS Certified Cloud Practitioner - en cours)" },
      { name: "SonarQube", level: 80, description: "Analyse statique et Quality Gate" },
      { name: "Trivy", level: 78, description: "Scan de vulnérabilités (SCA)" },
      { name: "Prometheus", level: 65, description: "Supervision et monitoring" }
    ]
  },
  {
    id: 2,
    category: "Langages",
    icon: FaCode,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Python", level: 90, description: "Développement web et scripting" },
      { name: "JavaScript", level: 88, description: "Développement web" },
      { name: "Java", level: 75, description: "Applications d'entreprise" },
      { name: "PHP", level: 72, description: "Backend web" }
    ]
  },
  {
    id: 3,
    category: "Frameworks",
    icon: FaLaptopCode,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "React", level: 88, description: "Frontend moderne" },
      { name: "Django", level: 88, description: "Framework Python" },
      { name: "Node.js", level: 80, description: "JavaScript backend" },
      { name: "Spring Boot", level: 70, description: "Framework Java" },
      { name: "Laravel", level: 70, description: "Framework PHP" },
      { name: "Bootstrap", level: 82, description: "CSS Framework" }
    ]
  },
  {
    id: 4,
    category: "Bases de données & Outils",
    icon: FaDatabase,
    color: "from-blue-400 to-indigo-500",
    skills: [
      { name: "PostgreSQL", level: 85, description: "Base de données relationnelle" },
      { name: "MySQL", level: 85, description: "Base de données SQL" },
      { name: "MongoDB", level: 75, description: "Base de données NoSQL" },
      { name: "SQLite", level: 78, description: "Base de données embarquée" },
      { name: "Postman", level: 85, description: "Test et documentation d'API" },
      { name: "Swagger (OpenAPI)", level: 85, description: "Documentation interactive d'API" }
    ]
  },
  {
    id: 5,
    category: "Sécurité applicative (DevSecOps)",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "SAST (SonarQube)", level: 80, description: "Analyse statique du code" },
      { name: "SCA (Trivy)", level: 78, description: "Analyse des dépendances et images Docker" },
      { name: "DAST (OWASP ZAP)", level: 72, description: "Tests dynamiques headless en CI/CD" },
      { name: "Sécurisation applicative", level: 80, description: "Protection SQLi, validation des entrées, gestion des sessions" }
    ]
  }
]
