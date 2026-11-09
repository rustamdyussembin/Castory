import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useOpenFishBiteSheet } from '../../model/fish-bite.store';
import type { IFishBiteButtonProps } from './fish-bite-button.types';

export const FishBiteButton: FC<IFishBiteButtonProps> = ({ rodId, style }) => {
  const { t } = useTranslation();
  const openFishBiteSheet = useOpenFishBiteSheet();

  return (
    <Button onPress={() => openFishBiteSheet(rodId)} style={style}>
      {t('fishBite.title')}
    </Button>
  );
};
