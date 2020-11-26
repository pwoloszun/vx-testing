<template>
  <div>
    <counter />
    <hr />
    <sync-counter />
    <hr />
    <async-counter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import store, { NAMESPACE } from '../store';

import Counter from '../containers/Counter.vue';
import SyncCounter from '../containers/SyncCounter.vue';
import AsyncCounter from '../containers/AsyncCounter.vue';

export default Vue.extend({
  name: 'VuexBasics',
  components: {
    AsyncCounter,
    SyncCounter,
    Counter,
  },
  created() {
    this.$store.registerModule(NAMESPACE, store);
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE);
  },
});
</script>

<style scoped>
</style>
