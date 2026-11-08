import { StyleSheet, View } from 'react-native';

import { SessionSummary } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';
import { FinishSession, useOpenFinishSessionConfirmation } from '@/features/finish-session';

export const SessionHeader = () => {
  const openFinishSessionConfirmation = useOpenFinishSessionConfirmation();

  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary onFinish={openFinishSessionConfirmation} />
      <FinishSession />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
});
