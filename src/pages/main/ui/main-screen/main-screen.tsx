import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { RodCards } from '@/entities/rod';
import { AddRodSheet, useAddRodStore } from '@/features/add-rod';
import { AddSpodSheet } from '@/features/add-spod';
import { StartSessionSheet, useStartSessionStore } from '@/features/start-session';
import { Button } from '@/shared/ui';
import { SessionHeader } from '@/widgets/session-header';
import { SessionSpods } from '@/widgets/session-spods';
import { FishBiteSheet, useFishBiteStore } from '@/widgets/fish-bite';
import { useHasActiveSession } from '@/entities/session';

export const MainScreen = () => {
  const { t } = useTranslation();
  const openAddRodSheet = useAddRodStore((state) => state.openSheet);
  const openFishBiteSheet = useFishBiteStore((state) => state.openSheet);
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);
  const hasActiveSession = useHasActiveSession();

  return (
    <View style={styles.container}>
      <SessionHeader />
      {hasActiveSession && (
        <RodCards
          footer={<SessionSpods />}
          onAdd={() => openAddRodSheet()}
          onBite={openFishBiteSheet}
          onEdit={openAddRodSheet}
        />
      )}
      {!hasActiveSession && (
        <View style={styles.startButtonContainer}>
          <Button onPress={openStartSessionSheet}>{t('session.start')}</Button>
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
