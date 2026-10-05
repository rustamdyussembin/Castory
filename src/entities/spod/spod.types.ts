import type { PegDistance } from '@/shared/lib/peg-distance';

export interface ISpod {
  id: string;
  wraps: number;
  pegDistance: PegDistance;
}

export type ISpodFormData = Pick<ISpod, 'pegDistance' | 'wraps'>;

export interface ISpodState {
  spods: ISpod[];
  addSpod: (data: ISpodFormData) => void;
  updateSpod: (id: string, data: ISpodFormData) => void;
  clearSpods: () => void;
}
