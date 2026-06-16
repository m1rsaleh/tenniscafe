import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Contact({ t }) {
  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-stretch">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-surface-container-lowest p-10 rounded-xl shadow-lg shadow-primary/5 border border-surface-variant/50 flex flex-col justify-center"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-8">{t.contact.title}</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-surface mb-1">{t.contact.address}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">
                  {t.contact.addressText}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-surface mb-1">{t.contact.phone}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{t.contact.phoneText}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">schedule</span>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-surface mb-1">{t.contact.hours}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{t.contact.hoursText}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.3!2d10.0756!3d50.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2f5b3b3b3b3b3%3A0x0!2sLindesmühlpromenade+3%2C+97688+Bad+Kissingen!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
            title="Tennis-Café Bad Kissingen Karte"
          />
        </motion.div>
      </div>
    </section>
  )
}
