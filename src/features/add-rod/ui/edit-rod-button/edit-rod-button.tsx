import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useOpenEditRodSheet } from '../../model/add-rod.store';
import type { IEditRodButtonProps } from './edit-rod-button.types';

export const EditRodButton: FC<IEditRodButtonProps> = ({ rodId, style }) => {
  const { t } = useTranslation();
  const openEditRodSheet = useOpenEditRodSheet();

  return (
    <Button mode="outlined" onPress={() => openEditRodSheet(rodId)} style={style}>
      {t('common.edit')}
    </Button>
  );
};
