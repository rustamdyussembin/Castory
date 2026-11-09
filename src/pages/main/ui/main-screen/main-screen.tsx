import { StyleSheet, View } from 'react-native';

import { useHasActiveSession } from '@/entities/session';
import { AddRodSheet } from '@/features/add-rod';
import { AddSpodSheet } from '@/features/add-spod';
import { FishBiteSheet } from '@/features/fish-bite';
import { StartSessionButton, StartSessionSheet } from '@/features/start-session';
import { SessionHeader } from '@/widgets/session-header';
import { SessionRods } from '@/widgets/session-rods';
import { SessionSpods } from '@/widgets/session-spods';

export const MainScreen = () => {
  const hasActiveSession = useHasActiveSession();

  return (
    <View style={styles.container}>
      <SessionHeader />
      {hasActiveSession && <SessionRods footer={<SessionSpods />} />}
      {!hasActiveSession && (
        <View style={styles.startButtonContainer}>
          <StartSessionButton />
        </View>
      )}
      <StartSessionSheet />
      <AddRodSheet />
      <AddSpodSheet />
      <FishBiteSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
