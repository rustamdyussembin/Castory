export interface IAddSpodState {
  editingSpodId: string | null;
  isSheetOpen: boolean;
  openSheet: (spodId?: string) => void;
  closeSheet: () => void;
}
