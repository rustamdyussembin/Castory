import type { PegDistance } from '@/shared/lib/peg-distance';

export interface Rod {
  id: string;
  bait: string;
  wraps?: number;
  pegDistance: PegDistance;
  castAt: number;
}

export interface RodFormData {
  bait: string;
  wraps?: number;
  pegDistance: PegDistance;
}

export type AddRodData = RodFormData;

export interface RodState {
  rods: Rod[];
  addRod: (data: AddRodData) => void;
  updateRod: (id: string, data: RodFormData) => void;
  resetRodTimer: (id: string, castAt?: number) => void;
  reorderRods: (fromIndex: number, toIndex: number) => void;
  clearRods: () => void;
}
