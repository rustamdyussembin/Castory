import { StyleSheet } from 'react-native';

import { spacing } from '@/shared/theme';

export const styles = StyleSheet.create({
  dialog: {
    width: '90%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  header: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing[3],
    paddingLeft: spacing[5],
    paddingRight: spacing[2],
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    paddingTop: spacing[2],
  },
});
