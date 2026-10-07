export function calculateDistance(
  wraps: string | number | undefined,
  pegDistance: number | string,
): number | undefined {
  return wraps === undefined ? undefined : Number((+wraps * +pegDistance).toFixed(2));
}

export const parseWraps = (value: string): number | undefined => {
  const normalizedValue = value.trim().replace(',', '.');
  if (!normalizedValue) return undefined;

  const wraps = Number(normalizedValue);
  return Number.isFinite(wraps) && wraps > 0 ? wraps : undefined;
};

export const parseDistance = (value: string): number | undefined => {
  const distance = Number(value);
  return distance === 3 || distance === 4 || distance === 5 ? distance : undefined;
};

export const calculateFormDistance = (wraps: string, pegDistance: string): number | undefined => {
  const parsedWraps = parseWraps(wraps);
  const parsedPegDistance = parseDistance(pegDistance);

  if (parsedWraps === undefined || parsedPegDistance === undefined) return undefined;

  return calculateDistance(parsedWraps, parsedPegDistance);
};
