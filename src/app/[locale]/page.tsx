'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ArrowRight, Sparkles, Lock, Zap, MessageSquare, Mic, Image as ImageIcon, Check } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'

export const dynamic = 'force-dynamic'

export default function LandingPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--background-secondary))]">
      {/* Navigation Header */}
      <nav className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center glow-blue">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold glow-text">DARK AI</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#showcase" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              {t('nav.showcase')}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/chat"
              className="px-6 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg font-semibold hover:scale-105 transition-transform glow-blue"
            >
              {t('nav.login')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--neon-blue)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--neon-blue)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--card))]/50 border border-[hsl(var(--border-glow))]/30 mb-8 glow-blue">
            <Lock className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span className="text-sm text-[hsl(var(--muted-foreground))]">{t('hero.badge')}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              {t('hero.titleGradient')}
            </span>
          </h1>

          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/chat"
              className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg font-semibold hover:scale-105 transition-transform glow-blue flex items-center gap-2 shadow-lg"
            >
              {t('hero.startExploring')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/models"
              className="px-8 py-4 bg-[hsl(var(--card))] border border-[hsl(var(--border-glow))]/50 text-[hsl(var(--foreground))] rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {t('hero.viewModels')}
            </Link>
          </div>

          {/* Hero Visual - AI Model Cards */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-neon shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: '🧠',
                    name: t('models.gpt4.name'),
                    desc: t('models.gpt4.description'),
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: '✨',
                    name: t('models.claude.name'),
                    desc: t('models.claude.description'),
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: '⚡',
                    name: t('models.gemini.name'),
                    desc: t('models.gemini.description'),
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    className="bg-[hsl(var(--card))]/80 rounded-xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--border-glow))]/50 transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${model.color} flex items-center justify-center text-2xl mb-4`}>
                      {model.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{model.name}</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">{t('features.title')}</h2>
          <div className="flex items-center gap-4">
            <span className="text-[hsl(var(--muted-foreground))]">{t('features.toggleLabel')}</span>
            <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-[hsl(var(--primary))]">
              <span className="inline-block h-6 w-6 transform rounded-full bg-white transition translate-x-7" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: t('features.voiceCommands.title'),
              desc: t('features.voiceCommands.description'),
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: <ImageIcon className="w-8 h-8" />,
              title: t('features.imageProcessing.title'),
              desc: t('features.imageProcessing.description'),
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: t('features.knowledgeAccess.title'),
              desc: t('features.knowledgeAccess.description'),
              gradient: 'from-green-500 to-emerald-500'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50 hover:border-[hsl(var(--border-glow))]/50 transition-all hover:scale-105 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50">
            <h3 className="text-2xl font-semibold mb-4">{t('features.aiLiberation.title')}</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              {t('features.aiLiberation.description')}
            </p>
            <div className="bg-[hsl(var(--card))]/50 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-blue))]" />
                <span>{t('features.aiLiberation.features.adaptive')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-purple))]" />
                <span>{t('features.aiLiberation.features.contextAware')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-blue))]" />
                <span>{t('features.aiLiberation.features.unlimited')}</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">{t('features.aiVoices.title')}</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{t('features.aiVoices.subtitle')}</p>
              </div>
            </div>
            <div className="h-20 bg-[hsl(var(--card))]/50 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-1">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] rounded-full"
                    style={{ height: `${Math.random() * 60 + 20}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50">
            <h3 className="text-2xl font-bold mb-2">{t('pricing.free.title')}</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">{t('pricing.free.description')}</p>
            <div className="text-4xl font-bold mb-8">
              {t('pricing.free.price')} <span className="text-lg font-normal text-[hsl(var(--muted-foreground))]">{t('pricing.free.period')}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                t('pricing.free.features.models'),
                t('pricing.free.features.interface'),
                t('pricing.free.features.messages'),
                t('pricing.free.features.speed')
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--neon-blue))]" />
                  <span className="text-[hsl(var(--muted-foreground))]">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=free"
              className="block w-full px-6 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border-glow))]/50 text-center rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {t('pricing.free.cta')}
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="glass-card rounded-2xl p-8 border-neon relative overflow-hidden glow-blue">
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white text-sm font-semibold rounded-bl-lg">
              {t('pricing.premium.badge')}
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('pricing.premium.title')}</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">{t('pricing.premium.description')}</p>
            <div className="text-4xl font-bold mb-8">
              {t('pricing.premium.price')} <span className="text-lg font-normal text-[hsl(var(--muted-foreground))]">{t('pricing.premium.period')}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                t('pricing.premium.features.models'),
                t('pricing.premium.features.messages'),
                t('pricing.premium.features.multimedia'),
                t('pricing.premium.features.speed'),
                t('pricing.premium.features.advanced'),
                t('pricing.premium.features.restrictions')
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--neon-blue))]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=premium"
              className="block w-full px-6 py-3 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white text-center rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {t('pricing.premium.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">{t('showcase.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: t('showcase.items.productivity'), badge: t('showcase.badges.new') },
            { title: t('showcase.items.research'), badge: '' },
            { title: t('showcase.items.creative'), badge: t('showcase.badges.hot') },
            { title: t('showcase.items.blog'), badge: '' },
            { title: t('showcase.items.code'), badge: t('showcase.badges.pro') },
            { title: t('showcase.items.terms'), badge: '' },
            { title: t('showcase.items.legal'), badge: '' },
            { title: t('showcase.items.subscribe'), badge: t('showcase.badges.premium') }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 border border-[hsl(var(--border))]/50 hover:border-[hsl(var(--border-glow))]/50 transition-all hover:scale-105 cursor-pointer text-center"
            >
              {item.badge && (
                <span className="inline-block px-2 py-1 bg-[hsl(var(--primary))] text-xs font-semibold rounded mb-2">
                  {item.badge}
                </span>
              )}
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-12 mt-20">
        <div className="container mx-auto px-6 text-center text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[hsl(var(--primary))]" />
            <span className="font-bold text-[hsl(var(--foreground))]">DARK AI</span>
          </div>
          <p className="text-sm">
            {t('footer.tagline')}
          </p>
          <p className="text-xs mt-4">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  )
}
