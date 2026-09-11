import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { StartSessionSheet, useStartSessionStore } from '@/features/start-session';
import { Button } from '@/shared/ui';
import { SessionHeader } from '@/widgets/session-header';

export const MainScreen = () => {
  const { t } = useTranslation();
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);

  return (
    <View style={styles.container}>
      <SessionHeader />
      <View style={styles.startButtonContainer}>
        <Button onPress={openStartSessionSheet}>{t('session.start')}</Button>
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
