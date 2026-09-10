import { StyleSheet } from 'react-native';

import { colors, spacing } from '@/shared/theme';

export const styles = StyleSheet.create({
  container: {
    gap: spacing[2],
  },
  input: {
    minHeight: 44,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.backgroundSelected,
    borderRadius: 8,
    backgroundColor: colors.background,
    color: colors.text,
    fontSize: 16,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  inputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
  },
});
