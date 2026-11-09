import { StyleSheet, View } from 'react-native';

import { useHasActiveSession } from '@/entities/session';
import { AddRodSheet } from '@/features/add-rod';
import { AddSpodSheet } from '@/features/add-spod';
import { FishBiteSheet } from '@/features/fish-bite';
import { StartSessionButton, StartSessionSheet } from '@/features/start-session';
import { SessionHeader, SessionRods } from '@/widgets/session';

export const MainScreen = () => {
  const hasActiveSession = useHasActiveSession();

  return (
    <View style={styles.container}>
      <SessionHeader />
      {hasActiveSession && <SessionRods />}
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
