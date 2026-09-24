import { useTranslation } from 'react-i18next';

import { useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { useSpodStore } from '@/entities/spod';
import { BottomSheet } from '@/shared/ui';

import { useStartSessionStore } from '../../model/start-session';
import { StartSessionForm } from '../start-session-form/start-session-form';

export const StartSessionSheet = () => {
  const { t } = useTranslation();
  const isOpen = useStartSessionStore((state) => state.isSheetOpen);
  const closeSheet = useStartSessionStore((state) => state.closeSheet);

  const startSession = useSessionStore((state) => state.startSession);
  const clearRods = useRodStore((state) => state.clearRods);
  const clearSpods = useSpodStore((state) => state.clearSpods);

  const handleSubmit = (data: Parameters<typeof startSession>[0]) => {
    clearRods();
    clearSpods();
    startSession(data);
    closeSheet();
  };

  return (
    <BottomSheet open={isOpen} onClose={closeSheet} title={t('session.start')} dismissible={false}>
      <StartSessionForm onCancel={closeSheet} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
