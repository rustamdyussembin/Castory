import { StyleSheet, View } from 'react-native';

import { SessionSummary } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';

export const SessionHeader = () => {
  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
});
