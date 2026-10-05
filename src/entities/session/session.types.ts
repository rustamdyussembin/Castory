export interface IActiveSession {
  venue: string;
  sector?: string;
  startedAt: number;
}

export interface IStartSessionData {
  venue: string;
  sector?: string;
}

export interface ISessionState {
  activeSession: IActiveSession | null;
  startSession: (data: IStartSessionData) => void;
  finishSession: () => void;
}

export interface ISessionDurationUnits {
  hour: string;
  includeZeroHours?: boolean;
  minute: string;
}
