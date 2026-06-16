import { motion } from 'framer-motion'

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function About({ t }) {
  return (
    <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <h2 className="font-headline-md text-headline-md text-primary">{t.about.title}</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {t.about.p1}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {t.about.p2}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">coffee</span>
            <span className="material-symbols-outlined text-primary">sports_tennis</span>
            <span className="material-symbols-outlined text-primary">park</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative order-1 md:order-2 h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-primary/10"
        >
          <img
            src="/4.jpeg"
            alt="Tennis-Café Bad Kissingen"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
