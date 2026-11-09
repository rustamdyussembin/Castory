import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createPersistStorage } from '@/shared/lib/storage';

import { MAX_SPODS } from '../spod.constants';
import type { ISpodState } from '../spod.types';

export const useSpodStore = create<ISpodState>()(
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
      storage: createPersistStorage(),
      partialize: ({ spods }) => ({ spods }),
    },
  ),
);
