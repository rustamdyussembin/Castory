import type { ISpod } from '../../spod.types';

export interface ISpodCardProps {
  number: number;
  onEdit: () => void;
  spod: ISpod;
}
