import type { PegDistance } from '@/shared/lib/peg-distance';

export interface Spod {
  id: string;
  wraps: number;
  pegDistance: PegDistance;
}

export type SpodFormData = Pick<Spod, 'pegDistance' | 'wraps'>;

export interface SpodState {
  spods: Spod[];
  addSpod: (data: SpodFormData) => void;
  updateSpod: (id: string, data: SpodFormData) => void;
  clearSpods: () => void;
}
