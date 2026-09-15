import { StyleSheet, View } from 'react-native';

import { useRodStore } from '@/entities/rod';
import { SessionSummary, useSessionStore } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';

export const SessionHeader = () => {
  const finishSession = useSessionStore((state) => state.finishSession);
  const clearRods = useRodStore((state) => state.clearRods);

  const handleFinishSession = () => {
    finishSession();
    clearRods();
  };

  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary onFinish={handleFinishSession} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
});
