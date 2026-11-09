import { create } from 'zustand';

import type { ISpod } from '@/entities/spod';

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

export const useOpenAddSpodSheet = (): (() => void) => {
  const openSheet = useAddSpodStore((state) => state.openSheet);

  return () => openSheet();
};

export const useOpenEditSpodSheet = (): ((spodId: ISpod['id']) => void) => useAddSpodStore((state) => state.openSheet);
