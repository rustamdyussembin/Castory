export interface ActiveSession {
  venue: string;
  sector?: string;
  startedAt: number;
}

export interface StartSessionData {
  venue: string;
  sector?: string;
}

export interface SessionState {
  activeSession: ActiveSession | null;
  startSession: (data: StartSessionData) => void;
  finishSession: () => void;
}
