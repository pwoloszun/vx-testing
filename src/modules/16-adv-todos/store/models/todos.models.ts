export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export type TodoParams = Partial<Todo>;

export enum TodoStatus {
  Persisted = 'PERSISTED',
  Saving = 'SAVING',
  Removing = 'REMOVING',
  Editing = 'EDITING',
}
