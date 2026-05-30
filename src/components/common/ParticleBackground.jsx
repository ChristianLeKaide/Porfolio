// src/components/common/ParticleBackground.jsx
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'


// Ce composant React sert à créer un fond animé de particules interactives pour ton portfolio.
const ParticleBackground = () => {

  // Cette fonction initialise le moteur graphique des particules.
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 120, //Limite les FPS (images par seconde)
        particles: {

        // Couleur des particules
          color: { value: '#0ea5e9' },

          // Les lignes entre particules
          links: {
            color: '#0ea5e9',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          // Mouvement des particules
          move: {
            enable: true, //Active l’animation.
            outModes: { default: 'bounce' }, //Quand une particule touche le bord elle rebondit
            random: false,
            speed: 1,
            straight: false,
          },

          // Nombre de particules
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },

        // Optimise l’affichage sur :écrans Retina,écrans HD,MacBook, smartphones récents
        detectRetina: true,
      }}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default ParticleBackground