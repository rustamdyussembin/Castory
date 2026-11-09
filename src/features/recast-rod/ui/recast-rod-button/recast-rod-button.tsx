import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useRodStore } from '@/entities/rod';
import { Button } from '@/shared/ui';

import type { IRecastRodButtonProps } from './recast-rod-button.types';

export const RecastRodButton: FC<IRecastRodButtonProps> = ({ rodId, style }) => {
  const { t } = useTranslation();
  const resetRodTimer = useRodStore((state) => state.resetRodTimer);

  return (
    <Button mode="contained-tonal" onPress={() => resetRodTimer(rodId)} style={style}>
      {t('rod.card.recast')}
    </Button>
  );
};
