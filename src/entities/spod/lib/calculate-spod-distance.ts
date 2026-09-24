import { calculatePegDistance } from '@/shared/lib/peg-distance';

import type { Spod } from '../spod.types';

export const calculateSpodDistance = (wraps: Spod['wraps'], pegDistance: Spod['pegDistance']): number =>
  calculatePegDistance(wraps, pegDistance);
