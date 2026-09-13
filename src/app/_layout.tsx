import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AppState, type AppStateStatus, Platform, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { I18nProvider } from '@/app/providers/i18n';
import AppTabs from '@/app/tabs/app-tabs/app-tabs';
import { navigationDarkTheme, navigationLightTheme, paperDarkTheme, paperLightTheme } from '@/shared/theme';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

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

  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={isDark ? paperDarkTheme : paperLightTheme}>
          <ThemeProvider value={isDark ? navigationDarkTheme : navigationLightTheme}>
            <AppTabs />
          </ThemeProvider>
        </PaperProvider>
      </QueryClientProvider>
    </I18nProvider>
  );
}
