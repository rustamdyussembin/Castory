import { create } from 'zustand';
import { IStartSessionState } from '../start-session.types';

export const useStartSessionStore = create<IStartSessionState>()((set) => ({
  isSheetOpen: false,

  openSheet: () => {
    set({ isSheetOpen: true });
  },

  closeSheet: () => {
    set({ isSheetOpen: false });
  },
}));
