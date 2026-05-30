// src/components/layout/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark-secondary border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Christian Noukimi</h3>
            <p className="text-gray-400">Expert en Cybersécurité</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © 2024 Christian Noukimi. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm">
              Développé avec React, Tailwind CSS et Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer