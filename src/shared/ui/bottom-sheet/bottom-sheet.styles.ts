import { StyleSheet } from 'react-native';

import { spacing } from '@/shared/theme';

export const styles = StyleSheet.create({
  background: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    gap: spacing[4],
    paddingTop: spacing[2],
    paddingHorizontal: spacing[4],
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
