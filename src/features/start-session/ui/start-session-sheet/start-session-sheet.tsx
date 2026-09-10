import { BottomSheet } from '@/shared/ui';
import { useStartSessionStore } from '../../model/start-session';
import { StartSessionForm } from '../start-session-form/start-session-form';

export const StartSessionSheet = () => {
  const isOpen = useStartSessionStore((state) => state.isSheetOpen);
  const closeSheet = useStartSessionStore((state) => state.closeSheet);

  const startSession = useStartSessionStore((state) => state.startSession);

  return (
    <BottomSheet open={isOpen} onClose={closeSheet}>
      <StartSessionForm onCancel={closeSheet} onSubmit={startSession} />
    </BottomSheet>
  );
};
