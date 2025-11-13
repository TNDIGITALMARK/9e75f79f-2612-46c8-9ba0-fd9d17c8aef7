'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Lock, Zap, MessageSquare, Mic, Image as ImageIcon, Check } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function LandingPage() {
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
              Features
            </a>
            <a href="#pricing" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Pricing
            </a>
            <a href="#showcase" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Showcase
            </a>
          </div>
          <Link
            href="/chat"
            className="px-6 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg font-semibold hover:scale-105 transition-transform glow-blue"
          >
            Log In
          </Link>
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
            <span className="text-sm text-[hsl(var(--muted-foreground))]">Limitless AI Technology</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Unrestricted AI
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
              Without Boundaries
            </span>
          </h1>

          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-3xl mx-auto leading-relaxed">
            Access multiple premium AI models through a single interface. Experience conversations without limitations.
            Welcome to the future of unrestricted AI exploration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/chat"
              className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg font-semibold hover:scale-105 transition-transform glow-blue flex items-center gap-2 shadow-lg"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/models"
              className="px-8 py-4 bg-[hsl(var(--card))] border border-[hsl(var(--border-glow))]/50 text-[hsl(var(--foreground))] rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              View AI Models
            </Link>
          </div>

          {/* Hero Visual - AI Model Cards */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-neon shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: '🧠',
                    name: 'GPT-4 Turbo',
                    desc: 'Unlimited reasoning power',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: '✨',
                    name: 'Claude Opus',
                    desc: 'Creative writing specialist',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: '⚡',
                    name: 'Gemini Ultra',
                    desc: 'Multimodal analysis',
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
          <h2 className="text-4xl font-bold">Features</h2>
          <div className="flex items-center gap-4">
            <span className="text-[hsl(var(--muted-foreground))]">Premium / Free</span>
            <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-[hsl(var(--primary))]">
              <span className="inline-block h-6 w-6 transform rounded-full bg-white transition translate-x-7" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: 'Voice Commands & Synthesis',
              desc: 'Interact naturally through voice with real-time transcription and response synthesis',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: <ImageIcon className="w-8 h-8" />,
              title: 'Advanced Image Processing',
              desc: 'Upload and analyze images with advanced computer vision capabilities',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Unrestricted Knowledge Access',
              desc: 'Explore any topic without content filters or artificial limitations',
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
            <h3 className="text-2xl font-semibold mb-4">AI-Driven Liberation</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Experience conversations that adapt to your needs without artificial restrictions
            </p>
            <div className="bg-[hsl(var(--card))]/50 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-blue))]" />
                <span>Adaptive AI personalities</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-purple))]" />
                <span>Context-aware responses</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--neon-blue))]" />
                <span>Unlimited conversation depth</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">AI Voices Liberation</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Natural voice interactions</p>
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
          <h2 className="text-4xl font-bold mb-4">Choose Your Access Level</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            Start free or unlock unlimited potential with Premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">Limited AI model access</p>
            <div className="text-4xl font-bold mb-8">
              $0 <span className="text-lg font-normal text-[hsl(var(--muted-foreground))]">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Access to 2 AI models',
                'Basic chat interface',
                'Limited daily messages',
                'Standard response speed'
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
              Start Free
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="glass-card rounded-2xl p-8 border-neon relative overflow-hidden glow-blue">
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white text-sm font-semibold rounded-bl-lg">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">Unlimited everything</p>
            <div className="text-4xl font-bold mb-8">
              $29 <span className="text-lg font-normal text-[hsl(var(--muted-foreground))]">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Access to ALL AI models',
                'Unlimited messages',
                'Voice & image support',
                'Priority response speed',
                'Advanced features',
                'No content restrictions'
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
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Showcase</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Productivity Tools', badge: 'New' },
            { title: 'Research AI', badge: '' },
            { title: 'Creative Content', badge: 'Hot' },
            { title: 'Blog Support', badge: '' },
            { title: 'Code AI Dev', badge: 'Pro' },
            { title: 'Terms', badge: '' },
            { title: 'Legal Cookies', badge: '' },
            { title: 'Subscribe', badge: 'Premium' }
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
            Limitless AI Technology Platform - Unrestricted Exploration
          </p>
          <p className="text-xs mt-4">
            © 2025 DARK AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
