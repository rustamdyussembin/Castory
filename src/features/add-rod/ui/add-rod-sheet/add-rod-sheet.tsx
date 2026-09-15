import { useTranslation } from 'react-i18next';

import { useRodStore } from '@/entities/rod';
import { BottomSheet } from '@/shared/ui';

import { useAddRodStore } from '../../model/add-rod.store';
import { AddRodForm } from '../add-rod-form/add-rod-form';

export const AddRodSheet = () => {
  const { t } = useTranslation();
  const isOpen = useAddRodStore((state) => state.isSheetOpen);
  const closeSheet = useAddRodStore((state) => state.closeSheet);
  const rodCount = useRodStore((state) => state.rods.length);
  const addRod = useRodStore((state) => state.addRod);

  const handleSubmit = (data: Parameters<typeof addRod>[0]) => {
    addRod(data);
    closeSheet();
  };

  return (
    <BottomSheet
      open={isOpen}
      onClose={closeSheet}
      title={t('rod.title', { number: rodCount + 1 })}
      dismissible={false}
    >
      <AddRodForm onCancel={closeSheet} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
