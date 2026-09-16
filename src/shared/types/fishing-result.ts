export interface ICreateFishingResultData {
  venue: string;
  sector?: string;
}

export interface IFishBiteData {
  fish: string;
  weight: number;
}

export interface IFishBiteResult extends IFishBiteData {
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

export interface IFishingResult {
  venue: string;
  sector?: string;
  date: string;
  result: IFishBiteResult[];
}

export interface ICompletedSessionSummary {
  finishedAt: number;
  result: IFishingResult;
  startedAt: number;
}

export interface IFishingResultStats {
  averageWeight: number | null;
  bestBait: string | null;
  fishCount: number;
  maxWeight: number | null;
}
