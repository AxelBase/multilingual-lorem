// src/lib/generator.ts
import type { Language } from './languages';

export type OutputFormat = 'plain' | 'html-p' | 'html-ul' | 'html-ol' | 'markdown';

export interface GenerateOptions {
  language: Language;
  quantity: number;
  unit: 'paragraphs' | 'sentences' | 'words';
  format: OutputFormat;
  variation: boolean;        // ±10–20%
  startWithReal: boolean;    // FR-10
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateText(options: GenerateOptions): string {
  const { language, quantity, unit, format, variation, startWithReal } = options;

  let target = quantity;
  if (variation && quantity > 1) {
    const percent = 10 + Math.random() * 10; // 10–20%
    const delta = Math.round((quantity * percent) / 100);
    target = quantity + randomInt(-delta, delta);
    target = Math.max(1, target);
  }

  const words = language.words;
  const punct = language.punctuation;

  const generateWord = () => words[randomInt(0, words.length - 1)];
  const generatePunctuation = () => punct[randomInt(0, punct.length - 1)];

  const generateSentence = (forceReal = false): string => {
    const useReal = forceReal && startWithReal && language.sentenceStarters.length > 0;
    if (useReal && Math.random() < 0.8) {
      return language.sentenceStarters[randomInt(0, language.sentenceStarters.length - 1)];
    }

    const wordCount = randomInt(6, 20);
    let sentence = capitalize(generateWord());
    for (let i = 1; i < wordCount; i++) {
      sentence += ' ' + generateWord();
    }
    sentence += generatePunctuation();
    return sentence;
  };

  const generateParagraph = (): string => {
    const sentenceCount = randomInt(3, 8);
    const sentences: string[] = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence(i === 0));
    }
    return sentences.join(' ') + (format === 'markdown' ? '\n\n' : '\n');
  };

  let result = '';

  if (unit === 'paragraphs') {
    for (let i = 0; i < target; i++) {
      const para = generateParagraph().trim();
      switch (format) {
        case 'html-p':
          result += `<p>${para}</p>\n`;
          break;
        case 'html-ul':
          result += `<li>${para}</li>\n`;
          break;
        case 'html-ol':
          result += `<li>${para}</li>\n`;
          break;
        case 'markdown':
          result += para + '\n';
          break;
        default:
          result += para + '\n\n';
      }
    }
  } else if (unit === 'sentences') {
    for (let i = 0; i < target; i++) {
      const sentence = generateSentence(i === 0) + ' ';
      result += format === 'plain' || format === 'markdown' ? sentence : sentence;
    }
    result = result.trim();
    if (format === 'html-ul' || format === 'html-ol') {
      const items = result.split('. ').map(s => s.trim()).filter(Boolean);
      result = items.map(s => `<li>${s.endsWith('.') ? s : s + '.'}</li>\n`).join('');
    }
  } else if (unit === 'words') {
    for (let i = 0; i < target; i++) {
      result += generateWord() + ' ';
    }
    result = result.trim();
  }

  // Wrap lists
  if (format === 'html-ul') result = '<ul>\n' + result + '</ul>';
  if (format === 'html-ol') result = '<ol>\n' + result + '</ol>';

  return result.trim();
}