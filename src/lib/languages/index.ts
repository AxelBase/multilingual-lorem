// src/lib/languages/index.ts  ← FIXED & FINAL VERSION
import latin from './latin';
import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import pt from './pt';
import nl from './nl';
import ru from './ru';
import zh from './zh';
import ja from './ja';
import ko from './ko';
import ar from './ar';
import he from './he';
import el from './el';

export type Language = typeof latin;

export const languages = [
  en,
  latin,
  es,
  fr,
  de,
  it,
  pt,
  nl,
  ru,
  zh,
  ja,
  ko,
  ar,
  he,
  el
] as const;

export const languageMap = {
  en: en,
  latin: latin,
  es: es,
  fr: fr,
  de: de,
  it: it,
  pt: pt,
  nl: nl,
  ru: ru,
  zh: zh,
  ja: ja,
  ko: ko,
  ar: ar,
  he: he,
  el: el
} as const;

// Helper to get language by ID safely
export const getLanguageById = (id: string) => languageMap[id as keyof typeof languageMap] ?? en;