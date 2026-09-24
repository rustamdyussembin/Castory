import { calculatePegDistance, type PegDistance } from '@/shared/lib/peg-distance';

export const calculateRodDistance = (wraps: number | undefined, pegDistance: PegDistance): number | undefined =>
  calculatePegDistance(wraps, pegDistance);
