import type { Spod } from '../../spod.types';

export interface ISpodCardProps {
  number: number;
  onEdit: () => void;
  spod: Spod;
}
