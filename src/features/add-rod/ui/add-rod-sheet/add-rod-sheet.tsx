import { useTranslation } from 'react-i18next';

import { useRodStore } from '@/entities/rod';
import { BottomSheet } from '@/shared/ui';

import { useAddRodStore } from '../../model/add-rod.store';
import { AddRodForm } from '../add-rod-form/add-rod-form';

export const AddRodSheet = () => {
  const { t } = useTranslation();
  const editingRodId = useAddRodStore((state) => state.editingRodId);
  const isOpen = useAddRodStore((state) => state.isSheetOpen);
  const closeSheet = useAddRodStore((state) => state.closeSheet);
  const rods = useRodStore((state) => state.rods);
  const addRod = useRodStore((state) => state.addRod);
  const updateRod = useRodStore((state) => state.updateRod);
  const editingRod = rods.find((rod) => rod.id === editingRodId);

  const handleSubmit = (data: Parameters<typeof addRod>[0]) => {
    if (editingRod) {
      updateRod(editingRod.id, data);
    } else {
      addRod(data);
    }
    closeSheet();
  };

  return (
    <BottomSheet
      open={isOpen}
      onClose={closeSheet}
      title={
        editingRod
          ? t('rod.editTitle', { number: rods.indexOf(editingRod) + 1 })
          : t('rod.title', { number: rods.length + 1 })
      }
      dismissible={false}
    >
      {isOpen ? (
        <AddRodForm initialValues={editingRod} onCancel={closeSheet} onSubmit={handleSubmit} />
      ) : null}
    </BottomSheet>
  );
};
