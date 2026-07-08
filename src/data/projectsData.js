import { FaFilm, FaShieldAlt, FaUniversity } from 'react-icons/fa'

/**
 * Static projects data for the portfolio
 * @type {Array<Object>}
 */
export const projectsData = [
  {
    id: 1,
    title: "CampusConnects",
    year: "2025",
    icon: FaUniversity,
    color: "from-cyan-400 to-blue-500",
    description: "Plateforme de gestion universitaire (web & mobile)",
    longDescription: "Conception et développement complet d'une plateforme de gestion universitaire : architecture fonctionnelle et UX/UI sur Adobe XD, frontend React fidèle aux maquettes, API REST backend (authentification JWT, rôles, gestion des cours) documentée avec Swagger, tests unitaires et déploiement sur VPS.",
    technologies: ["React", "REST API", "JWT", "Swagger", "Adobe XD", "VPS"],
    image: "/images/projects/campusconnects.jpg",
    details: [
      "Architecture fonctionnelle et maquettes UX/UI (Adobe XD)",
      "Authentification JWT et gestion des rôles",
      "Gestion des cours : création, inscription, suivi",
      "Documentation API interactive avec Swagger (OpenAPI)",
      "Tests unitaires et déploiement sur VPS"
    ],
    links: {
      github: "",
      demo: "https://campusconnects.pro/"
    }
  },
  {
    id: 2,
    title: "DevSecOps | Sécurité applicative automatisée",
    year: "2025",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    description: "Chaîne CI/CD sécurisée avec SAST, SCA et DAST",
    longDescription: "Conception et mise en œuvre d'une chaîne CI/CD DevSecOps sur GitHub Actions intégrant automatiquement les contrôles de sécurité à chaque commit et Pull Request : analyse statique, analyse des dépendances et tests dynamiques, avec génération et publication automatique de rapports de sécurité.",
    technologies: ["GitHub Actions", "SonarQube", "Trivy", "OWASP ZAP", "CI/CD"],
    image: "/images/projects/devsecops.jpg",
    details: [
      "SonarQube (SAST) avec Quality Gate bloquante",
      "Trivy (SCA) pour l'analyse des dépendances et images Docker",
      "OWASP ZAP (DAST) headless pour simuler des attaques sur l'app déployée",
      "Génération et publication automatique de rapports de sécurité en CI/CD",
      "Analyse, priorisation et correction des vulnérabilités détectées"
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    id: 3,
    title: "Application TV Show (TMDB API)",
    year: "2024",
    icon: FaFilm,
    color: "from-green-400 to-emerald-500",
    description: "Recherche et découverte de séries TV via l'API TMDB",
    longDescription: "Application web React permettant la recherche, la consultation et la découverte de séries TV à partir de l'API The Movie Database (TMDB) : affiches, synopsis, casting, notes, saisons, épisodes et recommandations, avec tri et filtrage avancés.",
    technologies: ["React", "React Hooks", "React Router", "TMDB API"],
    image: "/images/projects/tvshow.jpg",
    details: [
      "Intégration de l'API REST TMDB",
      "Interface responsive avec React Hooks et gestion d'état",
      "Navigation via React Router",
      "Tri et filtrage par popularité, genre, date de sortie et note",
      "Déploiement automatisé avec intégration continue via GitHub"
    ],
    links: {
      github: "",
      demo: ""
    }
  }
]
