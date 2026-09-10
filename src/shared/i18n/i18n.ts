import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './i18n.types';
import { ru } from './locales/ru';

export const i18nResources = {
  ru: {
    translation: ru,
  },
} as const;

export const i18n = createInstance();

export const i18nInitialization = i18n.use(initReactI18next).init({
  defaultNS: 'translation',
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  lng: DEFAULT_LANGUAGE,
  resources: i18nResources,
  supportedLngs: SUPPORTED_LANGUAGES,
});
