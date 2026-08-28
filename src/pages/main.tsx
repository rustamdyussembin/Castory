import { StyleSheet, View } from 'react-native';

import { Button } from '@/shared/ui';
import { SessionSummary } from '@/widgets/session-summary';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <SessionSummary />
      <Button style={styles.startButton} onPress={() => null}>
        Начать сессию
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButton: {
    alignSelf: 'center',
  },
});
