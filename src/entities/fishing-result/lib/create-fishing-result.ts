import { formatBiteDateTime } from './format-bite-date-time';
import { ICreateFishingResultData, IFishingResult } from '@/shared/types';

export const createFishingResult = (
  { sector, venue }: ICreateFishingResultData,
  timestamp = Date.now(),
): IFishingResult => ({
  venue,
  sector,
  date: formatBiteDateTime(timestamp).date,
  result: [],
});
