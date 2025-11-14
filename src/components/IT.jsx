import { useState } from 'react'
import { SectionTitle, sendContact } from './Shared'

const projects = [
  { name: 'SkyVoyage', stack: 'Java • SvelteKit • PostgreSQL', summary: 'Airline booking system with account, search, and reservation flows.' },
  { name: 'Detiabc.ru', stack: 'React • REST • SEO', summary: 'Live site for ABA therapy center with CMS-backed content.' },
  { name: 'Android App', stack: 'Java • Android', summary: 'In development; mobile app with offline-first features.' },
]

export default function IT({ t }) {
  const [open, setOpen] = useState(null)

  const [form, setForm] = useState({ name: '', email: '', subject: 'IT inquiry', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await sendContact({ ...form, source: 'it' })
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t('Full-Stack Development', 'Full-Stack разработка')}</SectionTitle>
          <p className="mt-4 text-gray-700 max-w-2xl">{t('I build maintainable, scalable apps focusing on real business outcomes.','Делаю масштабируемые приложения, ориентируясь на бизнес-результат.')}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div key={p.name} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:-translate-y-2 transition cursor-pointer" onClick={() => setOpen(idx)}>
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <div className="text-sm text-gray-600 mt-1">{p.stack}</div>
                <p className="text-gray-700 mt-2 text-sm">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4" onClick={() => setOpen(null)}>
          <div className="max-w-lg w-full bg-white rounded-2xl p-6" onClick={(e)=>e.stopPropagation()}>
            <h3 className="font-semibold text-gray-900">{projects[open].name}</h3>
            <div className="text-sm text-gray-600 mt-1">{projects[open].stack}</div>
            <p className="text-gray-700 mt-3">{projects[open].summary}</p>
            <button className="mt-6 px-4 py-2 rounded-lg bg-gray-900 text-white" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <SectionTitle>{t('Contact', 'Контакт')}</SectionTitle>
          {sent ? (
            <div className="mt-6 p-4 rounded-xl bg-green-50 text-green-700 border border-green-200">{t('Thanks! I will get back to you shortly.','Спасибо! Я свяжусь с вами в ближайшее время.')}</div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input className="border border-gray-300 rounded-lg px-3 py-2" placeholder={t('Your name','Ваше имя')} value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input type="email" className="border border-gray-300 rounded-lg px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
              <input className="border border-gray-300 rounded-lg px-3 py-2" placeholder={t('Subject','Тема')} value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} required />
              <textarea className="border border-gray-300 rounded-lg px-3 py-2" rows="4" placeholder={t('Message','Сообщение')} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
              <button disabled={loading} className="px-5 py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-60">{loading? t('Sending...','Отправка...'): t('Send message','Отправить')}</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
