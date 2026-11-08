import { StyleSheet, View } from 'react-native';

import { SpodCards, useSpodStore } from '@/entities/spod';
import { AddSpodButton, useOpenEditSpodSheet } from '@/features/add-spod';
import { spacing } from '@/shared/theme';

export const SessionSpods = () => {
  const spods = useSpodStore((state) => state.spods);
  const openEditSpodSheet = useOpenEditSpodSheet();

  return (
    <View style={styles.container}>
      <SpodCards onEdit={openEditSpodSheet} spods={spods} />
      <AddSpodButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[4],
    marginTop: spacing[4],
  },
});
