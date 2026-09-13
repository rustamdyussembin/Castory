import { DarkTheme as ExpoRouterDarkTheme, DefaultTheme as ExpoRouterLightTheme } from 'expo-router';
import { MD3DarkTheme, MD3LightTheme, type MD3Theme } from 'react-native-paper';

import { colors } from './colors';

export const paperLightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 3,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    onPrimary: colors.onPrimary,
    primaryContainer: '#FFDBC7',
    onPrimaryContainer: '#321300',
    secondaryContainer: colors.secondary,
    onSecondaryContainer: colors.onSecondary,
    background: colors.background,
    onBackground: colors.text,
    surface: colors.background,
    onSurface: colors.text,
    surfaceVariant: colors.backgroundElement,
    onSurfaceVariant: colors.textSecondary,
    outline: colors.textSecondary,
    outlineVariant: colors.backgroundSelected,
    error: colors.error,
    onError: colors.onPrimary,
  },
};

export const paperDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 3,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FFB68A',
    onPrimary: '#532200',
    primaryContainer: '#753400',
    onPrimaryContainer: '#FFDBC7',
    secondaryContainer: '#3E4047',
    onSecondaryContainer: '#E3E2E9',
    background: '#121212',
    onBackground: '#E6E1E5',
    surface: '#121212',
    onSurface: '#E6E1E5',
    surfaceVariant: '#303034',
    onSurfaceVariant: '#CAC4D0',
    outline: '#938F99',
    outlineVariant: '#49454F',
    error: '#FFB4AB',
    onError: '#690005',
  },
};

export const navigationLightTheme = {
  ...ExpoRouterLightTheme,
  colors: {
    ...ExpoRouterLightTheme.colors,
    primary: paperLightTheme.colors.primary,
    background: paperLightTheme.colors.background,
    card: paperLightTheme.colors.surface,
    text: paperLightTheme.colors.onSurface,
    border: paperLightTheme.colors.outlineVariant,
    notification: paperLightTheme.colors.error,
  },
};

export const navigationDarkTheme = {
  ...ExpoRouterDarkTheme,
  colors: {
    ...ExpoRouterDarkTheme.colors,
    primary: paperDarkTheme.colors.primary,
    background: paperDarkTheme.colors.background,
    card: paperDarkTheme.colors.surface,
    text: paperDarkTheme.colors.onSurface,
    border: paperDarkTheme.colors.outlineVariant,
    notification: paperDarkTheme.colors.error,
  },
};
