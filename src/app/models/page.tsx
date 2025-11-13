'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Brain, Palette, Code, Globe, MessageSquare, Lock } from 'lucide-react'

export const dynamic = 'force-dynamic'

const AI_MODELS = [
  {
    id: 'gpt4-turbo',
    icon: '🧠',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Advanced reasoning and problem-solving with unlimited context understanding',
    color: 'from-blue-500 to-cyan-500',
    capabilities: ['Unlimited reasoning', 'Code generation', 'Creative writing', 'Complex analysis'],
    features: [
      { icon: <Brain className="w-5 h-5" />, label: 'Advanced Reasoning' },
      { icon: <Code className="w-5 h-5" />, label: 'Code Expert' },
      { icon: <Globe className="w-5 h-5" />, label: 'Multilingual' }
    ],
    premium: true,
    status: 'Active'
  },
  {
    id: 'claude-opus',
    icon: '✨',
    name: 'Claude Opus',
    provider: 'Anthropic',
    description: 'Specialized in creative writing, analysis, and nuanced conversations',
    color: 'from-purple-500 to-pink-500',
    capabilities: ['Creative writing', 'Long-form content', 'Analysis', 'Research'],
    features: [
      { icon: <Palette className="w-5 h-5" />, label: 'Creative Expert' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Conversational' },
      { icon: <Brain className="w-5 h-5" />, label: 'Deep Analysis' }
    ],
    premium: true,
    status: 'Active'
  },
  {
    id: 'gemini-ultra',
    icon: '⚡',
    name: 'Gemini Ultra',
    provider: 'Google',
    description: 'Multimodal AI with advanced image understanding and processing',
    color: 'from-green-500 to-emerald-500',
    capabilities: ['Multimodal analysis', 'Image processing', 'Video understanding', 'Real-time data'],
    features: [
      { icon: <Zap className="w-5 h-5" />, label: 'Ultra Fast' },
      { icon: <Globe className="w-5 h-5" />, label: 'Multimodal' },
      { icon: <Brain className="w-5 h-5" />, label: 'Vision AI' }
    ],
    premium: true,
    status: 'Active'
  },
  {
    id: 'llama-3',
    icon: '🦙',
    name: 'Llama 3',
    provider: 'Meta',
    description: 'Open-source powerhouse with strong general capabilities',
    color: 'from-orange-500 to-red-500',
    capabilities: ['General knowledge', 'Conversation', 'Task completion', 'Code assistance'],
    features: [
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Open Source' },
      { icon: <Code className="w-5 h-5" />, label: 'Code Helper' },
      { icon: <Globe className="w-5 h-5" />, label: 'Multilingual' }
    ],
    premium: false,
    status: 'Active'
  },
  {
    id: 'mistral-large',
    icon: '🌪️',
    name: 'Mistral Large',
    provider: 'Mistral AI',
    description: 'European AI model with strong performance across multiple tasks',
    color: 'from-indigo-500 to-purple-500',
    capabilities: ['Reasoning', 'Code', 'Multilingual', 'Math & logic'],
    features: [
      { icon: <Brain className="w-5 h-5" />, label: 'Strong Reasoning' },
      { icon: <Code className="w-5 h-5" />, label: 'Code Proficient' },
      { icon: <Globe className="w-5 h-5" />, label: 'EU Model' }
    ],
    premium: true,
    status: 'Active'
  },
  {
    id: 'perplexity',
    icon: '🔍',
    name: 'Perplexity AI',
    provider: 'Perplexity',
    description: 'Research-focused AI with real-time web search capabilities',
    color: 'from-teal-500 to-cyan-500',
    capabilities: ['Real-time search', 'Research', 'Citations', 'Current events'],
    features: [
      { icon: <Globe className="w-5 h-5" />, label: 'Web Search' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Research AI' },
      { icon: <Zap className="w-5 h-5" />, label: 'Real-time' }
    ],
    premium: true,
    status: 'Active'
  }
]

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--background-secondary))]">
      {/* Navigation */}
      <nav className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center glow-blue">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold glow-text">DARK AI</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="px-6 py-2 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg font-semibold hover:scale-105 transition-transform glow-blue"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--card))]/50 border border-[hsl(var(--border-glow))]/30 mb-6">
          <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
          <span className="text-sm text-[hsl(var(--muted-foreground))]">6 Premium AI Models Available</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Choose Your
          <br />
          <span className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] bg-clip-text text-transparent">
            AI Model
          </span>
        </h1>

        <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-8">
          Access multiple state-of-the-art AI models through a single interface. Switch between models mid-conversation for specialized capabilities.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--neon-blue))] glow-blue" />
            <span className="text-[hsl(var(--muted-foreground))]">Premium Models</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--muted-foreground))]" />
            <span className="text-[hsl(var(--muted-foreground))]">Free Models</span>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_MODELS.map((model) => (
            <div
              key={model.id}
              className={`glass-card rounded-2xl p-6 border transition-all hover:scale-105 group relative ${
                model.premium
                  ? 'border-[hsl(var(--border-glow))]/50 glow-blue'
                  : 'border-[hsl(var(--border))]/50'
              }`}
            >
              {/* Premium Badge */}
              {model.premium && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] rounded-full text-xs font-semibold text-white">
                    <Lock className="w-3 h-3" />
                    PREMIUM
                  </div>
                </div>
              )}

              {/* Model Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {model.icon}
              </div>

              {/* Model Info */}
              <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">{model.provider}</p>
              <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${model.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className="mb-6">
                <div className="text-xs text-[hsl(var(--muted-foreground))] mb-2">Key Capabilities</div>
                <div className="flex flex-wrap gap-2">
                  {model.capabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[hsl(var(--card))]/50 border border-[hsl(var(--border))]/50 rounded-full text-xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">{model.status}</span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/chat?model=${model.id}`}
                className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-transform hover:scale-105 ${
                  model.premium
                    ? 'bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white'
                    : 'bg-[hsl(var(--card))] border border-[hsl(var(--border-glow))]/50 text-[hsl(var(--foreground))]'
                }`}
              >
                Start Conversation
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Model Comparison</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            Choose the right AI model for your specific needs
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 border border-[hsl(var(--border))]/50 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                <th className="text-left py-4 px-4">Model</th>
                <th className="text-left py-4 px-4">Best For</th>
                <th className="text-left py-4 px-4">Speed</th>
                <th className="text-left py-4 px-4">Context</th>
                <th className="text-left py-4 px-4">Access</th>
              </tr>
            </thead>
            <tbody>
              {AI_MODELS.map((model) => (
                <tr key={model.id} className="border-b border-[hsl(var(--border))]/30 hover:bg-[hsl(var(--card))]/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${model.color} flex items-center justify-center text-xl`}>
                        {model.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{model.name}</div>
                        <div className="text-xs text-[hsl(var(--muted-foreground))]">{model.provider}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-[hsl(var(--muted-foreground))]">
                    {model.capabilities[0]}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-4 rounded ${
                            i < (model.id === 'gemini-ultra' ? 5 : 4)
                              ? 'bg-[hsl(var(--neon-blue))]'
                              : 'bg-[hsl(var(--border))]'
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    {model.id === 'gpt4-turbo' ? '128K tokens' : model.id === 'claude-opus' ? '200K tokens' : '32K tokens'}
                  </td>
                  <td className="py-4 px-4">
                    {model.premium ? (
                      <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-full text-xs font-semibold">
                        Premium
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))]/50 rounded-full text-xs">
                        Free
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg font-semibold hover:scale-105 transition-transform glow-blue"
          >
            Start Exploring All Models
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-12">
        <div className="container mx-auto px-6 text-center text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[hsl(var(--primary))]" />
            <span className="font-bold text-[hsl(var(--foreground))]">DARK AI</span>
          </div>
          <p className="text-sm">
            Multiple AI models, one platform - Experience unrestricted AI conversations
          </p>
        </div>
      </footer>
    </div>
  )
}
