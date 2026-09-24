import type { Spod } from '../../spod.types';

export interface ISpodCardsProps {
  onEdit: (spodId: Spod['id']) => void;
  spods: Spod[];
}
