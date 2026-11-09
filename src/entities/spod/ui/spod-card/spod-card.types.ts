import type { ReactNode } from 'react';

import type { ISpod } from '../../spod.types';

export interface ISpodCardProps {
  actions?: ReactNode;
  number: number;
  spod: ISpod;
}
