import type { ReactNode } from 'react';

import type { IRod } from '../../rod.types';

export interface IRodCardProps {
  actions?: ReactNode;
  headerAction?: ReactNode;
  isDragging?: boolean;
  number: number;
  rod: IRod;
}
