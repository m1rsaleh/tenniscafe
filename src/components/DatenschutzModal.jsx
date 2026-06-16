export default function DatenschutzModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-surface-container-lowest rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-variant/40 shrink-0">
          <span className="font-headline-sm text-headline-sm text-primary">Datenschutzerklärung</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-variant/40 transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant">
          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">1. Datenschutz auf einen Blick</h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
              personenbezogenen Daten auf unserer Website auf. Wir nehmen den Schutz Ihrer persönlichen Daten
              sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">2. Verantwortliche Stelle</h2>
            <p>
              Tennis-Café Bad Kissingen<br />
              Lindesmühlpromenade 3<br />
              97688 Bad Kissingen<br />
              Telefon: 0971 / 785 5390
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Diese Website ist rein informatorisch und erhebt keine personenbezogenen Daten der Besucher.
              Es werden keine Cookies gesetzt, keine Formulare angeboten und keine Nutzerdaten gespeichert oder
              an Dritte weitergegeben.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">4. Google Maps</h2>
            <p>
              Diese Seite nutzt über eine API den Kartendienst Google Maps der Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig,
              Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie
              in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://www.google.de/intl/de/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80"
              >
                google.de/intl/de/policies/privacy
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
              Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten (Art. 15–21 DSGVO).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
