import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { MAX_RODS } from '../rod.constants';
import type { RodState } from '../rod.types';

export const useRodStore = create<RodState>()(
  persist(
    (set) => ({
      rods: [],

      addRod: (data) => {
        set((state) => {
          if (state.rods.length >= MAX_RODS) return state;

          return {
            rods: [
              ...state.rods,
              {
                ...data,
                id: `${Date.now()}-${state.rods.length + 1}`,
                castAt: Date.now(),
              },
            ],
          };
        });
      },

      updateRod: (id, data) => {
        set((state) => ({
          rods: state.rods.map((rod) => (rod.id === id ? { ...rod, ...data } : rod)),
        }));
      },

      resetRodTimer: (id, castAt = Date.now()) => {
        set((state) => ({
          rods: state.rods.map((rod) => (rod.id === id ? { ...rod, castAt } : rod)),
        }));
      },

      clearRods: () => {
        set({ rods: [] });
      },
    }),
    {
      name: 'session-rods',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ rods }) => ({ rods }),
      version: 1,
      migrate: (persistedState, version) => {
        if (version >= 1 || typeof persistedState !== 'object' || persistedState === null) return persistedState;

        const state = persistedState as { rods?: Record<string, unknown>[] };

        return {
          ...state,
          rods: state.rods?.map((rod) => ({ ...rod, castAt: rod.castAt ?? Date.now() })) ?? [],
        };
      },
    },
  ),
);
