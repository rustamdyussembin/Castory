export const calculateDistance = (wraps: number | undefined, pegDistance: number): number | undefined =>
  wraps === undefined ? undefined : Number((wraps * pegDistance).toFixed(2));
