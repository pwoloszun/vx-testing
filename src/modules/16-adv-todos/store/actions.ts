import api from '@/api/todos-api';

import * as types from './mutation-types';
import { TodoParams, Todo } from './models/todos.models';
import { TodoUpdate } from './index';

export default {
  loadTodos: async (context) => {
    context.commit(types.LoadManyTodosRequest);
    try {
      const todos = await api.getAll();
      context.commit(types.LoadManyTodosSuccess, todos);
    } catch (err) {
      // TODO error handling
    }
  },

  createTodo: async (context, params: TodoParams) => {
    context.commit(types.CreateTodoRequest);
    try {
      const createdTodo = await api.create(params);
      context.commit(types.CreateTodoSuccess, createdTodo);
    } catch (err) {
      // TODO error handling
    }
  },

  removeTodo: async (context, todo: Todo) => {
    context.commit(types.DeleteSingleTodoRequest, todo);
    try {
      const removedId = await api.remove(todo);
      context.commit(types.DeleteSingleTodoSuccess, removedId);
    } catch (err) {
      // TODO error handling
    }
  },

  startTodoEdition: (context, todo: Todo) => {
    context.commit(types.StartEditTodo, todo.id);
  },
  endTodoEdition: (context, todo: Todo) => {
    context.commit(types.EndEditTodo, todo.id);
  },

  optimisticUpdate: async (context, todoUpdate: TodoUpdate) => {
    const { id, changes } = todoUpdate;
    const todo = context.getters.getOneTodo(id);
    context.commit(types.OptimisticUpdateSingleTodoRequest, {
      todo,
      update: todoUpdate,
    });
    try {
      const updatedTodo = await api.update(id as number, changes);
      context.commit(types.OptimisticUpdateSingleTodoSuccess, updatedTodo);
    } catch (err) {
      // TODO error handling
    }
  },
};
