<template>
  <div class="counter">
    <h3 class="headline mb-0">Counter</h3>
    <div>{{ value }}</div>
    <div>
      <v-btn @click="increment()" color="primary">Increment</v-btn>
      <v-btn @click="decrement()" color="error">Decrement</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyCounter',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      this.value += 1;
    },
    decrement() {
      this.value -= 1;
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
