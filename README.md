# DARK AI - Multi-Model AI Chat Platform

A modern, unrestricted AI chat platform supporting multiple AI models through a sleek, futuristic dark interface.

## 🌟 Features

- **Multi-Model Support**: GPT-4 Turbo, Claude Opus, Gemini Ultra, Llama 3, Mistral Large, Perplexity AI
- **Real-time AI Chat**: Connect to actual AI APIs for intelligent responses
- **Intelligent Fallback**: Works without API keys using context-aware responses
- **Dark Futuristic UI**: Neon accents, glass morphism, smooth animations
- **Internationalization**: Multi-language support (EN, ES, PT, FR, DE)
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Voice & Image Support**: Ready for multimodal interactions

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment** (Optional - for full AI functionality)
   ```bash
   cp .env.example .env.local
   ```

   Uncomment and add your API keys in `.env.local`:
   ```env
   OPENAI_API_KEY=sk-...
   ANTHROPIC_API_KEY=sk-ant-...
   GOOGLE_AI_API_KEY=...
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   ```
   http://localhost:3000
   ```

## 🤖 AI Integration

### How It Works

The platform features a hybrid AI system:

**With API Keys (Full Mode):**
- Connects to actual AI model APIs
- Real-time intelligent responses
- Full model capabilities (reasoning, code, creative writing)
- Context-aware conversations

**Without API Keys (Demo Mode):**
- Intelligent fallback responses
- Context-aware replies based on user input
- Explains capabilities and configuration
- Fully functional chat interface

### Supported AI Models

| Model | Provider | API Key Required | Capabilities |
|-------|----------|------------------|--------------|
| GPT-4 Turbo | OpenAI | `OPENAI_API_KEY` | Advanced reasoning, code, writing |
| Claude Opus | Anthropic | `ANTHROPIC_API_KEY` | Creative writing, analysis |
| Gemini Ultra | Google | `GOOGLE_AI_API_KEY` | Multimodal, vision AI |
| Llama 3 | Meta (Together AI) | `TOGETHER_API_KEY` | Open-source, general tasks |
| Mistral Large | Mistral AI | `MISTRAL_API_KEY` | Reasoning, multilingual |
| Perplexity AI | Perplexity | `PERPLEXITY_API_KEY` | Research, real-time search |

### Getting API Keys

1. **OpenAI (GPT-4)**: https://platform.openai.com/api-keys
2. **Anthropic (Claude)**: https://console.anthropic.com/
3. **Google (Gemini)**: https://makersuite.google.com/app/apikey
4. **Together AI (Llama 3)**: https://api.together.xyz/
5. **Mistral AI**: https://console.mistral.ai/
6. **Perplexity AI**: https://www.perplexity.ai/settings/api

### API Route

The chat API is located at `/api/chat` and handles:
- Model selection and routing
- API key validation
- Intelligent fallback responses
- Error handling
- Response formatting

## 🎨 Design System

### Color Palette

- **Primary (Neon Blue)**: `hsl(190 100% 50%)` - Electric cyan
- **Secondary (Neon Purple)**: `hsl(280 70% 60%)` - Neon purple
- **Background**: `hsl(240 10% 5%)` - Deep dark navy
- **Cards**: `hsl(240 10% 10%)` - Dark panels with glass effect

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300-900
- **Features**: Variable font, optimized for screens

### Effects

- Neon glow on interactive elements
- Glass morphism on cards
- Smooth hover animations
- Subtle text shadows for futuristic feel

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── [locale]/
│   │   ├── chat/
│   │   │   └── page.tsx          # Main chat interface
│   │   ├── models/
│   │   │   └── page.tsx          # AI models showcase
│   │   └── page.tsx              # Landing page
│   ├── globals.css               # Global styles & design system
│   └── layout.tsx                # Root layout
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── theme-provider.tsx        # Dark theme provider
│   └── language-switcher.tsx     # i18n language switcher
└── messages/                     # Internationalization files
```

## 🔧 Configuration

### Environment Variables

```env
# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# AI Model API Keys (Optional)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_AI_API_KEY=...
TOGETHER_API_KEY=...
MISTRAL_API_KEY=...
PERPLEXITY_API_KEY=pplx-...
```

### Customization

**Change AI Models:**
Edit `src/app/[locale]/chat/page.tsx`:
```typescript
const AI_MODELS = [
  { id: 'your-model', name: 'Your Model', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
]
```

**Modify Colors:**
Edit `src/app/globals.css`:
```css
:root {
  --neon-blue: 190 100% 50%;
  --neon-purple: 280 70% 60%;
}
```

## 🌐 Internationalization

Supported languages:
- English (en)
- Spanish (es)
- Portuguese (pt)
- French (fr)
- German (de)

Add translations in `messages/[locale].json`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **i18n**: next-intl
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📱 Features in Detail

### Chat Interface
- Real-time message updates
- Typing indicators
- Message history
- Model selection dropdown
- Voice input (ready for implementation)
- Image upload (ready for implementation)

### Models Page
- Visual showcase of all AI models
- Feature comparison table
- Capability descriptions
- Direct links to start conversations

### Landing Page
- Hero section with animated grid
- Feature highlights
- Pricing plans
- Showcase section

## 🐛 Troubleshooting

**Chat shows simulated responses:**
- Add API keys to `.env.local`
- Restart the development server
- Check browser console for errors

**API errors:**
- Verify API keys are correct
- Check rate limits on AI provider dashboards
- Ensure environment variables are loaded

**Styling issues:**
- Clear browser cache
- Check that globals.css is imported
- Verify Tailwind configuration

## 📄 License

MIT License - feel free to use this for your projects!

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

## SSR and Browser API Usage

This template includes safeguards for server-side rendering (SSR) issues with browser APIs.

### When to Force Dynamic Rendering

Add `export const dynamic = 'force-dynamic';` to pages that use:
- `navigator` (geolocation, online status, share API)
- `window` (localStorage, sessionStorage, innerWidth/Height)
- Browser-only APIs (Web APIs, PWA features)

### Performance Considerations

- **Static pages** (no browser APIs): Keep static for best performance
- **Dynamic pages** (use browser APIs): Add the dynamic export
- **Mixed apps**: Use selective dynamic rendering per page

### Example Usage

```typescript
// For pages using browser APIs
'use client';
export const dynamic = 'force-dynamic';

import { useGeolocation } from '@/hooks/use-geolocation';

export default function WeatherPage() {
  // This page uses browser APIs, so it needs dynamic rendering
}
```
