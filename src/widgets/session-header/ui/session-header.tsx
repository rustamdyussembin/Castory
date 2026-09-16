import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  calculateFishingResultStats,
  createFishingResult,
  useFishingResultStore,
  useFishingResultsStore,
} from '@/entities/fishing-result';
import { useRodStore } from '@/entities/rod';
import { SessionFinishModal, SessionSummaryFinishModal, SessionSummary, useSessionStore } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';
import { ICompletedSessionSummary } from '@/shared/types';

// TODO: возможно перенести в feature. WeatherSummary и SessionSummary - проверить уместно ли их хранение в entities
export const SessionHeader = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [completedSession, setCompletedSession] = useState<ICompletedSessionSummary | null>(null);
  const activeSession = useSessionStore((state) => state.activeSession);
  const finishSession = useSessionStore((state) => state.finishSession);
  const clearRods = useRodStore((state) => state.clearRods);
  const fishingResult = useFishingResultStore((state) => state.fishingResult);
  const clearFishingResult = useFishingResultStore((state) => state.clearFishingResult);
  const addSession = useFishingResultsStore((state) => state.addSession);

  const handleConfirmFinish = () => {
    if (!activeSession) {
      setIsConfirmationOpen(false);
      return;
    }

    const finishedAt = Date.now();
    const result =
      fishingResult ??
      createFishingResult(
        {
          venue: activeSession.venue,
          sector: activeSession.sector,
        },
        finishedAt,
      );

    addSession(result);
    setCompletedSession({ finishedAt, result, startedAt: activeSession.startedAt });
    setIsConfirmationOpen(false);
    finishSession();
    clearRods();
    clearFishingResult();
  };

  const completedStats = completedSession ? calculateFishingResultStats(completedSession.result) : null;

  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary onFinish={() => setIsConfirmationOpen(true)} />

      <SessionFinishModal
        isConfirmationOpen={isConfirmationOpen}
        onSetIsConfirmationOpen={setIsConfirmationOpen}
        onConfirmFinish={handleConfirmFinish}
      />
      <SessionSummaryFinishModal
        completedSession={completedSession}
        completedStats={completedStats}
        onSetCompletedSession={setCompletedSession}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
});
