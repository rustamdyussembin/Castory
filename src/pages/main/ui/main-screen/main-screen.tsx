import { StyleSheet, View } from 'react-native';

import { RodCards } from '@/entities/rod';
import { AddRodSheet, useOpenAddRodSheet, useOpenEditRodSheet } from '@/features/add-rod';
import { AddSpodSheet } from '@/features/add-spod';
import { StartSessionButton, StartSessionSheet } from '@/features/start-session';
import { SessionHeader } from '@/widgets/session-header';
import { SessionSpods } from '@/widgets/session-spods';
import { FishBiteSheet, useOpenFishBiteSheet } from '@/features/fish-bite';
import { useHasActiveSession } from '@/entities/session';

export const MainScreen = () => {
  const openAddRodSheet = useOpenAddRodSheet();
  const openEditRodSheet = useOpenEditRodSheet();
  const openFishBiteSheet = useOpenFishBiteSheet();
  const hasActiveSession = useHasActiveSession();

  return (
    <View style={styles.container}>
      <SessionHeader />
      {hasActiveSession && (
        <RodCards
          footer={<SessionSpods />}
          onAdd={openAddRodSheet}
          onBite={openFishBiteSheet}
          onEdit={openEditRodSheet}
        />
      )}
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
