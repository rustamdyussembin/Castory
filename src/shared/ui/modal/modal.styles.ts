import { StyleSheet } from 'react-native';

import { colors, spacing } from '@/shared/theme';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[4],
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  content: {
    width: '100%',
    maxWidth: 480,
    gap: spacing[4],
    padding: spacing[4],
    borderRadius: 12,
    backgroundColor: colors.background,
  },
  header: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing[3],
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  closeButtonPressed: {
    backgroundColor: colors.backgroundSelected,
  },
  closeIcon: {
    fontSize: 24,
    lineHeight: 26,
  },
});
