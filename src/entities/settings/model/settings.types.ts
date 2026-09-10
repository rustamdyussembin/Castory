import type { SupportedLanguage } from '@/shared/i18n';

export interface ISettingsState {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}
