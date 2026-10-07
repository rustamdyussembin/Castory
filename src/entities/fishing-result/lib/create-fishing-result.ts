import { ICreateFishingResultData, IFishingResult } from '../fishing-result.types';
import { formatBiteDateTime } from './format-bite-date-time';

export const createFishingResult = (
  { sector, venue }: ICreateFishingResultData,
  timestamp = Date.now(),
): IFishingResult => ({
  venue,
  sector,
  date: formatBiteDateTime(timestamp).date,
  result: [],
});
