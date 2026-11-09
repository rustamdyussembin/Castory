import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useOpenFinishSessionConfirmation } from '../../model/finish-session.store';

export const FinishSessionButton = () => {
  const { t } = useTranslation();
  const openFinishSessionConfirmation = useOpenFinishSessionConfirmation();

  return (
    <Button onPress={openFinishSessionConfirmation} mode="text">
      {t('session.finish')}
    </Button>
  );
};
