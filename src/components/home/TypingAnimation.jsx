// src/components/home/TypingAnimation.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TypingAnimation = ({ texts, speed = 100 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed])

  return (
    <div className="text-2xl lg:text-3xl font-mono text-cyan-400 min-h-[3em] flex items-center justify-center lg:justify-start">
      <span className="mr-2">$</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inline-block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span className="ml-1 w-0.5 h-8 bg-cyan-400 animate-pulse"></span>
    </div>
  )
}

export default TypingAnimation