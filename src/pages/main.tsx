import { StyleSheet, View } from 'react-native';

import { Button } from '@/shared/ui';
import { SessionSummary } from '@/widgets/session-summary';
import { StartSessionSummary } from '@/features/start-session';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <SessionSummary />
      <View style={styles.startButtonContainer}>
        <Button onPress={() => null}>Начать сессию</Button>
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
