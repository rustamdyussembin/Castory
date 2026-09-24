import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { MAX_SPODS } from '../spod.constants';
import type { SpodState } from '../spod.types';

export const useSpodStore = create<SpodState>()(
  persist(
    (set) => ({
      spods: [],

      addSpod: (data) => {
        set((state) => {
          if (state.spods.length >= MAX_SPODS) return state;

          return {
            spods: [
              ...state.spods,
              {
                ...data,
                id: `${Date.now()}-${state.spods.length + 1}`,
              },
            ],
          };
        });
      },

      updateSpod: (id, data) => {
        set((state) => ({
          spods: state.spods.map((spod) => (spod.id === id ? { ...spod, ...data } : spod)),
        }));
      },

      clearSpods: () => {
        set({ spods: [] });
      },
    }),
    {
      name: 'session-spods',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ spods }) => ({ spods }),
    },
  ),
);
