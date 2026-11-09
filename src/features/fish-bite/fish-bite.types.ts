export interface IFishBiteState {
  editingId: string | null;
  isSheetOpen: boolean;
  openSheet: (rodId?: string) => void;
  closeSheet: () => void;
}
