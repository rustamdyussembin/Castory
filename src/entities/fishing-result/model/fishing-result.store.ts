import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { formatBiteDateTime } from '../lib/format-bite-date-time';
import type { FishingResultState } from '../fishing-result.types';

export const useFishingResultStore = create<FishingResultState>()(
  persist(
    (set) => ({
      fishingResult: null,

      addFishBiteResult: ({ occurredAt = Date.now(), ...data }) => {
        const { date, time } = formatBiteDateTime(occurredAt);
        const resultItem = {
          ...data,
          id: `${occurredAt}-${data.rodId}`,
          date,
          time,
        };

        set((state) => ({
          fishingResult: {
            venue: data.venue,
            sector: data.sector,
            date,
            result: [...(state.fishingResult?.result ?? []), resultItem],
          },
        }));
      },
    }),
    {
      name: 'fishing-result',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ fishingResult }) => ({ fishingResult }),
    },
  ),
);
