<template>
  <div class="parent">
    <h3>Parent</h3>
    <div>
      <input v-model="parentMsg" />
      <p>Parent: {{ parentMsg }}</p>
    </div>
    <div>
      <my-parent-child :text="parentMsg" @messageSent="logMessage($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import MyParentChild from './MyParentChild.vue';

export default Vue.extend({
  name: 'MyParent',
  components: {
    MyParentChild,
  },
  data() {
    return {
      parentMsg: '',
    };
  },
  methods: {
    logMessage(message) {
      console.log('received from Child', message);
    },
  },
});
</script>

<style scoped>
.parent {
  padding: 18px;
  background-color: aquamarine;
}

input {
  border: 1px solid #000;
  padding: 3px;
}
</style>
