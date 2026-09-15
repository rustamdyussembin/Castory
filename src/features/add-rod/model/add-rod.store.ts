import { create } from 'zustand';

import type { IAddRodState } from '../add-rod.types';

export const useAddRodStore = create<IAddRodState>()((set) => ({
  editingRodId: null,
  isSheetOpen: false,

  openSheet: (rodId) => {
    set({ editingRodId: rodId ?? null, isSheetOpen: true });
  },

  closeSheet: () => {
    set({ editingRodId: null, isSheetOpen: false });
  },
}));
