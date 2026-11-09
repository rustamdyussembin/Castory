import { getLocales } from 'expo-localization';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createPersistStorage } from '@/shared/lib/storage';

import { type ILanguageState, isSupportedLanguage } from './i18n.types';
import { resolveDeviceLanguage } from './resolve-device-language';

const initialLanguage = resolveDeviceLanguage(getLocales().map((locale) => locale.languageCode));

export const useLanguageStore = create<ILanguageState>()(
  persist(
    (set) => ({
      language: initialLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      // The storage key is kept from the former `entities/settings` store to preserve the persisted language.
      name: 'settings',
      storage: createPersistStorage(),
      partialize: ({ language }) => ({ language }),
      merge: (persistedState, currentState) => {
        if (
          typeof persistedState === 'object' &&
          persistedState !== null &&
          'language' in persistedState &&
          isSupportedLanguage(persistedState.language)
        ) {
          return { ...currentState, language: persistedState.language };
        }

        return currentState;
      },
      skipHydration: true,
    },
  ),
);
