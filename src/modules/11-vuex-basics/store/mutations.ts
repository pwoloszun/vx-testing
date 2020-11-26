import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_DECREMENT, ASYNC_INCREMENT } from './mutation-types';

const incrementSync = (state) => {
  state.syncCounter.value += 1;
};

const decrementSync = (state) => {
  state.syncCounter.value -= 1;
};

const incrementAsync = (state, value) => {
  state.asyncCounter.value += value;
};

const decrementAsync = (state, value) => {
  state.asyncCounter.value -= value;
};


export default {
  [SYNC_INCREMENT]: incrementSync,
  [SYNC_DECREMENT]: decrementSync,
  [ASYNC_INCREMENT]: incrementAsync,
  [ASYNC_DECREMENT]: decrementAsync,
};
