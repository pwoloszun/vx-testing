const syncCounterValue = (state) => {
  return state.syncCounter.value;
};

const asyncCounterValue = (state) => {
  return state.asyncCounter.value;
};

export default {
  syncCounterValue,
  asyncCounterValue,
};
