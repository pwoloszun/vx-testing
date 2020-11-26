<template>
  <div class="counter">
    <h3 class="headline mb-0">Async Counter</h3>
    <div>{{ asyncCounterValue }}</div>
    <div>
      <v-btn @click="incrementAsyncCounter(10)" color="primary"
        >Increment</v-btn
      >
      <v-btn @click="decrementAsyncCounter(5)" color="error">Decrement</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'AsyncCounter',
  methods: {
    ...mapActions(['incrementAsyncCounter', 'decrementAsyncCounter']),
  },
  computed: {
    ...mapGetters(['asyncCounterValue']),
  },
});
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  background-color: chartreuse;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
