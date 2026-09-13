import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

import { useThemeColors } from '@/shared/theme';

export const Screen = ({ children }: PropsWithChildren) => {
  const colors = useThemeColors();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <Surface elevation={0} style={styles.content}>
        {children}
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
