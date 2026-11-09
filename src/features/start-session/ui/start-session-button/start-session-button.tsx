import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { useStartSessionStore } from '../../model/start-session.store';

export const StartSessionButton = () => {
  const { t } = useTranslation();
  const openSheet = useStartSessionStore((state) => state.openSheet);

  return <Button onPress={openSheet}>{t('session.start')}</Button>;
};
