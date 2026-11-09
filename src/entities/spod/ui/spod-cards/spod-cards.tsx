import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { spacing } from '@/shared/theme';

import { SpodCard } from '../spod-card/spod-card';
import type { ISpodCardsProps } from './spod-cards.types';

export const SpodCards: FC<ISpodCardsProps> = ({ renderActions, spods }) => {
  if (spods.length === 0) return null;

  return (
    <View style={styles.container}>
      {spods.map((spod, index) => (
        <SpodCard key={spod.id} number={index + 1} actions={renderActions?.(spod)} spod={spod} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[4],
  },
});
