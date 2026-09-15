import { calculateRodDistance as calculateDistance, type PegDistance } from '@/entities/rod';

export const parseRodWraps = (value: string): number | undefined => {
  const normalizedValue = value.trim().replace(',', '.');
  if (!normalizedValue) return undefined;

  const wraps = Number(normalizedValue);
  return Number.isFinite(wraps) && wraps > 0 ? wraps : undefined;
};

export const calculateRodDistance = (wraps: string, pegDistance: string): number | undefined => {
  const parsedWraps = parseRodWraps(wraps);
  const parsedPegDistance = Number(pegDistance) as PegDistance;

  if (parsedWraps === undefined || !Number.isFinite(parsedPegDistance)) return undefined;

  return calculateDistance(parsedWraps, parsedPegDistance);
};
