export const PEG_DISTANCE_OPTIONS = ['3', '4', '5'] as const;

export type PegDistance = 3 | 4 | 5;

export function calculatePegDistance(wraps: number, pegDistance: PegDistance): number;
export function calculatePegDistance(wraps: undefined, pegDistance: PegDistance): undefined;
export function calculatePegDistance(wraps: number | undefined, pegDistance: PegDistance): number | undefined;
export function calculatePegDistance(wraps: number | undefined, pegDistance: PegDistance): number | undefined {
  return wraps === undefined ? undefined : Number((wraps * pegDistance).toFixed(2));
}

export const parsePegWraps = (value: string): number | undefined => {
  const normalizedValue = value.trim().replace(',', '.');
  if (!normalizedValue) return undefined;

  const wraps = Number(normalizedValue);
  return Number.isFinite(wraps) && wraps > 0 ? wraps : undefined;
};

export const parsePegDistance = (value: string): PegDistance | undefined => {
  const distance = Number(value);
  return distance === 3 || distance === 4 || distance === 5 ? distance : undefined;
};

export const calculatePegFormDistance = (wraps: string, pegDistance: string): number | undefined => {
  const parsedWraps = parsePegWraps(wraps);
  const parsedPegDistance = parsePegDistance(pegDistance);

  if (parsedWraps === undefined || parsedPegDistance === undefined) return undefined;

  return calculatePegDistance(parsedWraps, parsedPegDistance);
};
