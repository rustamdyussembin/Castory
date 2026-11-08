import { FC, useState } from 'react';
import { SessionFinishModal } from '../session-finish-modal/session-finish-modal';
import { SessionSummaryFinishModal } from '../session-summary-finish-modal/session-summary-finish-modal';
import { finishActiveSession } from '../../model/finish-session';
import { useFinishSessionConfirmationModalStore } from '../../model/finish-session.store';
import { calculateFishingResultStats, ICompletedSessionSummary } from '@/entities/fishing-result';

export const FinishSession: FC = () => {
  const isConfirmationOpen = useFinishSessionConfirmationModalStore((state) => state.isModalOpen);
  const closeConfirmationModal = useFinishSessionConfirmationModalStore((state) => state.closeModal);

  const [completedSession, setCompletedSession] = useState<ICompletedSessionSummary | null>(null);

  const handleConfirmFinish = () => {
    const summary = finishActiveSession();

    if (summary) {
      setCompletedSession(summary);
    }

    closeConfirmationModal();
  };

  const completedStats = completedSession ? calculateFishingResultStats(completedSession.result) : null;

  return (
    <>
      <SessionFinishModal
        isConfirmationOpen={isConfirmationOpen}
        onCloseConfirmationModal={closeConfirmationModal}
        onConfirmFinish={handleConfirmFinish}
      />
      <SessionSummaryFinishModal
        completedSession={completedSession}
        completedStats={completedStats}
        onSetCompletedSession={setCompletedSession}
      />
    </>
  );
};
