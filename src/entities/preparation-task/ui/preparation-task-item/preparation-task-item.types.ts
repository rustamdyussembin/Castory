import type { ReactNode } from 'react';

import type { IPreparationTask } from '../../preparation-task.types';

export interface IPreparationTaskItemProps {
  actions?: ReactNode;
  task: IPreparationTask;
  onToggle: () => void;
}
