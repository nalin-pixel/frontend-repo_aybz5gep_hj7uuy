import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionTitle, Stat, Badge } from './Shared'

export default function Landing({ t }) {
  const projects = [
    { name: 'SkyVoyage', tag: 'IT' },
    { name: 'Detiabc.ru', tag: 'IT' },
    { name: 'Soorpriz', tag: 'Marketing' },
    { name: 'Dobrosvit', tag: 'Marketing' },
  ]

  return (
    <div className="">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <Badge>2+ {t('years experience', 'года опыта')}</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Leonardo Notargiacomo
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{t('Marketing & Full-Stack Development', 'Маркетинг и Full-Stack разработка')}</span>
            </h1>
            <p className="mt-6 text-gray-700 max-w-xl">
              {t('I help businesses grow through data-driven Meta Ads and robust, scalable web apps.', 'Помогаю бизнесу расти с помощью Meta Ads и надежных веб-приложений.')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/marketing" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">{t('Explore Marketing Portfolio', 'Маркетинговое портфолио')}</Link>
              <Link to="/it" className="px-5 py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition shadow-lg shadow-cyan-600/20">{t('Explore IT Portfolio', 'ИТ портфолио')}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t("Key Metrics", "Ключевые метрики")}</SectionTitle>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label={t('Production apps', 'Продакшн приложений')} value="3" />
            <Stat label={t('Ad spend managed', 'Управлено рекламным бюджетом')} value="$6K+" />
            <Stat label={t('Best ROAS', 'Лучший ROAS')} value="3.6x" />
            <Stat label={t('Years experience', 'Годы опыта')} value="2+" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t("What I'm Into", "Что мне интересно")}</SectionTitle>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: t('Full-Stack Development', 'Full-Stack разработка'),
              desc: t('Building robust apps with modern stacks.', 'Создание надежных приложений на современных стеках.')
            }, {
              title: t('Teamwork & Collaboration', 'Командная работа и сотрудничество'),
              desc: t('Clear communication and ownership.', 'Четкая коммуникация и ответственность.')
            }, {
              title: t('Business Value Focus', 'Фокус на ценности бизнеса'),
              desc: t('Results, not vanity metrics.', 'Результаты, а не пустые метрики.')
            }].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:-translate-y-2 transition-transform">
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>{t('Recent Projects', 'Недавние проекты')}</SectionTitle>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map(p => (
              <div key={p.name} className="p-4 rounded-xl bg-white border border-gray-200 hover:-translate-y-2 transition shadow-sm">
                <div className="text-sm text-blue-600 font-medium">{p.tag}</div>
                <div className="mt-1 font-semibold text-gray-900">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
