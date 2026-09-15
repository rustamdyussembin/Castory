import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  calculateFishingResultStats,
  createFishingResult,
  type FishingResult,
  useFishingResultStore,
  useFishingResultsStore,
} from '@/entities/fishing-result';
import { useRodStore } from '@/entities/rod';
import { formatSessionDuration, SessionSummary, useSessionStore } from '@/entities/session';
import { WeatherSummary } from '@/entities/weather';
import { spacing } from '@/shared/theme';
import { Button, Modal, Text } from '@/shared/ui';

interface CompletedSessionSummary {
  finishedAt: number;
  result: FishingResult;
  startedAt: number;
}

const formatWeight = (weight: number): string => String(Number(weight.toFixed(2))).replace('.', ',');

export const SessionHeader = () => {
  const { t } = useTranslation();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [completedSession, setCompletedSession] = useState<CompletedSessionSummary | null>(null);
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
  const completedDuration = completedSession
    ? formatSessionDuration(completedSession.startedAt, completedSession.finishedAt, {
        hour: t('session.duration.hour'),
        includeZeroHours: true,
        minute: t('session.duration.minute'),
      })
    : '';

  return (
    <View style={styles.container}>
      <WeatherSummary />
      <SessionSummary onFinish={() => setIsConfirmationOpen(true)} />

      <Modal
        visible={isConfirmationOpen}
        title={t('session.finishConfirmation.title')}
        onClose={() => setIsConfirmationOpen(false)}
      >
        <View style={styles.modalContent}>
          <Text variant="bodyS">{t('session.finishConfirmation.description')}</Text>
          <View style={styles.actions}>
            <Button mode="contained-tonal" onPress={() => setIsConfirmationOpen(false)} style={styles.action}>
              {t('common.cancel')}
            </Button>
            <Button onPress={handleConfirmFinish} style={styles.action}>
              {t('session.finishConfirmation.confirm')}
            </Button>
          </View>
        </View>
      </Modal>

      <Modal
        visible={completedSession !== null}
        title={t('session.summary.title')}
        onClose={() => setCompletedSession(null)}
      >
        {completedSession && completedStats ? (
          <View style={styles.modalContent}>
            <Text variant="bodyS">{t('session.summary.venue', { venue: completedSession.result.venue })}</Text>
            <Text variant="bodyS">{t('session.summary.duration', { duration: completedDuration })}</Text>
            <Text variant="bodyS">
              {t('session.summary.bestBait', { bait: completedStats.bestBait ?? t('common.noData') })}
            </Text>
            <Text variant="bodyS">{t('session.summary.fishCount', { count: completedStats.fishCount })}</Text>
            <Text variant="bodyS">
              {t('session.summary.maxWeight', {
                weight:
                  completedStats.maxWeight === null
                    ? t('common.noData')
                    : t('session.summary.weightValue', { weight: formatWeight(completedStats.maxWeight) }),
              })}
            </Text>
            <Text variant="bodyS">
              {t('session.summary.averageWeight', {
                weight:
                  completedStats.averageWeight === null
                    ? t('common.noData')
                    : t('session.summary.weightValue', { weight: formatWeight(completedStats.averageWeight) }),
              })}
            </Text>
            <Button onPress={() => setCompletedSession(null)}>{t('common.close')}</Button>
          </View>
        ) : null}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[3],
  },
  modalContent: {
    gap: spacing[4],
  },
  actions: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  action: {
    flex: 1,
  },
});
