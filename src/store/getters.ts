const appInfo = (state) => {
  return state.info.app;
};

const hasAppInfo = (state, getters) => {
  return getters.appInfo !== null;
};

const appError = (state) => {
  return state.error.app;
};

const hasAppError = (state, getters) => {
  return getters.appError !== null;
};

export default {
  appInfo,
  hasAppInfo,
  appError,
  hasAppError,
};
