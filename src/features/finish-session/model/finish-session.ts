import {
  createFishingResult,
  type ICompletedSessionSummary,
  useFishingResultsStore,
  useFishingResultStore,
} from '@/entities/fishing-result';
import { useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { useSpodStore } from '@/entities/spod';

export const finishActiveSession = (finishedAt = Date.now()): ICompletedSessionSummary | null => {
  const { activeSession, finishSession } = useSessionStore.getState();

  if (!activeSession) return null;

  const { clearFishingResult, fishingResult } = useFishingResultStore.getState();
  const result =
    fishingResult ?? createFishingResult({ venue: activeSession.venue, sector: activeSession.sector }, finishedAt);

  useFishingResultsStore.getState().addSession(result);
  finishSession();
  useRodStore.getState().clearRods();
  useSpodStore.getState().clearSpods();
  clearFishingResult();

  return { finishedAt, result, startedAt: activeSession.startedAt };
};
