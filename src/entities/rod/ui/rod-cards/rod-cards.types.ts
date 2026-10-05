import type { ReactNode } from 'react';

import type { IRod } from '../../rod.types';

export interface IRodCards {
  footer?: ReactNode;
  onAdd: () => void;
  onBite: (rodId: IRod['id']) => void;
  onEdit: (rodId: IRod['id']) => void;
}
