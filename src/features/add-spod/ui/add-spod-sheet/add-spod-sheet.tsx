import { useTranslation } from 'react-i18next';

import { useSpodStore } from '@/entities/spod';
import { BottomSheet } from '@/shared/ui';

import { useAddSpodStore } from '../../model/add-spod.store';
import { AddSpodForm } from '../add-spod-form/add-spod-form';

export const AddSpodSheet = () => {
  const { t } = useTranslation();
  const editingSpodId = useAddSpodStore((state) => state.editingSpodId);
  const isOpen = useAddSpodStore((state) => state.isSheetOpen);
  const closeSheet = useAddSpodStore((state) => state.closeSheet);
  const spods = useSpodStore((state) => state.spods);
  const addSpod = useSpodStore((state) => state.addSpod);
  const updateSpod = useSpodStore((state) => state.updateSpod);
  const editingSpod = spods.find((spod) => spod.id === editingSpodId);

  const handleSubmit = (data: Parameters<typeof addSpod>[0]) => {
    if (editingSpod) {
      updateSpod(editingSpod.id, data);
    } else {
      addSpod(data);
    }
    closeSheet();
  };

  return (
    <BottomSheet
      open={isOpen}
      onClose={closeSheet}
      title={
        editingSpod
          ? t('spod.editTitle', { number: spods.indexOf(editingSpod) + 1 })
          : t('spod.title', { number: spods.length + 1 })
      }
      dismissible={false}
    >
      {isOpen ? <AddSpodForm initialValues={editingSpod} onCancel={closeSheet} onSubmit={handleSubmit} /> : null}
    </BottomSheet>
  );
};
