export interface IPreparationTask {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: number;
  completedAt?: number;
}

export interface IPreparationState {
  tasks: IPreparationTask[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export interface ISortedPreparationTasks {
  activeTasks: IPreparationTask[];
  completedTasks: IPreparationTask[];
}
