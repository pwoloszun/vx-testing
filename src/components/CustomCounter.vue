<template>
  <div class="counter">
    <h3 class="headline mb-0">CustomCounter</h3>
    <div>{{ value }}</div>
    <div>
      <v-btn @click="incrementHandler()" color="primary">Increment</v-btn>
      <v-btn @click="decrementHandler()" color="error">Decrement</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CustomCounter',
  props: {
    initialValue: { type: Number, default: 0 },
  },
  data() {
    return {
      value: this.initialValue,
    };
  },
  methods: {
    incrementHandler() {
      this.$emit('increment');
    },
    decrementHandler() {
      this.$emit('decrement');
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
