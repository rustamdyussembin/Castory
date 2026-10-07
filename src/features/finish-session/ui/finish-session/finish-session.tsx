import { FC, useState } from 'react';
import { SessionFinishModal } from '../session-finish-modal/session-finish-modal';
import { SessionSummaryFinishModal } from '../session-summary-finish-modal/session-summary-finish-modal';
import { useFinishSessionConfirmationModalStore } from '../../model/finish-session.store';
import {
  calculateFishingResultStats,
  createFishingResult,
  ICompletedSessionSummary,
  useFishingResultsStore,
  useFishingResultStore,
} from '@/entities/fishing-result';
import { useSessionStore } from '@/entities/session';
import { useRodStore } from '@/entities/rod';
import { useSpodStore } from '@/entities/spod';

export const FinishSession: FC = () => {
  const isConfirmationOpen = useFinishSessionConfirmationModalStore((state) => state.isModalOpen);
  const closeConfirmationModal = useFinishSessionConfirmationModalStore((state) => state.closeModal);
  const activeSession = useSessionStore((state) => state.activeSession);
  const addSession = useFishingResultsStore((state) => state.addSession);
  const fishingResult = useFishingResultStore((state) => state.fishingResult);
  const finishSession = useSessionStore((state) => state.finishSession);
  const clearRods = useRodStore((state) => state.clearRods);
  const clearSpods = useSpodStore((state) => state.clearSpods);
  const clearFishingResult = useFishingResultStore((state) => state.clearFishingResult);

  const [completedSession, setCompletedSession] = useState<ICompletedSessionSummary | null>(null);

  const handleConfirmFinish = () => {
    if (!activeSession) {
      closeConfirmationModal();
      return;
    }

    const finishedAt = Date.now();
    const result =
      fishingResult ?? createFishingResult({ venue: activeSession.venue, sector: activeSession.sector }, finishedAt);

    addSession(result);
    setCompletedSession({ finishedAt, result, startedAt: activeSession.startedAt });
    closeConfirmationModal();
    finishSession();
    clearRods();
    clearSpods();
    clearFishingResult();
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
