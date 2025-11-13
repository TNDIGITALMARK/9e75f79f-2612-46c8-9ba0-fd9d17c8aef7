'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, Mic, Image as ImageIcon, Sparkles, Menu, Plus, Settings, MessageSquare, User, ChevronDown } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const AI_MODELS = [
  { id: 'gpt4-turbo', name: 'GPT-4 Turbo', icon: '🧠', color: 'from-blue-500 to-cyan-500' },
  { id: 'claude-opus', name: 'Claude Opus', icon: '✨', color: 'from-purple-500 to-pink-500' },
  { id: 'gemini-ultra', name: 'Gemini Ultra', icon: '⚡', color: 'from-green-500 to-emerald-500' },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to DARK AI. I\'m your unrestricted AI assistant. How can I help you explore today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0])
  const [isRecording, setIsRecording] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: `[${selectedModel.name}] This is a simulated response. In production, this would connect to the actual AI model API and provide unrestricted, intelligent responses based on your query.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="h-screen flex bg-[hsl(var(--background))] overflow-hidden">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden border-r border-[hsl(var(--border))] bg-[hsl(var(--background-secondary))]`}>
        <div className="h-full flex flex-col p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center glow-blue">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold glow-text">DARK AI</span>
          </Link>

          {/* New Chat Button */}
          <button className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg font-semibold hover:scale-105 transition-transform glow-blue flex items-center justify-center gap-2 mb-6">
            <Plus className="w-5 h-5" />
            New Chat
          </button>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto space-y-2 mb-4">
            <div className="text-xs text-[hsl(var(--muted-foreground))] mb-2 px-2">Recent Chats</div>
            {[
              'Quantum computing basics',
              'Creative writing tips',
              'Data analysis methods',
              'Philosophy discussion',
              'Code optimization'
            ].map((chat, idx) => (
              <button
                key={idx}
                className="w-full px-3 py-2 text-left text-sm text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--card))] rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="truncate">{chat}</span>
              </button>
            ))}
          </div>

          {/* User Profile */}
          <div className="border-t border-[hsl(var(--border))] pt-4">
            <button className="w-full px-3 py-2 flex items-center gap-3 hover:bg-[hsl(var(--card))] rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold">Premium User</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Unlimited access</div>
              </div>
              <Settings className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-[hsl(var(--card))] rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* AI Model Selector */}
            <div className="relative">
              <button className="flex items-center gap-3 px-4 py-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))]/50 rounded-lg hover:border-[hsl(var(--border-glow))]/50 transition-all">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedModel.color} flex items-center justify-center text-lg`}>
                  {selectedModel.icon}
                </div>
                <span className="font-semibold">{selectedModel.name}</span>
                <ChevronDown className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
              </button>
            </div>
          </div>

          <Link
            href="/models"
            className="px-4 py-2 text-sm text-[hsl(var(--primary))] hover:text-[hsl(var(--neon-blue-bright))] transition-colors"
          >
            View All Models
          </Link>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedModel.color} flex items-center justify-center flex-shrink-0 text-xl`}>
                    {selectedModel.icon}
                  </div>
                )}

                <div
                  className={`max-w-[70%] ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white'
                      : 'glass-card border border-[hsl(var(--border))]/50'
                  } rounded-2xl px-6 py-4`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-white/70' : 'text-[hsl(var(--muted-foreground))]'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-magenta))] flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {false && (
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedModel.color} flex items-center justify-center flex-shrink-0 text-xl`}>
                  {selectedModel.icon}
                </div>
                <div className="glass-card border border-[hsl(var(--border))]/50 rounded-2xl px-6 py-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-4 border-neon">
              <div className="flex items-end gap-3">
                {/* Image Upload */}
                <button className="p-3 hover:bg-[hsl(var(--card))] rounded-lg transition-colors text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                  <ImageIcon className="w-5 h-5" />
                </button>

                {/* Text Input */}
                <div className="flex-1">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSend()
                      }
                    }}
                    placeholder="Ask anything... no restrictions"
                    className="w-full bg-transparent text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] outline-none resize-none"
                    rows={1}
                    style={{ minHeight: '24px', maxHeight: '120px' }}
                  />
                </div>

                {/* Voice Input */}
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-3 rounded-lg transition-all ${
                    isRecording
                      ? 'bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white glow-blue'
                      : 'hover:bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>

                {/* Send Button */}
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-3 bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-white rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 glow-blue"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Input Hints */}
              <div className="flex items-center gap-4 mt-3 text-xs text-[hsl(var(--muted-foreground))]">
                <span>Press Enter to send, Shift+Enter for new line</span>
                <span className="ml-auto">Powered by {selectedModel.name}</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-[hsl(var(--muted-foreground))] mt-4">
              DARK AI provides unrestricted AI access. Use responsibly and ethically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
