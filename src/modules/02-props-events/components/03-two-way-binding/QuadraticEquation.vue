<template>
  <div class="equation">
    <h2>a * X^2 + b * X + c = 0</h2>
    <div>
      <label>a =</label>
      <input v-model.number="a" type="number" />
    </div>
    <div>
      <label>b =</label>
      <input v-model.number="b" type="number" />
    </div>
    <div>
      <label>c =</label>
      <input v-model.number="c" type="number" />
    </div>
    <div>
      <h2>Results</h2>
      <h4>delta = {{ delta }}</h4>
      <h4>x1 = {{ x1 }}</h4>
      <h4>x2 = {{ x2 }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'QuadraticEquation',
  data() {
    return {
      a: 2,
      b: 8,
      c: -10,
    };
  },
  computed: {
    delta(): number {
      const { a, b, c } = this;
      return b * b - 4 * a * c;
    },
    deltaSqrt(): number {
      return Math.sqrt(this.delta);
    },
    x1(): number {
      const { doubleA, b, deltaSqrt } = this;
      return (b - deltaSqrt) / doubleA;
    },
    x2(): number {
      const { doubleA, b, deltaSqrt } = this;
      return (-b - deltaSqrt) / doubleA;
    },
    doubleA(): number {
      return 2 * this.a;
    },
  },
});
</script>

<style scoped>
.equation {
  border: 3px solid #000;
  background-color: #ddd;
  padding: 12px;
}

.equation input {
  border: 1px solid #000;
  background-color: #fff;
  padding: 2px 4px;
}
</style>
