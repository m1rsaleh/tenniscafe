import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import { translations } from './i18n'

export default function App() {
  const [lang, setLang] = useState('de')
  const t = translations[lang]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} setLang={setLang} />} />
        <Route path="/menu" element={<MenuPage t={t} />} />
      </Routes>
    </BrowserRouter>
  )
}
