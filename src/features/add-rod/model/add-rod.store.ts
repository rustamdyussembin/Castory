import { create } from 'zustand';

import type { IRod } from '@/entities/rod';

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

export const useOpenAddRodSheet = (): (() => void) => {
  const openSheet = useAddRodStore((state) => state.openSheet);

  return () => openSheet();
};

export const useOpenEditRodSheet = (): ((rodId: IRod['id']) => void) => useAddRodStore((state) => state.openSheet);
