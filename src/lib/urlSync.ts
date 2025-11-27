// src/lib/urlSync.ts  ← FINAL STATIC-SAFE VERSION
import { languageMap } from './languages';
import type { OutputFormat } from './generator';

export interface UrlSettings {
  lang?: string;
  qty?: string;
  unit?: 'p' | 's' | 'w';
  fmt?: OutputFormat;
  var?: string;
  real?: string;
}

export function encodeSettings(settings: {
  languageId: string;
  quantity: number;
  unit: 'paragraphs' | 'sentences' | 'words';
  format: OutputFormat;
  variation: boolean;
  startWithReal: boolean;
}): string {
  const params = new URLSearchParams();
  params.set('lang', settings.languageId);
  params.set('qty', settings.quantity.toString());
  params.set('unit', settings.unit[0]);
  params.set('fmt', settings.format);
  if (settings.variation) params.set('var', '1');
  if (settings.startWithReal) params.set('real', '1');
  return params.toString();
}

export function decodeSettings(): {
  languageId: string;
  quantity: number;
  unit: 'paragraphs' | 'sentences' | 'words';
  format: OutputFormat;
  variation: boolean;
  startWithReal: boolean;
} {
  // SAFE: Only access location in browser
  const params = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const lang = params.get('lang') || 'en';
  const qty = Math.max(1, Math.min(500, parseInt(params.get('qty') || '5', 10))) || 5;
  const unitRaw = params.get('unit');
  const unitMap: Record<string, 'paragraphs' | 'sentences' | 'words'> = {
    'p': 'paragraphs',
    's': 'sentences',
    'w': 'words'
  };
  const unit = unitMap[unitRaw || 'p'] || 'paragraphs';
  const format = (params.get('fmt') as OutputFormat) || 'plain';
  const variation = params.has('var');
  const startWithReal = params.has('real');

  return {
    languageId: languageMap[lang] ? lang : 'en',
    quantity: qty,
    unit,
    format,
    variation,
    startWithReal
  };
}