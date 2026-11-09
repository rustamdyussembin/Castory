export interface IRod {
  id: string;
  bait: string;
  wraps?: number;
  pegDistance: number;
  castAt: number;
}

/** Data to create or update a rod: everything except the generated `id` and the cast time. */
export type IRodInput = Pick<IRod, 'bait' | 'pegDistance' | 'wraps'>;

export interface IRodState {
  rods: IRod[];
  addRod: (data: IRodInput) => void;
  updateRod: (id: string, data: IRodInput) => void;
  resetRodTimer: (id: string, castAt?: number) => void;
  reorderRods: (fromIndex: number, toIndex: number) => void;
  clearRods: () => void;
}
