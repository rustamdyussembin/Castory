import type { ReactNode } from 'react';

import type { Rod } from '../../rod.types';

export interface IRodCards {
  footer?: ReactNode;
  onAdd: () => void;
  onBite: (rodId: Rod['id']) => void;
  onEdit: (rodId: Rod['id']) => void;
}
