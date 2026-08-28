import { StyleSheet, View } from 'react-native';
import { Text } from '@/shared/ui';

export const SessionSummary = () => {
  return (
    <View style={styles.container}>
      <Text variant="bodyS">22c</Text>
      <Text variant="bodyS">ЮЗ 5 м/с</Text>
      <Text variant="bodyS">Ветер через 1 час ЮЗ 7 м/с</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
});
