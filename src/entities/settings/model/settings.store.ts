import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { isSupportedLanguage, resolveDeviceLanguage } from '@/shared/i18n';

import type { ISettingsState } from './settings.types';

const initialLanguage = resolveDeviceLanguage(getLocales().map((locale) => locale.languageCode));

export const useSettingsStore = create<ISettingsState>()(
  persist(
    (set) => ({
      language: initialLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => AsyncStorage),
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
