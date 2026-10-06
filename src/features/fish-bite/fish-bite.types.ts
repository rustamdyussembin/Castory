export interface IFishBiteState {
  editingId: string | null;
  isSheetOpen: boolean;
  openSheet: (spodId?: string) => void;
  closeSheet: () => void;
}
