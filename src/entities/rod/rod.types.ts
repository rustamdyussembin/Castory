import type { PegDistance } from '@/shared/lib/peg-distance';

export interface IRod {
  id: string;
  bait: string;
  wraps?: number;
  pegDistance: PegDistance;
  castAt: number;
}

export interface IRodFormData {
  bait: string;
  wraps?: number;
  pegDistance: PegDistance;
}

export type IAddRodData = IRodFormData;

export interface IRodState {
  rods: IRod[];
  addRod: (data: IAddRodData) => void;
  updateRod: (id: string, data: IRodFormData) => void;
  resetRodTimer: (id: string, castAt?: number) => void;
  reorderRods: (fromIndex: number, toIndex: number) => void;
  clearRods: () => void;
}
