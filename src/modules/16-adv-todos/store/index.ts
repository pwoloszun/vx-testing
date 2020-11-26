import { EntityAdapter, Update } from 'vue-entity-adapter';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { Todo } from './models/todos.models';

export type TodoUpdate = Update<Todo>;

export const todoEntitiesAdapter = new EntityAdapter<Todo>(() => 0);

const state = {
  // domain/entities state
  todos: todoEntitiesAdapter.getInitialState(),

  // feature/app logic state
  isFetchingMany: false,
  todosStatuses: {},
};

export const NAMESPACE = 'adv-todos';

export default {
  // namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
