import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BottomSheet } from '@/shared/ui';

import { FishBiteForm } from '../fish-bite-form/fish-bite-form';
import type { IFishBiteSheetProps } from './fish-bite-sheet.types';
import { IFishBiteData } from '@/shared/types';

export const FishBiteSheet: FC<IFishBiteSheetProps> = ({ onClose, onSubmit, open }) => {
  const { t } = useTranslation();
  const handleSubmit: SubmitHandler<IFishBiteData> = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <BottomSheet open={open} onClose={onClose} title={t('fishBite.title')} dismissible={false}>
      <FishBiteForm onCancel={onClose} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
