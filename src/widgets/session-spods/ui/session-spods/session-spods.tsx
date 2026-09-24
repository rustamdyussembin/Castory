import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { MAX_SPODS, SpodCards, useSpodStore } from '@/entities/spod';
import { useAddSpodStore } from '@/features/add-spod';
import { spacing } from '@/shared/theme';
import { Button } from '@/shared/ui';

export const SessionSpods = () => {
  const { t } = useTranslation();
  const spods = useSpodStore((state) => state.spods);
  const openAddSpodSheet = useAddSpodStore((state) => state.openSheet);
  const hasReachedSpodLimit = spods.length >= MAX_SPODS;

  return (
    <View style={styles.container}>
      <SpodCards onEdit={openAddSpodSheet} spods={spods} />
      <Button disabled={hasReachedSpodLimit} onPress={() => openAddSpodSheet()}>
        {t('spod.add')}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[4],
    marginTop: spacing[4],
  },
});
