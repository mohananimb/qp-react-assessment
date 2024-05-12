export interface TaskType {
  id: number;
  task: string;
  completed: boolean;
  onChange?: (id: number) => void;
}
