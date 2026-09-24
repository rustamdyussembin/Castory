import { type FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import DraggableFlatList, { type RenderItemParams } from 'react-native-draggable-flatlist';

import { MAX_RODS, useRodStore } from '@/entities/rod';
import type { Rod } from '@/entities/rod';
import { Button } from '@/shared/ui';
import { spacing } from '@/shared/theme';
import { useTranslation } from 'react-i18next';
import { IRodCards } from './rod-cards.types';
import { RodCard } from '../rod-card/rod-card';

export const RodCards: FC<IRodCards> = ({ footer, onAdd, onBite, onEdit }) => {
  const { t } = useTranslation();
  const rods = useRodStore((state) => state.rods);
  const reorderRods = useRodStore((state) => state.reorderRods);
  const resetRodTimer = useRodStore((state) => state.resetRodTimer);
  const hasReachedRodLimit = rods.length >= MAX_RODS;

  const renderRod = useCallback(
    ({ drag, getIndex, isActive, item: rod }: RenderItemParams<Rod>) => (
      <RodCard
        isDragging={isActive}
        number={(getIndex() ?? rods.findIndex(({ id }) => id === rod.id)) + 1}
        rod={rod}
        onBite={() => onBite(rod.id)}
        onDrag={drag}
        onEdit={() => onEdit(rod.id)}
        onRecast={() => resetRodTimer(rod.id)}
      />
    ),
    [onBite, onEdit, resetRodTimer, rods],
  );

  return (
    <DraggableFlatList
      contentContainerStyle={styles.rodList}
      containerStyle={styles.rodScroll}
      data={rods}
      ItemSeparatorComponent={RodSeparator}
      keyboardShouldPersistTaps="handled"
      keyExtractor={(rod) => rod.id}
      ListFooterComponent={
        <View style={styles.footer}>
          <Button disabled={hasReachedRodLimit} onPress={onAdd}>
            {t('rod.add')}
          </Button>
          {footer}
        </View>
      }
      onDragEnd={({ from, to }) => reorderRods(from, to)}
      renderItem={renderRod}
    />
  );
};

const RodSeparator = () => <View style={styles.separator} />;

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
    paddingBottom: spacing[6],
    paddingTop: spacing[4],
  },
  rodScroll: {
    flex: 1,
  },
  footer: {
    marginTop: spacing[4],
  },
  separator: {
    height: spacing[4],
  },
});
