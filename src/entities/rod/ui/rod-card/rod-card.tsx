import { type FC, useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { spacing, useThemeColors } from '@/shared/theme';
import { Button, Text } from '@/shared/ui';

import { calculateRodDistance } from '../../lib/calculate-rod-distance';
import { getTimeInWaterMinutes } from '../../lib/get-time-in-water-minutes';
import type { IRodCardProps } from './rod-card.types';

const TIMER_UPDATE_INTERVAL_MS = 60_000;

export const RodCard: FC<IRodCardProps> = ({ number, onBite, onEdit, onRecast, rod }) => {
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

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundElement }]}>
      <Text>{t('rod.title', { number })}</Text>
      <Text variant="bodyS">{t('rod.card.bait', { bait: rod.bait })}</Text>
      <Text variant="bodyS">{t('rod.card.inWater', { count: timeInWaterMinutes })}</Text>
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
