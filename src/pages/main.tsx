import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useSessionStore } from '@/entities/session';
import { StartSessionSheet, useStartSessionStore } from '@/features/start-session';
import { Button } from '@/shared/ui';
import { SessionHeader } from '@/widgets/session-header';

// TODO: Connect this handler when the add-rod feature is implemented.
const handleAddRod = () => undefined;

export const MainScreen = () => {
  const { t } = useTranslation();
  const activeSession = useSessionStore((state) => state.activeSession);
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);
  const hasActiveSession = activeSession !== null;

  return (
    <View style={styles.container}>
      <SessionHeader />
      <View style={styles.startButtonContainer}>
        <Button onPress={hasActiveSession ? handleAddRod : openStartSessionSheet}>
          {hasActiveSession ? t('rod.add') : t('session.start')}
        </Button>
      </View>

      <StartSessionSheet />
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
