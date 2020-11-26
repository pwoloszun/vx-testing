import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  error: {
    app: null,
  },

  info: {
    app: null,
  }
};

export default new Vuex.Store({
  strict: debug,
  state,
  mutations,
  actions,
  getters,
});
