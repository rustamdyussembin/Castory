import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { spacing, useThemeColors } from '@/shared/theme';
import { Button, Text } from '@/shared/ui';

import { calculateSpodDistance } from '../../lib/calculate-spod-distance';
import type { ISpodCardProps } from './spod-card.types';

export const SpodCard: FC<ISpodCardProps> = ({ number, onEdit, spod }) => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const distance = calculateSpodDistance(spod.wraps, spod.pegDistance);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundElement }]}>
      <View style={[styles.titleBadge, { backgroundColor: colors.primary }]}>
        <Text style={[styles.title, { color: colors.onPrimary }]}>{t('spod.title', { number })}</Text>
      </View>

      <Text variant="bodyS">{t('spod.card.distance', { distance, wraps: spod.wraps })}</Text>

      <Button mode="outlined" onPress={onEdit} style={styles.editAction}>
        {t('common.edit')}
      </Button>
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
  editAction: {
    marginTop: spacing[2],
    minWidth: 180,
  },
});
