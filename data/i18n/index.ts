import { LOCALES, type Locale } from "@/lib/i18n"

import { enUSDictionary } from "@/data/i18n/en-US"
import { esESDictionary } from "@/data/i18n/es-ES"
import { ptBRDictionary } from "@/data/i18n/pt-BR"
import type { LocaleDictionary } from "@/data/i18n/types"

export const dictionariesByLocale: Record<Locale, LocaleDictionary> = {
  "en-US": enUSDictionary,
  "pt-BR": ptBRDictionary,
  "es-ES": esESDictionary
}

function pickByLocale<T>(selector: (dictionary: LocaleDictionary) => T): Record<Locale, T> {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, selector(dictionariesByLocale[locale])])
  ) as Record<Locale, T>
}

export function getDictionary(locale: Locale): LocaleDictionary {
  return dictionariesByLocale[locale]
}

export const uiByLocale = pickByLocale((dictionary) => dictionary.ui)
export const aboutByLocale = pickByLocale((dictionary) => dictionary.content.about)
export const focusAreasByLocale = pickByLocale((dictionary) => dictionary.content.focusAreas)
export const experienceTimelineByLocale = pickByLocale(
  (dictionary) => dictionary.content.experienceTimeline
)
