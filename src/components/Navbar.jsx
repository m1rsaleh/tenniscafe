import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-variant/30 transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <div className="font-headline-sm text-headline-sm text-primary tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
          Tennis-Café
        </div>

        <div className="hidden md:flex items-center gap-gutter">
          <button onClick={() => scrollTo('home')} className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1">
            {t.nav.home}
          </button>
          <button onClick={() => scrollTo('menu')} className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
            {t.nav.menu}
          </button>
          <button onClick={() => scrollTo('about')} className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
            {t.nav.about}
          </button>
          <button onClick={() => scrollTo('contact')} className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
            {t.nav.contact}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="font-label-md text-label-md text-primary cursor-pointer hover:opacity-80 transition-opacity"
          >
            {lang === 'de' ? 'DE | EN' : 'EN | DE'}
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-surface-container-lowest border-t border-surface-variant/30 px-margin-mobile py-4 flex flex-col gap-4"
        >
          {['home', 'menu', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors text-left py-2"
            >
              {t.nav[section]}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
