export const SUPPORTED_LANGUAGES = ['ru'] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'ru';

export const isSupportedLanguage = (language: unknown): language is SupportedLanguage =>
  typeof language === 'string' && SUPPORTED_LANGUAGES.some((supportedLanguage) => supportedLanguage === language);
