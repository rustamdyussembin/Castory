import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { MAX_RODS, useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { AddRodSheet, useAddRodStore } from '@/features/add-rod';
import { StartSessionSheet, useStartSessionStore } from '@/features/start-session';
import { Button } from '@/shared/ui';
import { SessionHeader } from '@/widgets/session-header';

export const MainScreen = () => {
  const { t } = useTranslation();
  const activeSession = useSessionStore((state) => state.activeSession);
  const rodCount = useRodStore((state) => state.rods.length);
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);
  const openAddRodSheet = useAddRodStore((state) => state.openSheet);
  const hasActiveSession = activeSession !== null;
  const hasReachedRodLimit = rodCount >= MAX_RODS;

  return (
    <View style={styles.container}>
      <SessionHeader />
      <View style={styles.startButtonContainer}>
        {!hasActiveSession ? <Button onPress={openStartSessionSheet}>{t('session.start')}</Button> : null}

        {hasActiveSession ? (
          <Button disabled={hasReachedRodLimit} onPress={openAddRodSheet}>
            {t('rod.add')}
          </Button>
        ) : null}
      </View>

      <StartSessionSheet />
      <AddRodSheet />
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
