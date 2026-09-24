import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useFishingResultStore } from '@/entities/fishing-result';
import { calculateRodDistance, getTimeInWaterMinutes, useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { AddRodSheet } from '@/features/add-rod';
import { FishBiteSheet } from '@/features/fish-bite';
import { StartSessionSheet, useStartSessionStore } from '@/features/start-session';
import { spacing } from '@/shared/theme';
import { Button } from '@/shared/ui';
import { SessionHeader } from '@/widgets/session-header';
import { RodCards } from '@/entities/rod/ui/rod-cards/rod-cards';
import { IFishBiteData } from '@/shared/types';

export const MainScreen = () => {
  const { t } = useTranslation();
  const [biteRodId, setBiteRodId] = useState<string | null>(null);
  const activeSession = useSessionStore((state) => state.activeSession);
  const rods = useRodStore((state) => state.rods);
  const resetRodTimer = useRodStore((state) => state.resetRodTimer);
  const addFishBiteResult = useFishingResultStore((state) => state.addFishBiteResult);
  const openStartSessionSheet = useStartSessionStore((state) => state.openSheet);
  const hasActiveSession = activeSession !== null;
  const biteRod = rods.find((rod) => rod.id === biteRodId);

  const handleBiteSubmit = (data: IFishBiteData) => {
    if (!activeSession || !biteRod) return;

    const occurredAt = Date.now();

    addFishBiteResult({
      ...data,
      rodId: biteRod.id,
      rodNumber: rods.indexOf(biteRod) + 1,
      bait: biteRod.bait,
      timeInWaterMinutes: getTimeInWaterMinutes(biteRod.castAt, occurredAt),
      distance: calculateRodDistance(biteRod.wraps, biteRod.pegDistance),
      sector: activeSession.sector,
      venue: activeSession.venue,
      occurredAt,
    });
    resetRodTimer(biteRod.id, occurredAt);
  };

  return (
    <View style={styles.container}>
      <SessionHeader />
      {hasActiveSession && <RodCards setBiteRodId={setBiteRodId} />}
      {!hasActiveSession && (
        <View style={styles.startButtonContainer}>
          <Button onPress={openStartSessionSheet}>{t('session.start')}</Button>
        </View>
      )}
      <StartSessionSheet />
      <AddRodSheet />
      {biteRod ? <FishBiteSheet open onClose={() => setBiteRodId(null)} onSubmit={handleBiteSubmit} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rodList: {
    gap: spacing[4],
    paddingBottom: spacing[6],
    paddingTop: spacing[4],
  },
  rodScroll: {
    flex: 1,
  },
});
