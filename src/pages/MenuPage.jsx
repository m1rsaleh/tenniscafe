import { Link } from 'react-router-dom'

export default function MenuPage({ t }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md shadow-lg hover:opacity-90 transition-opacity"
        >
          ← Zurück / Back
        </Link>
      </div>
      <iframe
        src="/menu.pdf"
        className="w-full h-full border-0"
        title="Speisekarte"
      />
    </div>
  )
}
