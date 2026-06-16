import { useState } from 'react'
import { motion } from 'framer-motion'
import PdfModal from './PdfModal'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function MenuSection({ t }) {
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <>
      <section id="menu" className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
              {t.menuSection.label}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-12">
              {t.menuSection.title}
            </h2>
            <div className="w-full max-w-2xl bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg shadow-primary/5 border border-surface-variant/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 blur-2xl" />
              <div className="flex flex-col gap-8 relative z-10">
                <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                  {t.menuSection.desc}
                </p>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setPdfOpen(true)}
                    className="flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-full font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all"
                  >
                    <span className="material-symbols-outlined">restaurant_menu</span>
                    {t.menuSection.btn}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {pdfOpen && <PdfModal onClose={() => setPdfOpen(false)} />}
    </>
  )
}
