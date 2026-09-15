export type PegDistance = 3 | 4 | 5;

export interface Rod {
  id: string;
  bait: string;
  wraps?: number;
  pegDistance: PegDistance;
}

export type AddRodData = Omit<Rod, 'id'>;

export interface RodState {
  rods: Rod[];
  addRod: (data: AddRodData) => void;
  clearRods: () => void;
}
