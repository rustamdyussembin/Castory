import type { ISpod } from '../../spod.types';

export interface ISpodCardsProps {
  onEdit: (spodId: ISpod['id']) => void;
  spods: ISpod[];
}
