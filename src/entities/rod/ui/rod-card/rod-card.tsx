import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { spacing, useThemeColors } from '@/shared/theme';
import { Text } from '@/shared/ui';

import { getTimeInWaterMinutes } from '../../lib/get-time-in-water-minutes';
import type { IRodCardProps } from './rod-card.types';
import { calculateDistance } from '@/shared/lib/distance';
import { useNow } from '@/shared/lib/use-now';

const TIMER_UPDATE_INTERVAL_MS = 60_000;

export const RodCard: FC<IRodCardProps> = ({ actions, headerAction, isDragging = false, number, rod }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const now = useNow(TIMER_UPDATE_INTERVAL_MS);

  const wraps = rod.wraps;
  const distance = calculateDistance(wraps, rod.pegDistance);
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
        {headerAction}
      </View>
      <Text variant="bodyS">{t('rod.card.bait', { bait: rod.bait })}</Text>
      <Text variant="bodyS">{timeInWater}</Text>
      <Text variant="bodyS">
        {distance === undefined || wraps === undefined
          ? t('rod.card.distanceUnavailable')
          : t('rod.card.distance', { distance, wraps })}
      </Text>
      {actions}
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
  titleBadge: {
    borderRadius: 999,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
  },
  title: {
    fontWeight: '700',
  },
});
