import { produce } from 'immer';

import * as types from './mutation-types';
import { todoEntitiesAdapter } from './index';

import { Todo, TodoStatus } from './models/todos.models';

export default {
  [types.LoadManyTodosRequest]: (state) => {
    state.isFetchingMany = true;
  },
  [types.LoadManyTodosSuccess]: (state, todos: Todo[]) => {
    state.isFetchingMany = false;
    state.todos = todoEntitiesAdapter.addMany(todos, state.todos);
  },

  [types.CreateTodoRequest]: (state) => {
    console.log('TODO CreateTodoRequest', state); // TODO
  },
  [types.CreateTodoSuccess]: (state, createdTodo: Todo) => {
    state.todos = todoEntitiesAdapter.addOne(createdTodo, state.todos);
  },

  [types.DeleteSingleTodoRequest]: (state, todo: Todo) => {
    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      draftState[todo.id] = TodoStatus.Removing;
    });
  },
  [types.DeleteSingleTodoSuccess]: (state, id: number) => {
    state.todos = todoEntitiesAdapter.removeOne(id, state.todos);
    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      delete draftState[id];
    });
  },

  [types.StartEditTodo]: (state, id: number) => {
    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      draftState[id] = TodoStatus.Editing;
    });
  },
  [types.EndEditTodo]: (state, id: number) => {
    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      draftState[id] = TodoStatus.Persisted;
    });
  },

  [types.OptimisticUpdateSingleTodoRequest]: (state, params) => {
    const { todo, update } = params;
    state.todos = todoEntitiesAdapter.updateOne(update, state.todos);

    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      draftState[todo.id] = TodoStatus.Saving;
    });
  },
  [types.OptimisticUpdateSingleTodoSuccess]: (state, todo: Todo) => {
    state.todosStatuses = produce(state.todosStatuses, (draftState) => {
      draftState[todo.id] = TodoStatus.Persisted;
    });
  },
};
