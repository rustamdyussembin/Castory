import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createPersistStorage } from '@/shared/lib/storage';

import type { IFishingResultsState } from '../fishing-result.types';

export const useFishingResultsStore = create<IFishingResultsState>()(
  persist(
    (set) => ({
      sessions: [],

      addSession: (session) => {
        set((state) => ({ sessions: [...state.sessions, session] }));
      },
    }),
    {
      name: 'fishing-results',
      storage: createPersistStorage(),
      partialize: ({ sessions }) => ({ sessions }),
    },
  ),
);
