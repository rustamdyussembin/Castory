import { focusManager } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { AppState, type AppStateStatus, Platform } from 'react-native';

import { i18n, i18nInitialization, useLanguageStore } from '@/shared/i18n';

SplashScreen.preventAutoHideAsync();

export const useAppInitialization = (): boolean => {
  const language = useLanguageStore((state) => state.language);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isActive = true;

    const initialize = async () => {
      try {
        await Promise.all([i18nInitialization, useLanguageStore.persist.rehydrate()]);
        await i18n.changeLanguage(useLanguageStore.getState().language);
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

  useEffect(() => {
    if (Platform.OS === 'web') return;

    const handleAppStateChange = (status: AppStateStatus) => {
      focusManager.setFocused(status === 'active');
    };

    handleAppStateChange(AppState.currentState);
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
      focusManager.setFocused(undefined);
    };
  }, []);

  return isReady;
};
