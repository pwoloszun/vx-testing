import {
  SET_APP_INFO,
  SET_APP_ERROR,
} from './mutation-types';

const setAppError = (state, errorMsg) => {
  state.error.app = errorMsg;
};

const setAppInfo = (state, msg) => {
  state.info.app = msg;
};

export default {
  [SET_APP_ERROR]: setAppError,
  [SET_APP_INFO]: setAppInfo,
};
