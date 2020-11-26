import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  syncCounter: {
    value: 0,
  },
  asyncCounter: {
    value: -11,
  },
};

export const NAMESPACE = 'vuex-basics-module';

export default {
  // namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
