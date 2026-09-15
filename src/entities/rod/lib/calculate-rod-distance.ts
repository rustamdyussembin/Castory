import type { PegDistance } from '../rod.types';

export const calculateRodDistance = (wraps: number | undefined, pegDistance: PegDistance): number | undefined =>
  wraps === undefined ? undefined : Number((wraps * pegDistance).toFixed(2));
