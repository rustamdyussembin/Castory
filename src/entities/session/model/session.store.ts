import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createPersistStorage } from '@/shared/lib/storage';

import type { ISessionState } from '../session.types';
import { isActiveSession } from '../lib/is-active-session';

export const useSessionStore = create<ISessionState>()(
  persist(
    (set) => ({
      activeSession: null,

      startSession: ({ sector, venue }) => {
        set({
          activeSession: {
            venue: venue.trim(),
            sector: sector?.trim() || undefined,
            startedAt: Date.now(),
          },
        });
      },

      finishSession: () => {
        set({ activeSession: null });
      },
    }),
    {
      name: 'active-session',
      storage: createPersistStorage(),
      partialize: ({ activeSession }) => ({ activeSession }),
      merge: (persistedState, currentState) => {
        if (
          typeof persistedState === 'object' &&
          persistedState !== null &&
          'activeSession' in persistedState &&
          (persistedState.activeSession === null || isActiveSession(persistedState.activeSession))
        ) {
          return { ...currentState, activeSession: persistedState.activeSession };
        }

        return currentState;
      },
    },
  ),
);

export const useHasActiveSession = () => useSessionStore((state) => state.activeSession !== null);
