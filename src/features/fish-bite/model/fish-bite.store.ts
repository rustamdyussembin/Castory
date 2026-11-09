import { create } from 'zustand';

import type { IRod } from '@/entities/rod';

import { IFishBiteState } from '../fish-bite.types';

export const useFishBiteStore = create<IFishBiteState>()((set) => ({
  editingId: null,
  isSheetOpen: false,

  openSheet: (rodId) => {
    set({ editingId: rodId ?? null, isSheetOpen: true });
  },

  closeSheet: () => {
    set({ editingId: null, isSheetOpen: false });
  },
}));

export const useOpenFishBiteSheet = (): ((rodId: IRod['id']) => void) => useFishBiteStore((state) => state.openSheet);
