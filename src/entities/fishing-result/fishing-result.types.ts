import { IFishBiteResult, IFishingResult } from '@/shared/types';

export type IAddFishBiteResultData = Omit<IFishBiteResult, 'date' | 'id' | 'time'> & {
  occurredAt?: number;
};

export interface IFishingResultState {
  fishingResult: IFishingResult | null;
  addFishBiteResult: (data: IAddFishBiteResultData) => void;
  clearFishingResult: () => void;
}

export interface IFishingResultsState {
  sessions: IFishingResult[];
  addSession: (session: IFishingResult) => void;
}
