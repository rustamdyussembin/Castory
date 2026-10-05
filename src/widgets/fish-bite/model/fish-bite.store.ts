import { create } from 'zustand/index';
import { IFishBiteState } from '../fish-bite.types';

export const useFishBiteStore = create<IFishBiteState>()((set) => ({
  editingId: null,
  isSheetOpen: false,

  openSheet: (spodId) => {
    set({ editingId: spodId ?? null, isSheetOpen: true });
  },

  closeSheet: () => {
    set({ editingId: null, isSheetOpen: false });
  },
}));
