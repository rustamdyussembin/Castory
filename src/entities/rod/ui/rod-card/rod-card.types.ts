import type { Rod } from '../../rod.types';

export interface IRodCardProps {
  isDragging: boolean;
  number: number;
  rod: Rod;
  onBite: () => void;
  onDrag: () => void;
  onEdit: () => void;
  onRecast: () => void;
}
