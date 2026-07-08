import { FaFilm, FaShieldAlt, FaUniversity } from 'react-icons/fa'

/**
 * Structural projects data (icon, color, technologies, year, links, image).
 * Title/description/longDescription/details are translated and merged in
 * at render time from the i18n resources (see projects.items keys).
 * @type {Array<Object>}
 */
export const projectsData = [
  {
    id: 1,
    year: "2025",
    icon: FaUniversity,
    color: "from-cyan-400 to-blue-500",
    technologies: ["React", "REST API", "JWT", "Swagger", "Adobe XD", "VPS"],
    image: "/images/projects/campusconnects.jpg",
    links: {
      github: "",
      demo: "https://campusconnects.pro/"
    }
  },
  {
    id: 2,
    year: "2025",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    technologies: ["GitHub Actions", "SonarQube", "Trivy", "OWASP ZAP", "CI/CD"],
    image: "/images/projects/devsecops.jpg",
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: 3,
    year: "2024",
    icon: FaFilm,
    color: "from-green-400 to-emerald-500",
    technologies: ["React", "React Hooks", "React Router", "TMDB API"],
    image: "/images/projects/tvshow.jpg",
    links: {
      github: "",
      demo: ""
    }
  }
]
