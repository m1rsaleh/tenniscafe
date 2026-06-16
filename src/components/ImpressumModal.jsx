export default function ImpressumModal({ onClose }) {
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
          <span className="font-headline-sm text-headline-sm text-primary">Impressum</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-variant/40 transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant">
          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">Angaben gemäß § 5 TMG</h2>
            <p>Tennis-Café Bad Kissingen<br />
            Lindesmühlpromenade 3<br />
            97688 Bad Kissingen<br />
            Deutschland</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">Kontakt</h2>
            <p>Telefon: 0971 / 785 5390</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>Tennis-Café Bad Kissingen<br />
            Lindesmühlpromenade 3<br />
            97688 Bad Kissingen</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
              und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
              gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-label-md text-label-md text-on-surface">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
