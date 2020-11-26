<template>
  <div class="simple-form">
    <h3 class="headline mb-0">SimpleFormInitialized</h3>
    <div>Name: <input :value="name" type="text" /></div>
    <div>Age: <input :value="age" type="number" /></div>
    <div>
      <input :checked="hasAgreed" type="checkbox" id="agreement" />
      <label for="agreement">Do you agree?</label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SimpleFormInitialized',
  data() {
    return {
      name: 'Batman',
      age: 44,
      hasAgreed: false,
    };
  },
});
</script>

<style scoped>
.simple-form {
  border: 1px solid #000;
  padding: 18px;
}

.simple-form input {
  border: 1px solid #ccc;
  padding: 3px;
}
</style>
