import { calculatePegDistance } from '@/shared/lib/peg-distance';

import type { ISpod } from '../spod.types';

export const calculateSpodDistance = (wraps: ISpod['wraps'], pegDistance: ISpod['pegDistance']): number =>
  calculatePegDistance(wraps, pegDistance);
