import type { IRod } from '../../rod.types';

export interface IRodCardProps {
  isDragging: boolean;
  number: number;
  rod: IRod;
  onBite: () => void;
  onDrag: () => void;
  onEdit: () => void;
  onRecast: () => void;
}
