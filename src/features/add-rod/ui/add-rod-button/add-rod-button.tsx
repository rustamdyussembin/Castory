import { useTranslation } from 'react-i18next';

import { MAX_RODS, useRodStore } from '@/entities/rod';
import { Button } from '@/shared/ui';

import { useOpenAddRodSheet } from '../../model/add-rod.store';

export const AddRodButton = () => {
  const { t } = useTranslation();
  const hasReachedRodLimit = useRodStore((state) => state.rods.length >= MAX_RODS);
  const openAddRodSheet = useOpenAddRodSheet();

  return (
    <Button disabled={hasReachedRodLimit} onPress={openAddRodSheet}>
      {t('rod.add')}
    </Button>
  );
};
