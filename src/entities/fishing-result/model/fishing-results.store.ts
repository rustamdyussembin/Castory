import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { FishingResultsState } from '../fishing-result.types';

export const useFishingResultsStore = create<FishingResultsState>()(
  persist(
    (set) => ({
      sessions: [],

      addSession: (session) => {
        set((state) => ({ sessions: [...state.sessions, session] }));
      },
    }),
    {
      name: 'fishing-results',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ sessions }) => ({ sessions }),
    },
  ),
);
