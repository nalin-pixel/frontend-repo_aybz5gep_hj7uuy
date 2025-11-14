import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Globe, ChevronRight, Calendar, Mail, Phone, Code, BadgeCheck } from 'lucide-react'

export function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'EN')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])
  const t = (en, ru) => (lang === 'EN' ? en : ru)
  return { lang, setLang, t }
}

export function Header({ langState }) {
  const { lang, setLang, t } = langState
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: t('Home', 'Главная') },
    { to: '/marketing', label: t('Marketing', 'Маркетинг') },
    { to: '/it', label: t('IT', 'ИТ') },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-gray-800 tracking-tight">
          Leonardo Notargiacomo
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              {n.label}
            </NavLink>
          ))}
          <button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300" onClick={() => setLang(lang === 'EN' ? 'RU' : 'EN')}>
            <Globe className="w-4 h-4" /> {lang}
          </button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80">
          {navItems.map(n => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              {n.label}
            </NavLink>
          ))}
          <button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-gray-200" onClick={() => setLang(lang === 'EN' ? 'RU' : 'EN')}>
            <Globe className="w-4 h-4" /> {lang}
          </button>
        </div>
      )}
    </header>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{children}</span>
    </h2>
  )
}

export function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-white/60 border border-gray-200 shadow-sm">
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium">
      <BadgeCheck className="w-3 h-3" /> {children}
    </span>
  )
}

export async function sendContact(data) {
  const base = import.meta.env.VITE_BACKEND_URL || ''
  const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  if (!res.ok) throw new Error('Failed to send')
  return res.json()
}
