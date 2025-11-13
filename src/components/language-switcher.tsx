'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = languages.find((lang) => lang.code === locale)

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-[hsl(var(--border-glow))]/30 bg-[hsl(var(--card))]/50 hover:bg-[hsl(var(--card))] hover:border-[hsl(var(--border-glow))]/50 transition-all"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline-flex items-center gap-2">
            {currentLanguage?.flag} {currentLanguage?.name}
          </span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-[hsl(var(--border-glow))]/30 bg-[hsl(var(--card))] backdrop-blur-md"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`gap-2 cursor-pointer ${
              locale === language.code
                ? 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]'
                : 'hover:bg-[hsl(var(--card))]/80'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {locale === language.code && (
              <span className="ml-auto text-[hsl(var(--primary))]">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
