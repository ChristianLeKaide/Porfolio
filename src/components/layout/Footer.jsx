// src/components/layout/Footer.jsx
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-white dark:bg-dark-secondary border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Christian Noukimi</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('footer.role')}</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t('footer.rights')}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
