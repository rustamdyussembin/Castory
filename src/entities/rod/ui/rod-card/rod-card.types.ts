import type { Rod } from '../../rod.types';

export interface IRodCardProps {
  number: number;
  rod: Rod;
  onBite: () => void;
  onEdit: () => void;
  onRecast: () => void;
}
