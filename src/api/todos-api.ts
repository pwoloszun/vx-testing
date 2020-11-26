import DataApiService from './data-api.service';

const delayInMs = 1800;

export interface Todo {
  id: number;
  title: string;
  description?: string;
}

const api = new DataApiService<Todo>('/api/todos', delayInMs);

export default api;
