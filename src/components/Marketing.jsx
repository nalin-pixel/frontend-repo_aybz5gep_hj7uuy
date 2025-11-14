import { useEffect, useMemo, useState } from 'react'
import { SectionTitle, sendContact } from './Shared'

const categories = ['All', 'E-commerce', 'Lead Gen']

const initial = [
  { title: 'Soorpriz', category: 'E-commerce', metric: '3.6x ROAS', budget: '$5.5K', summary: 'Scaled ROAS while testing creatives and audience stacks' },
  { title: 'Dobrosvit', category: 'Lead Gen', metric: '€7 CPL', budget: '70 leads', summary: 'Generated 70 qualified leads via conversion-optimized funnels' },
  { title: 'Fertility Therapy', category: 'Lead Gen', metric: '€18.75 CPL', budget: '8 calls', summary: 'Delivered 8 booked calls through targeted lead gen campaigns' },
]

export default function Marketing({ t }) {
  const [active, setActive] = useState('All')
  const data = useMemo(() => active === 'All' ? initial : initial.filter(i => i.category === active), [active])

  const [form, setForm] = useState({ name: '', email: '', subject: 'Marketing inquiry', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await sendContact({ ...form, source: 'marketing' })
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t('Meta Ads Media Buying', 'Медиа-байинг Meta Ads')}</SectionTitle>
          <p className="mt-4 text-gray-700 max-w-2xl">
            {t('I plan, launch, and optimize paid social campaigns with a focus on ROAS and lead quality.','Планирую, запускаю и оптимизирую кампании с фокусом на ROAS и качество лидов.')}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full border ${active===c? 'bg-blue-600 text-white border-blue-600':'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>{t(c,c)}</button>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:-translate-y-2 transition">
                <div className="text-sm text-blue-600 font-medium">{item.category}</div>
                <h3 className="mt-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mt-2 text-sm">{item.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900">{item.metric}</span>
                  <span className="text-gray-600">{item.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t('Book a Call', 'Назначить звонок')}</SectionTitle>
          <p className="mt-2 text-gray-600">{t('Pick a slot that works for you.','Выберите удобное время.')}</p>
          <div className="mt-6 rounded-2xl border border-gray-200 overflow-hidden">
            <iframe title="Calendly" className="w-full h-[720px]" src="https://calendly.com/leonardo-notargiacomo/30min?hide_gdpr_banner=1"></iframe>
          </div>
        </div>
      </section>

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
              <button disabled={loading} className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">{loading? t('Sending...','Отправка...'): t('Send message','Отправить')}</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
