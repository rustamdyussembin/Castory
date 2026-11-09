export interface ISpod {
  id: string;
  wraps: number;
  pegDistance: number;
}

/** Data to create or update a spod: everything except the generated `id`. */
export type ISpodInput = Pick<ISpod, 'pegDistance' | 'wraps'>;

export interface ISpodState {
  spods: ISpod[];
  addSpod: (data: ISpodInput) => void;
  updateSpod: (id: string, data: ISpodInput) => void;
  clearSpods: () => void;
}
