# Tennis-Café Bad Kissingen — Claude Code Instructions

## Layihə Haqqında
Bad Kissingen, Almaniyada yerləşən Tennis-Café üçün informasiya məqsədli, müasir, çoxdilli veb sayt.  
Sayt tamamilə statikdir. Online sifariş, admin panel yoxdur.

---

## Sənlə Birlikdə Veriləcək Fayllar

- `stitch.html` — Stitch-dən alınan tam dizayn kodu (rənglər, fontlar, layout, bütün bölmələr)
- `menu.pdf` — Rəsmi menyu kartı → `public/menu.pdf` kimi yerləşdiriləcək
- `hero.jpg` — Café-nin xarici şəkli → `public/hero.jpg` kimi yerləşdiriləcək

---

## Tech Stack

```
React + Vite
Tailwind CSS
React Router DOM
Framer Motion
```

---

## Qurulum

```bash
npm create vite@latest tennis-cafe -- --template react
cd tennis-cafe
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom framer-motion
```

---

## Fayl Strukturu

```
tennis-cafe/
├── public/
│   ├── menu.pdf                ← menyu PDF (verilən fayl)
│   └── hero.jpg                ← café şəkli (verilən fayl)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── MenuSection.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MenuPage.jsx
│   ├── i18n.js
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Tailwind Konfiqurasiyası

`tailwind.config.js` faylına `stitch.html` içindəki `tailwind.config` obyektini **olduğu kimi** köçür.  
Rənglər, fontlar, font ölçüləri, spacing, border-radius — hamısı qorunmalıdır.

---

## i18n.js — Dil Faylı

```js
export const translations = {
  de: {
    nav: {
      home: "Home",
      menu: "Menü",
      about: "Über uns",
      contact: "Kontakt"
    },
    hero: {
      welcome: "Herzlich Willkommen",
      title: "Tennis-Café Bad Kissingen",
      subtitle: "Genießen Sie Kaffeespezialitäten und kleine Köstlichkeiten mit Blick auf die traditionsreichen Sandplätze.",
      cta: "Speisekarte ansehen"
    },
    about: {
      title: "Über uns",
      p1: "Inmitten der grünen Oase von Bad Kissingen vereint unser Tennis-Café sportliche Tradition mit gemütlicher Kaffeehauskultur. Hier, wo der Rhythmus der Ballwechsel den Takt vorgibt, laden wir Sie ein, in entspannter Atmosphäre zu verweilen.",
      p2: "Ob nach einem intensiven Match auf dem Center Court oder einfach als idyllischer Rückzugsort am Nachmittag – unsere sonnenüberflutete Terrasse bietet den perfekten Rahmen für hausgemachte Kuchen, frisch gebrühten Kaffee und erfrischende Kaltgetränke."
    },
    menuSection: {
      label: "Kulinarik",
      title: "Unsere Speisekarte",
      desc: "Entdecken Sie unsere Auswahl an Kaffeespezialitäten, hausgemachten Kuchen und leichten Snacks für die perfekte Stärkung zwischendurch.",
      btn: "Speisekarte öffnen"
    },
    contact: {
      title: "Kontakt & Anfahrt",
      address: "Adresse",
      addressText: "Lindesmühlpromenade 3\n97688 Bad Kissingen",
      phone: "Telefon",
      phoneText: "0971 / 785 5390",
      hours: "Öffnungszeiten",
      hoursText: "Täglich geöffnet während der Sommersaison. Wetterbedingte Änderungen vorbehalten."
    },
    footer: {
      imprint: "Impressum",
      privacy: "Datenschutz",
      directions: "Anfahrt",
      copy: "© 2024 Tennis-Café Bad Kissingen. Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About us",
      contact: "Contact"
    },
    hero: {
      welcome: "Welcome",
      title: "Tennis-Café Bad Kissingen",
      subtitle: "Enjoy coffee specialties and delicious bites with a view of the traditional clay courts.",
      cta: "View Menu"
    },
    about: {
      title: "About us",
      p1: "Nestled in the green heart of Bad Kissingen, our Tennis-Café blends sporting tradition with a cozy café culture. Where the rhythm of the game sets the pace, we invite you to relax and unwind.",
      p2: "Whether after an intense match on the center court or simply as a peaceful afternoon retreat — our sun-drenched terrace is the perfect setting for homemade cake, freshly brewed coffee, and refreshing cold drinks."
    },
    menuSection: {
      label: "Culinary",
      title: "Our Menu",
      desc: "Discover our selection of coffee specialties, homemade cakes, and light snacks — the perfect refreshment between sets.",
      btn: "Open Menu"
    },
    contact: {
      title: "Contact & Directions",
      address: "Address",
      addressText: "Lindesmühlpromenade 3\n97688 Bad Kissingen",
      phone: "Phone",
      phoneText: "0971 / 785 5390",
      hours: "Opening Hours",
      hoursText: "Open daily during summer season. Subject to weather conditions."
    },
    footer: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
      directions: "Directions",
      copy: "© 2024 Tennis-Café Bad Kissingen. All rights reserved."
    }
  }
}
```

---

## App.jsx — Routing + Dil State

```jsx
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
```

---

## MenuPage.jsx — PDF Görüntüləyici

```jsx
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
```

---

## Komponentlər — Stitch HTML-dən JSX-ə Çevirmə Qaydaları

`stitch.html` faylındakı hər bölməni ayrı komponentə çevir:

| HTML bölməsi | Komponent |
|---|---|
| `<nav>` | `Navbar.jsx` |
| `<section id="home">` | `Hero.jsx` |
| `<section id="about">` | `About.jsx` |
| `<section id="menu">` | `MenuSection.jsx` |
| `<section id="contact">` | `Contact.jsx` |
| `<footer>` | `Footer.jsx` |

**Çevirmə qaydaları:**
- `class` → `className`
- `href="#menu"` → `<Link to="/menu">` (MenuSection düyməsi üçün)
- `DE | EN` mətni → `<button onClick={() => setLang(lang === 'de' ? 'en' : 'de')}>` 
- Bütün hardcoded mətnlər → `{t.section.key}` formatında
- Stitch şəkilləri (`lh3.googleusercontent.com`) → `src="/hero.jpg"` (About şəkli üçün)
- Hero background → `style={{ backgroundImage: "url('/hero.jpg')" }}`
- Google Maps şəkli → real iframe embed (aşağıda)

---

## Google Maps Embed

Contact bölməsindəki xəritə şəklini bu iframe ilə əvəz et:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.!2d10.0756!3d50.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2f5b3b3b3b3b3%3A0x0!2sLindesmühlpromenade+3%2C+97688+Bad+Kissingen!5e0!3m2!1sde!2sde!4v1234567890"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl"
/>
```

---

## Framer Motion — Animasiyalar

Hər komponentə bu pattern ilə scroll animasiyası əlavə et:

```jsx
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// İstifadə:
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  ...
</motion.div>
```

**Animasiya tətbiq yerləri:**
- Hero mətn bloku → slide-up load animasiyası
- About bölməsi → sol tərəf fade-in, sağ tərəf fade-in (ayrı-ayrı)
- MenuSection kartı → fade-in
- Contact kartları → fade-in
- Navbar → yüklənəndə fade-in

---

## Routing — /menu

`yourdomain.com/menu` → birbaşa PDF açılır.  
Netlify/Vercel üçün redirect faylı lazımdır:

**Netlify** (`public/_redirects`):
```
/menu  /menu  200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/menu", "destination": "/menu" }]
}
```

---

## Mobil Responsivlik

Navbar-da hamburger menyu əlavə et (md breakpoint-dən aşağı):

```jsx
const [menuOpen, setMenuOpen] = useState(false)

// Mobile: hamburger icon → onClick → menuOpen toggle
// Nav linklər: hidden md:flex → mobile-da dropdown kimi açılır
```

---

## Yekun Yoxlama Siyahısı

Claude Code bu tapşırıqları tamamladıqdan sonra yoxla:

- [ ] `npm run dev` işləyir, xəta yoxdur
- [ ] `yourdomain.com/` — ana səhifə açılır
- [ ] `yourdomain.com/menu` — PDF tam ekranda açılır
- [ ] "← Zurück" düyməsi ana səhifəyə qaytarır
- [ ] DE/EN toggle bütün mətnləri dəyişdirir
- [ ] Mobil görünüş düzgündür (hamburger menyu işləyir)
- [ ] Bütün Stitch rəngləri qorunub
- [ ] Hero şəkli real foto ilə əvəz edilib
- [ ] Google Maps real ünvanı göstərir
- [ ] Scroll animasiyaları işləyir