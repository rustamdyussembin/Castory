import { useTranslation } from 'react-i18next';

import type { IStartSessionData } from '@/entities/session';
import { BottomSheet } from '@/shared/ui';

import { startNewSession } from '../../model/start-session';
import { useStartSessionStore } from '../../model/start-session.store';
import { StartSessionForm } from '../start-session-form/start-session-form';

export const StartSessionSheet = () => {
  const { t } = useTranslation();
  const isOpen = useStartSessionStore((state) => state.isSheetOpen);
  const closeSheet = useStartSessionStore((state) => state.closeSheet);

  const handleSubmit = (data: IStartSessionData) => {
    startNewSession(data);
    closeSheet();
  };

  return (
    <BottomSheet open={isOpen} onClose={closeSheet} title={t('session.start')} dismissible={false}>
      <StartSessionForm onCancel={closeSheet} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
