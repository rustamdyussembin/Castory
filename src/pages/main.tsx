import { StyleSheet, View } from 'react-native';

import { StartSessionSummary, useStartSessionStore } from '@/features/start-session';
import { Button } from '@/shared/ui';
import { SessionSummary } from '@/widgets/session-summary';

export const MainScreen = () => {
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);

  return (
    <View style={styles.container}>
      <SessionSummary />
      <View style={styles.startButtonContainer}>
        <Button onPress={openStartSessionSheet}>Начать сессию</Button>
      </View>

      <StartSessionSummary />
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
