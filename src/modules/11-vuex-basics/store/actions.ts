import api from '../api';

import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from './mutation-types';

const incrementSyncCounter = (context) => {
  context.commit(SYNC_INCREMENT);
};

const decrementSyncCounter = (context) => {
  context.commit(SYNC_DECREMENT);
};

const incrementAsyncCounter = (context, value) => {
  return api.ajaxCall(value).then((receivedValue) => {
    context.commit(ASYNC_INCREMENT, receivedValue);
  });
};

const decrementAsyncCounter = (context, value) => {
  return api.ajaxCall(value).then((receivedValue) => {
    context.commit(ASYNC_DECREMENT, receivedValue);
  });
};

export default {
  incrementSyncCounter,
  decrementSyncCounter,
  incrementAsyncCounter,
  decrementAsyncCounter,
};
