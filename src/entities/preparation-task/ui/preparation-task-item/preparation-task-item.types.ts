import type { PreparationTask } from '../../preparation-task.types';

export interface IPreparationTaskItemProps {
  task: PreparationTask;
  onRemove: () => void;
  onToggle: () => void;
}
