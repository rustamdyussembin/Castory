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
              },
            ],
          };
        });
      },

      clearRods: () => {
        set({ rods: [] });
      },
    }),
    {
      name: 'session-rods',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ rods }) => ({ rods }),
    },
  ),
);
