import { type IFishBiteData, useFishingResultStore } from '@/entities/fishing-result';
import { getTimeInWaterMinutes, type IRod, useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { calculateDistance } from '@/shared/lib/distance';

/** Records a bite for the rod and recasts it. Returns `false` when there is no active session or rod. */
export const registerFishBite = (rodId: IRod['id'], data: IFishBiteData, occurredAt = Date.now()): boolean => {
  const { activeSession } = useSessionStore.getState();
  const { resetRodTimer, rods } = useRodStore.getState();
  const rodIndex = rods.findIndex((rod) => rod.id === rodId);
  const rod = rods[rodIndex];

  if (!activeSession || !rod) return false;

  useFishingResultStore.getState().addFishBiteResult({
    ...data,
    rodId: rod.id,
    rodNumber: rodIndex + 1,
    bait: rod.bait,
    timeInWaterMinutes: getTimeInWaterMinutes(rod.castAt, occurredAt),
    distance: calculateDistance(rod.wraps, rod.pegDistance),
    sector: activeSession.sector,
    venue: activeSession.venue,
    occurredAt,
  });
  resetRodTimer(rod.id, occurredAt);

  return true;
};
