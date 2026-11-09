import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useOpenEditSpodSheet } from '../../model/add-spod.store';
import type { IEditSpodButtonProps } from './edit-spod-button.types';

export const EditSpodButton: FC<IEditSpodButtonProps> = ({ spodId, style }) => {
  const { t } = useTranslation();
  const openEditSpodSheet = useOpenEditSpodSheet();

  return (
    <Button mode="outlined" onPress={() => openEditSpodSheet(spodId)} style={style}>
      {t('common.edit')}
    </Button>
  );
};
