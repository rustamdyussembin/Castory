import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BottomSheet } from '@/shared/ui';

import { FishBiteForm } from '../fish-bite-form/fish-bite-form';
import { IFishBiteData } from '@/entities/fishing-result';
import { registerFishBite } from '../../model/register-fish-bite';
import { useFishBiteStore } from '../../model/fish-bite.store';

export const FishBiteSheet: FC = () => {
  const { t } = useTranslation();

  const biteRodId = useFishBiteStore((state) => state.editingId);
  const isOpen = useFishBiteStore((state) => state.isSheetOpen);
  const closeFishBiteSheet = useFishBiteStore((state) => state.closeSheet);

  const handleSubmit: SubmitHandler<IFishBiteData> = (data) => {
    if (biteRodId && registerFishBite(biteRodId, data)) closeFishBiteSheet();
  };

  return (
    <BottomSheet open={isOpen} onClose={closeFishBiteSheet} title={t('fishBite.title')} dismissible={false}>
      <FishBiteForm onCancel={closeFishBiteSheet} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
