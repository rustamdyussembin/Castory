export interface IStartSession {
  venue: string;
  sector: string;
}

export interface IStartSessionState {
  data: IStartSession | null;
  isSheetOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  startSession: (data: IStartSession) => void;
}
