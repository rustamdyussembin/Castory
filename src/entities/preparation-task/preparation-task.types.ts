export interface PreparationTask {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: number;
  completedAt?: number;
}

export interface PreparationState {
  tasks: PreparationTask[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export interface SortedPreparationTasks {
  activeTasks: PreparationTask[];
  completedTasks: PreparationTask[];
}
