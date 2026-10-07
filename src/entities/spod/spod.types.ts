export interface ISpod {
  id: string;
  wraps: number;
  pegDistance: number;
}

export type ISpodFormData = Pick<ISpod, 'pegDistance' | 'wraps'>;

export interface ISpodState {
  spods: ISpod[];
  addSpod: (data: ISpodFormData) => void;
  updateSpod: (id: string, data: ISpodFormData) => void;
  clearSpods: () => void;
}
