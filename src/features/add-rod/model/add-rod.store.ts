import { create } from 'zustand';

import type { IAddRodState } from '../add-rod.types';

export const useAddRodStore = create<IAddRodState>()((set) => ({
  isSheetOpen: false,

  openSheet: () => {
    set({ isSheetOpen: true });
  },

  closeSheet: () => {
    set({ isSheetOpen: false });
  },
}));
