export interface IAddRodState {
  editingRodId: string | null;
  isSheetOpen: boolean;
  openSheet: (rodId?: string) => void;
  closeSheet: () => void;
}
