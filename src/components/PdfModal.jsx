import { useState, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function PdfModal({ onClose }) {
  const [numPages, setNumPages] = useState(null)
  const [containerWidth, setContainerWidth] = useState(600)

  const containerRef = useCallback((node) => {
    if (node) setContainerWidth(node.getBoundingClientRect().width)
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-surface-container-lowest rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-variant/40 shrink-0">
          <span className="font-headline-sm text-headline-sm text-primary">Speisekarte</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-variant/40 transition-colors text-on-surface-variant"
            aria-label="Schließen"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={containerRef} className="overflow-y-auto flex flex-col items-center gap-2 p-4">
          <Document
            file="/menu.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="py-20 text-on-surface-variant font-body-md text-body-md">Yüklənir...</div>
            }
          >
            {Array.from({ length: numPages ?? 0 }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                width={Math.min(containerWidth - 32, 760)}
                className="shadow-md rounded"
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}
