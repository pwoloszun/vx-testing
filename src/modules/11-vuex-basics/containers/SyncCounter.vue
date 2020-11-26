<template>
  <div class="counter">
    <h3 class="headline mb-0">Sync Counter</h3>
    <div>{{ syncCounterValue }}</div>
    <div>
      <v-btn @click="incrementSyncCounter()" color="primary">Increment</v-btn>
      <v-btn @click="decrementSyncCounter()" color="error">Decrement</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'SyncCounter',
  methods: {
    ...mapActions(['incrementSyncCounter', 'decrementSyncCounter']),
  },
  computed: {
    ...mapGetters(['syncCounterValue']),
  },
});
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  background-color: cornflowerblue;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
