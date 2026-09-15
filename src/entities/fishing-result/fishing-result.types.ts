export interface FishBiteData {
  fish: string;
  weight: number;
}

export interface FishBiteResult extends FishBiteData {
  id: string;
  rodId: string;
  rodNumber: number;
  bait: string;
  timeInWaterMinutes: number;
  distance?: number;
  sector?: string;
  venue: string;
  date: string;
  time: string;
}

export interface FishingResult {
  venue: string;
  sector?: string;
  date: string;
  result: FishBiteResult[];
}

export type AddFishBiteResultData = Omit<FishBiteResult, 'date' | 'id' | 'time'> & {
  occurredAt?: number;
};

export interface FishingResultState {
  fishingResult: FishingResult | null;
  addFishBiteResult: (data: AddFishBiteResultData) => void;
  clearFishingResult: () => void;
}

export interface FishingResultsState {
  sessions: FishingResult[];
  addSession: (session: FishingResult) => void;
}

export interface FishingResultStats {
  averageWeight: number | null;
  bestBait: string | null;
  fishCount: number;
  maxWeight: number | null;
}
