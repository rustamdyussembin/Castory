import * as SplashScreen from 'expo-splash-screen';
import { type PropsWithChildren, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useSettingsStore } from '@/entities/settings';
import { i18n, i18nInitialization } from '@/shared/i18n';

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const language = useSettingsStore((state) => state.language);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isActive = true;

    const initialize = async () => {
      try {
        await Promise.all([i18nInitialization, useSettingsStore.persist.rehydrate()]);
        await i18n.changeLanguage(useSettingsStore.getState().language);
      } catch (error) {
        console.error('Failed to initialize localization', error);
      } finally {
        if (isActive) setIsReady(true);
      }
    };

    void initialize();

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!isReady || i18n.resolvedLanguage === language) return;

    void i18n.changeLanguage(language);
  }, [isReady, language]);

  useEffect(() => {
    if (isReady) void SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
