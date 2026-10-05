import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BottomSheet } from '@/shared/ui';

import { FishBiteForm } from '../fish-bite-form/fish-bite-form';
import { IFishBiteData } from '@/shared/types';
import { calculateRodDistance, getTimeInWaterMinutes, useRodStore } from '@/entities/rod';
import { useSessionStore } from '@/entities/session';
import { useFishingResultStore } from '@/entities/fishing-result';
import { useFishBiteStore } from '@/widgets/fish-bite';

export const FishBiteSheet: FC = () => {
  const { t } = useTranslation();

  const activeSession = useSessionStore((state) => state.activeSession);
  const rods = useRodStore((state) => state.rods);
  const biteRodId = useFishBiteStore((state) => state.editingId);
  const isOpen = useFishBiteStore((state) => state.isSheetOpen);
  const biteRod = rods.find((rod) => rod.id === biteRodId);
  const closeFishBiteSheet = useFishBiteStore((state) => state.closeSheet);
  const addFishBiteResult = useFishingResultStore((state) => state.addFishBiteResult);
  const resetRodTimer = useRodStore((state) => state.resetRodTimer);

  const handleSubmit: SubmitHandler<IFishBiteData> = (data) => {
    if (!activeSession || !biteRod) {
      return;
    }

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

    closeFishBiteSheet();
    resetRodTimer(biteRod.id, occurredAt);
  };

  return (
    <BottomSheet open={isOpen} onClose={closeFishBiteSheet} title={t('fishBite.title')} dismissible={false}>
      <FishBiteForm onCancel={closeFishBiteSheet} onSubmit={handleSubmit} />
    </BottomSheet>
  );
};
