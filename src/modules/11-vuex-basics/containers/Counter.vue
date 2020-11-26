<template>
  <div class="counter">
    <h3 class="headline mb-0">Counter</h3>
    <div>{{ myCounter.value }}</div>
    <div>
      <v-btn @click="increment()" color="primary">Increment</v-btn>
      <v-btn @click="decrement()" color="error">Decrement</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Counter',
  data() {
    return {
      myCounter: {
        value: 0,
      },
    };
  },
  methods: {
    increment() {
      this.myCounter.value += 1;
    },
    decrement() {
      this.myCounter.value -= 1;
    },
  },
  computed: {
    value(): number {
      return this.myCounter.value;
    },
  },
});
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
