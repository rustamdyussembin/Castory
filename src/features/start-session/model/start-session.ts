import { create } from 'zustand';
import { IStartSessionState } from '../start-session.types';

export const useStartSessionStore = create<IStartSessionState>()((set) => ({
  data: null,
  isSheetOpen: false,

  openSheet: () => {
    set({ isSheetOpen: true });
  },

  closeSheet: () => {
    set({ isSheetOpen: false });
  },

  startSession: (data) => {
    set({
      data,
      isSheetOpen: false,
    });
  },
}));
