import { StyleSheet, View } from 'react-native';

import { SpodCards, useSpodStore } from '@/entities/spod';
import { AddSpodButton, EditSpodButton } from '@/features/add-spod';
import { spacing } from '@/shared/theme';

export const SessionSpods = () => {
  const spods = useSpodStore((state) => state.spods);

  return (
    <View style={styles.container}>
      <SpodCards
        renderActions={(spod) => <EditSpodButton spodId={spod.id} style={styles.editAction} />}
        spods={spods}
      />
      <AddSpodButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[4],
    marginTop: spacing[4],
  },
  editAction: {
    marginTop: spacing[2],
    minWidth: 180,
  },
});
