import { useTranslation } from 'react-i18next';

import { BottomSheet } from '@/shared/ui';

import { useStartSessionStore } from '../../model/start-session';
import { StartSessionForm } from '../start-session-form/start-session-form';

export const StartSessionSheet = () => {
  const { t } = useTranslation();
  const isOpen = useStartSessionStore((state) => state.isSheetOpen);
  const closeSheet = useStartSessionStore((state) => state.closeSheet);

  const startSession = useStartSessionStore((state) => state.startSession);

  return (
    <BottomSheet open={isOpen} onClose={closeSheet} title={t('session.start')} dismissible={false}>
      <StartSessionForm onCancel={closeSheet} onSubmit={startSession} />
    </BottomSheet>
  );
};
