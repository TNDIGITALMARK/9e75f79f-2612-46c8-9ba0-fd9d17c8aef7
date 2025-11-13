import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface ChatRequest {
  messages: ChatMessage[]
  model: string
}

// AI Model API configurations
const AI_MODELS: Record<string, { apiUrl: string; requiresApiKey: boolean }> = {
  'gpt4-turbo': {
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    requiresApiKey: true
  },
  'claude-opus': {
    apiUrl: 'https://api.anthropic.com/v1/messages',
    requiresApiKey: true
  },
  'gemini-ultra': {
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    requiresApiKey: true
  },
  'llama-3': {
    apiUrl: 'https://api.together.xyz/v1/chat/completions',
    requiresApiKey: true
  },
  'mistral-large': {
    apiUrl: 'https://api.mistral.ai/v1/chat/completions',
    requiresApiKey: true
  },
  'perplexity': {
    apiUrl: 'https://api.perplexity.ai/chat/completions',
    requiresApiKey: true
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { messages, model = 'gpt4-turbo' } = body

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      )
    }

    const modelConfig = AI_MODELS[model]
    if (!modelConfig) {
      return NextResponse.json(
        { error: 'Invalid AI model selected' },
        { status: 400 }
      )
    }

    // Get API keys from environment variables
    const apiKeys: Record<string, string | undefined> = {
      'gpt4-turbo': process.env.OPENAI_API_KEY,
      'claude-opus': process.env.ANTHROPIC_API_KEY,
      'gemini-ultra': process.env.GOOGLE_AI_API_KEY,
      'llama-3': process.env.TOGETHER_API_KEY,
      'mistral-large': process.env.MISTRAL_API_KEY,
      'perplexity': process.env.PERPLEXITY_API_KEY
    }

    const apiKey = apiKeys[model]

    // If no API key is configured, return an intelligent fallback response
    if (!apiKey) {
      return NextResponse.json({
        content: generateIntelligentResponse(messages[messages.length - 1]?.content || '', model),
        model,
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      })
    }

    // Call the actual AI API based on the model
    try {
      const aiResponse = await callAIModel(model, modelConfig.apiUrl, apiKey, messages)
      return NextResponse.json(aiResponse)
    } catch (error) {
      console.error('AI API Error:', error)

      // Fallback to intelligent response on API error
      return NextResponse.json({
        content: generateIntelligentResponse(messages[messages.length - 1]?.content || '', model),
        model,
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        },
        warning: 'Using fallback response - AI API unavailable'
      })
    }
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}

async function callAIModel(
  model: string,
  apiUrl: string,
  apiKey: string,
  messages: ChatMessage[]
): Promise<any> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  }

  let body: any

  switch (model) {
    case 'gpt4-turbo':
    case 'llama-3':
    case 'mistral-large':
    case 'perplexity':
      // OpenAI-compatible API format
      headers['Authorization'] = `Bearer ${apiKey}`
      body = {
        model: model === 'gpt4-turbo' ? 'gpt-4-turbo-preview' :
               model === 'llama-3' ? 'meta-llama/Llama-3-70b-chat-hf' :
               model === 'mistral-large' ? 'mistral-large-latest' :
               'llama-3.1-sonar-large-128k-online',
        messages,
        temperature: 0.7,
        max_tokens: 2000
      }
      break

    case 'claude-opus':
      // Anthropic API format
      headers['x-api-key'] = apiKey
      headers['anthropic-version'] = '2023-06-01'
      body = {
        model: 'claude-3-opus-20240229',
        messages: messages.filter(m => m.role !== 'system'),
        system: messages.find(m => m.role === 'system')?.content || '',
        max_tokens: 2000
      }
      break

    case 'gemini-ultra':
      // Google AI API format
      body = {
        contents: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      }
      apiUrl = `${apiUrl}?key=${apiKey}`
      break

    default:
      throw new Error(`Unsupported model: ${model}`)
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error(`AI API responded with status ${response.status}`)
  }

  const data = await response.json()

  // Parse response based on model
  let content: string

  switch (model) {
    case 'gpt4-turbo':
    case 'llama-3':
    case 'mistral-large':
    case 'perplexity':
      content = data.choices[0]?.message?.content || 'No response generated'
      break
    case 'claude-opus':
      content = data.content[0]?.text || 'No response generated'
      break
    case 'gemini-ultra':
      content = data.candidates[0]?.content?.parts[0]?.text || 'No response generated'
      break
    default:
      content = 'Unsupported model response format'
  }

  return {
    content,
    model,
    usage: data.usage || { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }
  }
}

function generateIntelligentResponse(userMessage: string, model: string): string {
  const lowerMessage = userMessage.toLowerCase()

  // Context-aware responses based on user input
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Hello! I'm ${getModelName(model)}, an AI assistant. I'm currently running in demo mode since API keys are not configured. However, I can still help you understand my capabilities and answer general questions. What would you like to know?`
  }

  if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
    return `I'm functioning well, thank you for asking! I'm ${getModelName(model)}, operating in demonstration mode. While I don't have access to my full AI capabilities right now, I can explain how I work and what I can do when properly configured. What interests you?`
  }

  if (lowerMessage.includes('code') || lowerMessage.includes('programming') || lowerMessage.includes('developer')) {
    return `As ${getModelName(model)}, I specialize in code generation, debugging, and technical explanations. In production mode with API access, I can:\n\n• Write code in multiple programming languages\n• Debug and optimize existing code\n• Explain complex technical concepts\n• Review code architecture\n• Suggest best practices\n\nTo enable full functionality, the developer needs to add the appropriate API key for ${model} in the environment variables.`
  }

  if (lowerMessage.includes('write') || lowerMessage.includes('create') || lowerMessage.includes('generate')) {
    return `I'm ${getModelName(model)}, and I excel at creative and technical content generation. When fully configured, I can help you:\n\n• Write articles, essays, and creative stories\n• Generate technical documentation\n• Create marketing copy\n• Draft emails and business communications\n• Develop educational content\n\nCurrently running in demo mode - full capabilities available once API keys are configured.`
  }

  if (lowerMessage.includes('what can you do') || lowerMessage.includes('capabilities') || lowerMessage.includes('features')) {
    return `I'm ${getModelName(model)} with extensive capabilities:\n\n${getModelCapabilities(model)}\n\n**Current Status:** Demo Mode\nTo unlock full AI capabilities, add the ${model.toUpperCase()} API key to your environment variables:\n\n\`\`\`\n${getEnvVarName(model)}=your_api_key_here\n\`\`\`\n\nOnce configured, I'll provide real-time, intelligent responses powered by state-of-the-art AI.`
  }

  if (lowerMessage.includes('api') || lowerMessage.includes('configure') || lowerMessage.includes('setup')) {
    return `To enable full AI functionality for ${getModelName(model)}, you need to:\n\n1. **Get an API Key:**\n   ${getAPIKeyInstructions(model)}\n\n2. **Add to Environment Variables:**\n   Create a \`.env.local\` file in your project root:\n   \`\`\`\n   ${getEnvVarName(model)}=your_api_key_here\n   \`\`\`\n\n3. **Restart the Application:**\n   The changes will take effect after restarting the dev server.\n\nOnce configured, I'll provide intelligent, context-aware responses using the actual ${getModelName(model)} AI model.`
  }

  // Default intelligent response
  return `I'm ${getModelName(model)}, currently operating in demonstration mode. Your message: "${userMessage}"\n\nI understand you're looking for information about "${userMessage}". In full production mode with API access, I would provide you with:\n\n• Detailed, context-aware responses\n• Creative and technical solutions\n• In-depth analysis and explanations\n• Code generation and debugging\n• Multi-turn conversation memory\n\n**To enable full functionality:** Add your ${model.toUpperCase()} API key to the environment variables as \`${getEnvVarName(model)}\`.\n\nWould you like to know more about my capabilities or how to configure the API access?`
}

function getModelName(model: string): string {
  const names: Record<string, string> = {
    'gpt4-turbo': 'GPT-4 Turbo',
    'claude-opus': 'Claude Opus',
    'gemini-ultra': 'Gemini Ultra',
    'llama-3': 'Llama 3',
    'mistral-large': 'Mistral Large',
    'perplexity': 'Perplexity AI'
  }
  return names[model] || model
}

function getModelCapabilities(model: string): string {
  const capabilities: Record<string, string> = {
    'gpt4-turbo': '✅ Advanced reasoning and problem-solving\n✅ Code generation across all languages\n✅ Creative writing and content creation\n✅ Complex data analysis\n✅ Multilingual support\n✅ Long context understanding (128K tokens)',
    'claude-opus': '✅ Exceptional creative writing\n✅ Long-form content generation\n✅ Nuanced analysis and reasoning\n✅ Research and summarization\n✅ Code understanding and generation\n✅ Extended context (200K tokens)',
    'gemini-ultra': '✅ Multimodal understanding (text, images, video)\n✅ Real-time information processing\n✅ Code generation and debugging\n✅ Fast inference speed\n✅ Advanced reasoning\n✅ Vision AI capabilities',
    'llama-3': '✅ Open-source flexibility\n✅ General knowledge and conversation\n✅ Code assistance\n✅ Task completion\n✅ Multilingual support\n✅ Community-driven improvements',
    'mistral-large': '✅ Strong reasoning capabilities\n✅ Code proficiency\n✅ Math and logical operations\n✅ Multilingual support\n✅ European AI standards\n✅ High performance',
    'perplexity': '✅ Real-time web search integration\n✅ Research and citations\n✅ Current events knowledge\n✅ Source attribution\n✅ Fact-checking capabilities\n✅ Up-to-date information'
  }
  return capabilities[model] || 'Advanced AI capabilities'
}

function getAPIKeyInstructions(model: string): string {
  const instructions: Record<string, string> = {
    'gpt4-turbo': 'Visit https://platform.openai.com/api-keys to create an API key',
    'claude-opus': 'Visit https://console.anthropic.com/ to get your API key',
    'gemini-ultra': 'Visit https://makersuite.google.com/app/apikey to generate an API key',
    'llama-3': 'Visit https://api.together.xyz/ to get your Together AI API key',
    'mistral-large': 'Visit https://console.mistral.ai/ to obtain your API key',
    'perplexity': 'Visit https://www.perplexity.ai/settings/api to get your API key'
  }
  return instructions[model] || 'Refer to the AI provider\'s documentation for API key instructions'
}

function getEnvVarName(model: string): string {
  const envVars: Record<string, string> = {
    'gpt4-turbo': 'OPENAI_API_KEY',
    'claude-opus': 'ANTHROPIC_API_KEY',
    'gemini-ultra': 'GOOGLE_AI_API_KEY',
    'llama-3': 'TOGETHER_API_KEY',
    'mistral-large': 'MISTRAL_API_KEY',
    'perplexity': 'PERPLEXITY_API_KEY'
  }
  return envVars[model] || `${model.toUpperCase().replace('-', '_')}_API_KEY`
}
