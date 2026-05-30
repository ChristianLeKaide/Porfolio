// src/components/common/Loader.jsx
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark-primary flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full"
        />
        <p className="mt-4 text-cyan-400">Chargement...</p>
      </div>
    </div>
  )
}

export default Loader