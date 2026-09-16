import { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MAX_RODS, useRodStore } from '@/entities/rod';
import { Button } from '@/shared/ui';
import { spacing } from '@/shared/theme';
import { useTranslation } from 'react-i18next';
import { useAddRodStore } from '@/features/add-rod';
import { IRodCards } from './rod-cards.types';
import { RodCard } from '../rod-card/rod-card';

export const RodCards: FC<IRodCards> = ({ setBiteRodId }) => {
  const { t } = useTranslation();
  const rods = useRodStore((state) => state.rods);
  const openAddRodSheet = useAddRodStore((state) => state.openSheet);
  const resetRodTimer = useRodStore((state) => state.resetRodTimer);
  const hasReachedRodLimit = rods.length >= MAX_RODS;

  return (
    <ScrollView style={styles.rodScroll} contentContainerStyle={styles.rodList} keyboardShouldPersistTaps="handled">
      {rods.map((rod, index) => (
        <RodCard
          key={rod.id}
          number={index + 1}
          rod={rod}
          onBite={() => setBiteRodId(rod.id)}
          onEdit={() => openAddRodSheet(rod.id)}
          onRecast={() => resetRodTimer(rod.id)}
        />
      ))}

      <Button disabled={hasReachedRodLimit} onPress={() => openAddRodSheet()}>
        {t('rod.add')}
      </Button>
    </ScrollView>
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
  rodList: {
    gap: spacing[4],
    paddingBottom: spacing[6],
    paddingTop: spacing[4],
  },
  rodScroll: {
    flex: 1,
  },
});
