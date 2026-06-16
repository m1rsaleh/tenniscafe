import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MenuSection from '../components/MenuSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ t, lang, setLang }) {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-background font-body-md antialiased">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <MenuSection t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
