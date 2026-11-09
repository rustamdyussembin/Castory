import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { spacing, useThemeColors } from '@/shared/theme';
import { Text } from '@/shared/ui';

import type { ISpodCardProps } from './spod-card.types';
import { calculateDistance } from '@/shared/lib/distance';

export const SpodCard: FC<ISpodCardProps> = ({ actions, number, spod }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const distance = calculateDistance(spod.wraps, spod.pegDistance);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundElement }]}>
      <View style={[styles.titleBadge, { backgroundColor: colors.primary }]}>
        <Text style={[styles.title, { color: colors.onPrimary }]}>{t('spod.title', { number })}</Text>
      </View>

      {distance && <Text variant="bodyS">{t('spod.card.distance', { distance: distance, wraps: spod.wraps })}</Text>}

      {actions}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderRadius: 12,
    gap: spacing[2],
    padding: spacing[4],
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
