<template>
  <div class="filters-module">
    <h1>FiltersModule</h1>

    <div>Text: <input v-model="myText" /> Reversed: {{ myText | reverse }}</div>
    <hr />
    <div>
      <p>a = <input v-model.number="a" /></p>
      <p>b = <input v-model.number="b" /></p>
      <p>a * b = {{ a | multiply(b) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import multiply from '../filters/multiply';
import reverse from '../filters/reverse';

export default Vue.extend({
  name: 'FilterExamples',
  filters: {
    reverse,
    multiply,
  },
  data() {
    return {
      myText: '',
      a: null,
      b: null,
    };
  },
});
</script>

<style scoped>
.filters-module input {
  border: 1px solid #ccc;
  padding: 3px;
}
</style>
