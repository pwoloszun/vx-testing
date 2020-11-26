import {
  SET_APP_INFO,
} from './mutation-types';

const showAppInfo = (context, { message, timeout = 3000 }) => {
  context.commit(SET_APP_INFO, message);
  setTimeout(function () {
    context.commit(SET_APP_INFO, null);
  }, timeout);
};

export default {
  showAppInfo,
};
