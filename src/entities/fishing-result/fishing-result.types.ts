import { IFishBiteResult, IFishingResult } from '@/shared/types';

export type AddFishBiteResultData = Omit<IFishBiteResult, 'date' | 'id' | 'time'> & {
  occurredAt?: number;
};

export interface FishingResultState {
  fishingResult: IFishingResult | null;
  addFishBiteResult: (data: AddFishBiteResultData) => void;
  clearFishingResult: () => void;
}

export interface FishingResultsState {
  sessions: IFishingResult[];
  addSession: (session: IFishingResult) => void;
}
