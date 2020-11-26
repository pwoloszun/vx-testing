import { map } from 'lodash';

import { todoEntitiesAdapter } from './index';
import { TodoStatus } from './models/todos.models';
import { ITEM_STATUS } from '../../../components/EditableList/models/item.models';

export default {
  isFetchingMany: (state) => {
    return state.isFetchingMany;
  },
  getAllTodos: (state) => {
    return todoEntitiesAdapter.getAll(state.todos);
  },
  getOneTodo: (state) => {
    return (id) => todoEntitiesAdapter.getOne(id, state.todos);
  },
  getTodoIds: (state) => {
    return todoEntitiesAdapter.getIds(state.todos);
  },
  getStatusesMap: (state) => {
    return state.todosStatuses;
  },

  getAllTodosStatuses: (state, getters) => {
    return map(getters.getTodoIds, (id: number) => {
      const status = getters.getStatusesMap[id];
      if (status === TodoStatus.Removing) {
        return ITEM_STATUS.removing;
      } else if (status === TodoStatus.Editing) {
        return ITEM_STATUS.editing;
      } else if (status === TodoStatus.Saving) {
        return ITEM_STATUS.saving;
      } else { // persisted or null
        return ITEM_STATUS.persisted;
      }
    });
  },
};
