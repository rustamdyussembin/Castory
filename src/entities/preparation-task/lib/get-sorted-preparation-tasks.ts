import type { PreparationTask, SortedPreparationTasks } from '../preparation-task.types';

export const getSortedPreparationTasks = (tasks: PreparationTask[]): SortedPreparationTasks => ({
  activeTasks: tasks.filter((task) => !task.isCompleted).sort((first, second) => second.createdAt - first.createdAt),
  completedTasks: tasks
    .filter((task) => task.isCompleted)
    .sort((first, second) => (second.completedAt ?? second.createdAt) - (first.completedAt ?? first.createdAt)),
});
