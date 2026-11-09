import type { ReactNode } from 'react';

import type { ISpod } from '../../spod.types';

export interface ISpodCardsProps {
  renderActions?: (spod: ISpod) => ReactNode;
  spods: ISpod[];
}
