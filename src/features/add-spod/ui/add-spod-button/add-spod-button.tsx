import { useTranslation } from 'react-i18next';

import { MAX_SPODS, useSpodStore } from '@/entities/spod';
import { Button } from '@/shared/ui';

import { useOpenAddSpodSheet } from '../../model/add-spod.store';

export const AddSpodButton = () => {
  const { t } = useTranslation();
  const hasReachedSpodLimit = useSpodStore((state) => state.spods.length >= MAX_SPODS);
  const openAddSpodSheet = useOpenAddSpodSheet();

  return (
    <Button disabled={hasReachedSpodLimit} onPress={openAddSpodSheet}>
      {t('spod.add')}
    </Button>
  );
};
