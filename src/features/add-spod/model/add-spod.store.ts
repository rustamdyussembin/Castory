import { create } from 'zustand';

import type { IAddSpodState } from '../add-spod.types';

export const useAddSpodStore = create<IAddSpodState>()((set) => ({
  editingSpodId: null,
  isSheetOpen: false,

  openSheet: (spodId) => {
    set({ editingSpodId: spodId ?? null, isSheetOpen: true });
  },

  closeSheet: () => {
    set({ editingSpodId: null, isSheetOpen: false });
  },
}));
