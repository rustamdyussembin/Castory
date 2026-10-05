import type { IPreparationTask } from '../../preparation-task.types';

export interface IPreparationTaskItemProps {
  task: IPreparationTask;
  onRemove: () => void;
  onToggle: () => void;
}
