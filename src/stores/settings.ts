// src/lib/stores/settings.ts
import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import { languageMap, getLanguageById } from '$lib/languages';
import { decodeSettings, encodeSettings } from '$lib/urlSync';
import type { OutputFormat } from '$lib/generator';

console.log('[settings.ts] Initializing stores...');

// Safe defaults (SSR-safe)
let defaults;
try {
  defaults = decodeSettings();
  console.log('[settings.ts] URL params decoded:', defaults);
} catch (err) {
  console.error('[settings.ts] Failed to decode URL params:', err);
  defaults = {
    languageId: 'en',
    quantity: 5,
    unit: 'paragraphs' as const,
    format: 'plain' as OutputFormat,
    variation: false,
    startWithReal: false
  };
}

// Exported stores — MUST be at top level (no try/catch around export!)
export const languageId = writable<string>(defaults.languageId);
export const quantity = writable<number>(defaults.quantity);
export const unit = writable<'paragraphs' | 'sentences' | 'words'>(defaults.unit);
export const format = writable<OutputFormat>(defaults.format);
export const variation = writable<boolean>(defaults.variation);
export const startWithReal = writable<boolean>(defaults.startWithReal);

// Derived language object
export const language = derived(languageId, ($id) => {
  try {
    const lang = getLanguageById($id);
    console.log(`[settings.ts] Language → ${lang.name} (${lang.id})`);
    return lang;
  } catch (err) {
    console.error('[settings.ts] Invalid language ID:', $id, err);
    return getLanguageById('en');
  }
});

// URL sync function
function syncUrl() {
  if (!browser) {
    console.log('[settings.ts] syncUrl skipped (SSR)');
    return;
  }

  try {
    const current = {
      languageId: get(languageId) || 'en',
      quantity: get(quantity) ?? 5,
      unit: get(unit) || 'paragraphs',
      format: (get(format) as OutputFormat) || 'plain',
      variation: !!get(variation),
      startWithReal: !!get(startWithReal)
    };

    const qs = encodeSettings(current);
    const newUrl = qs ? `${location.pathname}?${qs}` : location.pathname;
    if (newUrl !== location.href.split('#')[0]) {
      history.replaceState(null, '', newUrl);
      console.log('[settings.ts] URL synced:', newUrl);
    }
  } catch (err) {
    console.error('[settings.ts] URL sync failed:', err);
  }
}

// Auto-sync URL on any change (only in browser)
if (browser) {
  languageId.subscribe(() => syncUrl());
  quantity.subscribe(() => syncUrl());
  unit.subscribe(() => syncUrl());
  format.subscribe(() => syncUrl());
  variation.subscribe(() => syncUrl());
  startWithReal.subscribe(() => syncUrl());
}

console.log('[settings.ts] All stores initialized successfully');