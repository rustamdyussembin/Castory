import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { AppState, type AppStateStatus, Platform, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

import { useSettingsStore } from '@/entities/settings';
import { i18n, i18nInitialization } from '@/shared/i18n';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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

  if (!isReady) return null;

  return (
    <GestureHandlerRootView style={styles.root}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <Slot />
            </ThemeProvider>
          </PaperProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
