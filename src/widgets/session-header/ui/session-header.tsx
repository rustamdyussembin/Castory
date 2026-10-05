import { StyleSheet, View } from 'react-native';

import { SessionSummary } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';
import { FinishSession } from '@/features/finish-session';
import { useFinishSessionConfirmationModalStore } from '@/entities/finish-session';

export const SessionHeader = () => {
  const openConfirmationModal = useFinishSessionConfirmationModalStore((state) => state.openModal);

  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary onFinish={openConfirmationModal} />
      <FinishSession />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
});
