import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ActiveSession, SessionState } from '../session.types';

const isActiveSession = (value: unknown): value is ActiveSession => {
  if (typeof value !== 'object' || value === null) return false;

  const session = value as Partial<ActiveSession>;

  return (
    typeof session.venue === 'string' &&
    session.venue.length > 0 &&
    (session.sector === undefined || typeof session.sector === 'string') &&
    typeof session.startedAt === 'number' &&
    Number.isFinite(session.startedAt)
  );
};

export const useSessionStore = create<SessionState>()(
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
      storage: createJSONStorage(() => AsyncStorage),
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
