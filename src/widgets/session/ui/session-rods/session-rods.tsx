import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import DraggableFlatList, { type RenderItemParams } from 'react-native-draggable-flatlist';
import { IconButton } from 'react-native-paper';

import { type IRod, RodCard, useRodStore } from '@/entities/rod';
import { AddRodButton, EditRodButton } from '@/features/add-rod';
import { FishBiteButton } from '@/features/fish-bite';
import { RecastRodButton } from '@/features/recast-rod';
import { spacing, useThemeColors } from '@/shared/theme';

import { SessionSpods } from '../session-spods/session-spods';

const RodSeparator = () => <View style={styles.separator} />;

export const SessionRods = () => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const rods = useRodStore((state) => state.rods);
  const reorderRods = useRodStore((state) => state.reorderRods);

  const renderRod = useCallback(
    ({ drag, getIndex, isActive, item: rod }: RenderItemParams<IRod>) => {
      const number = (getIndex() ?? rods.findIndex(({ id }) => id === rod.id)) + 1;

      return (
        <RodCard
          isDragging={isActive}
          number={number}
          rod={rod}
          headerAction={
            <IconButton
              accessibilityLabel={t('rod.card.reorder', { number })}
              disabled={isActive}
              icon="drag-vertical"
              iconColor={colors.textSecondary}
              onPressIn={drag}
              size={24}
              style={styles.dragHandle}
            />
          }
          actions={
            <>
              <View style={styles.primaryActions}>
                <FishBiteButton rodId={rod.id} style={styles.action} />
                <RecastRodButton rodId={rod.id} style={styles.action} />
              </View>
              <EditRodButton rodId={rod.id} style={styles.editAction} />
            </>
          }
        />
      );
    },
    [colors.textSecondary, rods, t],
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
          <AddRodButton />
          <SessionSpods />
        </View>
      }
      onDragEnd={({ from, to }) => reorderRods(from, to)}
      renderItem={renderRod}
    />
  );
};

const styles = StyleSheet.create({
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
  dragHandle: {
    margin: 0,
  },
  primaryActions: {
    flexDirection: 'row',
    gap: spacing[3],
    marginTop: spacing[3],
  },
  action: {
    flex: 1,
  },
  editAction: {
    alignSelf: 'flex-start',
    marginTop: spacing[2],
    minWidth: 180,
  },
});
