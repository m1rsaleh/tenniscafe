import { useState } from 'react'
import ImpressumModal from './ImpressumModal'
import DatenschutzModal from './DatenschutzModal'

export default function Footer({ t }) {
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  return (
    <>
      <footer className="w-full py-12 bg-tertiary mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop gap-gutter">
          <div className="font-headline-sm text-headline-sm text-on-tertiary mb-6 md:mb-0">
            Tennis-Café
          </div>
          <div className="flex gap-6 mb-6 md:mb-0">
            <button
              onClick={() => setShowImpressum(true)}
              className="font-body-md text-body-md text-tertiary-fixed/80 hover:text-on-tertiary hover:underline transition-all"
            >
              {t.footer.imprint}
            </button>
            <button
              onClick={() => setShowDatenschutz(true)}
              className="font-body-md text-body-md text-tertiary-fixed/80 hover:text-on-tertiary hover:underline transition-all"
            >
              {t.footer.privacy}
            </button>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Lindesmühlpromenade+3,+97688+Bad+Kissingen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-body-md text-tertiary-fixed/80 hover:text-on-tertiary hover:underline transition-all"
            >
              {t.footer.directions}
            </a>
          </div>
          <div className="font-body-md text-body-md text-tertiary-fixed/80 text-center md:text-right">
            {t.footer.copy}
          </div>
        </div>
      </footer>

      {showImpressum && <ImpressumModal onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <DatenschutzModal onClose={() => setShowDatenschutz(false)} />}
    </>
  )
}
