import { useTheme } from 'react-native-paper';

export const useThemeColors = () => {
  const { colors } = useTheme();

  return {
    text: colors.onSurface,
    background: colors.background,
    backgroundElement: colors.surfaceVariant,
    backgroundSelected: colors.outlineVariant,
    textSecondary: colors.onSurfaceVariant,
    primary: colors.primary,
    onPrimary: colors.onPrimary,
    secondary: colors.secondaryContainer,
    onSecondary: colors.onSecondaryContainer,
    error: colors.error,
  };
};
