import type { FishingResult } from '../fishing-result.types';
import { formatBiteDateTime } from './format-bite-date-time';

interface CreateFishingResultData {
  venue: string;
  sector?: string;
}

export const createFishingResult = (
  { sector, venue }: CreateFishingResultData,
  timestamp = Date.now(),
): FishingResult => ({
  venue,
  sector,
  date: formatBiteDateTime(timestamp).date,
  result: [],
});
