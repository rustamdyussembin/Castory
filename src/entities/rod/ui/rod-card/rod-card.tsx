import { type FC, useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'react-native-paper';

import { spacing, useThemeColors } from '@/shared/theme';
import { Button, Text } from '@/shared/ui';

import { calculateRodDistance } from '../../lib/calculate-rod-distance';
import { getTimeInWaterMinutes } from '../../lib/get-time-in-water-minutes';
import type { IRodCardProps } from './rod-card.types';

const TIMER_UPDATE_INTERVAL_MS = 60_000;

export const RodCard: FC<IRodCardProps> = ({ isDragging, number, onBite, onDrag, onEdit, onRecast, rod }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const intervalId = setInterval(() => setNow(Date.now()), TIMER_UPDATE_INTERVAL_MS);
    const subscription = AppState.addEventListener('change', (status) => {
      if (status === 'active') setNow(Date.now());
    });

    return () => {
      clearInterval(intervalId);
      subscription.remove();
    };
  }, []);

  const wraps = rod.wraps;
  const distance = calculateRodDistance(wraps, rod.pegDistance);
  const timeInWaterMinutes = getTimeInWaterMinutes(rod.castAt, now);
  const timeInWater =
    timeInWaterMinutes >= 60
      ? t('rod.card.inWaterHours', {
          hours: Math.floor(timeInWaterMinutes / 60),
          minutes: timeInWaterMinutes % 60,
        })
      : t('rod.card.inWater', { count: timeInWaterMinutes });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundElement },
        isDragging && [styles.draggingContainer, { shadowColor: colors.text }],
      ]}
    >
      <View style={styles.header}>
        <View style={[styles.titleBadge, { backgroundColor: colors.primary }]}>
          <Text style={[styles.title, { color: colors.onPrimary }]}>{t('rod.title', { number })}</Text>
        </View>
        <IconButton
          accessibilityLabel={t('rod.card.reorder', { number })}
          disabled={isDragging}
          icon="drag-vertical"
          iconColor={colors.textSecondary}
          onPressIn={onDrag}
          size={24}
          style={styles.dragHandle}
        />
      </View>
      <Text variant="bodyS">{t('rod.card.bait', { bait: rod.bait })}</Text>
      <Text variant="bodyS">{timeInWater}</Text>
      <Text variant="bodyS">
        {distance === undefined || wraps === undefined
          ? t('rod.card.distanceUnavailable')
          : t('rod.card.distance', { distance, wraps })}
      </Text>

      <View style={styles.primaryActions}>
        <Button onPress={onBite} style={styles.action}>
          {t('fishBite.title')}
        </Button>
        <Button mode="contained-tonal" onPress={onRecast} style={styles.action}>
          {t('rod.card.recast')}
        </Button>
      </View>

      <Button mode="outlined" onPress={onEdit} style={styles.editAction}>
        {t('common.edit')}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    gap: spacing[1],
    padding: spacing[4],
  },
  draggingContainer: {
    elevation: 6,
    opacity: 0.95,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dragHandle: {
    margin: 0,
  },
  titleBadge: {
    borderRadius: 999,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
  },
  title: {
    fontWeight: '700',
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
