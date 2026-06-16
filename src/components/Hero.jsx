import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PdfModal from './PdfModal'

const images = ['/1.webp', '/2.webp']

export default function Hero({ t }) {
  const [current, setCurrent] = useState(0)
  const [pdfOpen, setPdfOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[current]}')` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center max-w-3xl px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-6"
        >
          <span className="font-label-md text-label-md text-on-primary tracking-[0.2em] uppercase">
            {t.hero.welcome}
          </span>
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-primary drop-shadow-md">
            {t.hero.title}
          </h1>
          <p className="font-body-lg text-body-lg text-surface max-w-xl mx-auto drop-shadow-sm">
            {t.hero.subtitle}
          </p>
          <button
            onClick={() => setPdfOpen(true)}
            className="mt-8 px-8 py-4 bg-primary text-on-primary rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-lg shadow-primary/20"
          >
            {t.hero.cta}
          </button>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-on-primary w-6' : 'bg-on-primary/50'
              }`}
              aria-label={`Şəkil ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {pdfOpen && <PdfModal onClose={() => setPdfOpen(false)} />}
    </>
  )
}
