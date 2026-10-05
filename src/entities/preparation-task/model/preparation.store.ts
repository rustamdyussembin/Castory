import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { IPreparationState } from '../preparation-task.types';

export const usePreparationStore = create<IPreparationState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (value) => {
        const title = value.trim();
        if (!title) return;

        const createdAt = Date.now();

        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: `${createdAt}-${state.tasks.length + 1}`,
              title,
              isCompleted: false,
              createdAt,
            },
          ],
        }));
      },

      toggleTask: (id) => {
        const completedAt = Date.now();

        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  isCompleted: !task.isCompleted,
                  completedAt: task.isCompleted ? undefined : completedAt,
                }
              : task,
          ),
        }));
      },

      removeTask: (id) => {
        set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
      },
    }),
    {
      name: 'preparation-tasks',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ tasks }) => ({ tasks }),
      version: 1,
      migrate: (persistedState) => {
        if (typeof persistedState !== 'object' || persistedState === null) return { tasks: [] };

        const state = persistedState as { tasks?: IPreparationState['tasks'] };

        return { tasks: Array.isArray(state.tasks) ? state.tasks : [] };
      },
    },
  ),
);
