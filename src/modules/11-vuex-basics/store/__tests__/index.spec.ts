import Vuex from 'vuex';
import storeDefinition from '../index';

function createStore() {
  return new Vuex.Store(storeDefinition);
}

describe('SyncCounter: mutations', () => {
  describe('incrementSyncCounter action', function () {
    it('should increment SyncCounter by 1', function () {
      // given
      const store = createStore();
      const originalValue = store.getters.syncCounterValue;
      // when
      store.dispatch('incrementSyncCounter');
      // then
      const expectedValue = originalValue + 1;
      expect(store.getters.syncCounterValue).toEqual(expectedValue);
    });
  });

  describe('decrementSyncCounter action', function () {
    it('should decrement SyncCounter by 1', function () {
      // given
      const store = createStore();
      const originalValue = store.getters.syncCounterValue;
      // when
      store.dispatch('decrementSyncCounter');
      // then
      const expectedValue = originalValue - 1;
      expect(store.getters.syncCounterValue).toEqual(expectedValue);
    });
  });

  describe('incrementAsyncCounter action', function () {
    it('should increment AsyncCounter by 10', async function () {
      // given
      const store = createStore();
      const originalValue = store.getters.asyncCounterValue;
      const value = 10;
      // when
      await store.dispatch('incrementAsyncCounter', value);
      // then
      const expectedValue = originalValue + value;
      expect(store.getters.asyncCounterValue).toEqual(expectedValue);
    });
  });

  describe('decrementAsyncCounter action', function () {
    it('should decrement AsyncCounter by 10', async function () {
      // given
      const store = createStore();
      const originalValue = store.getters.asyncCounterValue;
      const value = 3;
      // when
      await store.dispatch('decrementAsyncCounter', value);
      // then
      const expectedValue = originalValue - value;
      expect(store.getters.asyncCounterValue).toEqual(expectedValue);
    });

  });

});
