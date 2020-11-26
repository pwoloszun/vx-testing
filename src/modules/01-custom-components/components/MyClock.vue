<template>
  <div class="my-clock">
    <h4>My Clock</h4>
    <h2>Current time: {{ formattedDate }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyClock',
  data() {
    return {
      currentDt: new Date(),
    };
  },
  computed: {
    formattedDate(): string {
      return this.currentDt.toISOString().substr(0, 19).replace('T', ' ');
    },
  },
  mounted() {
    setInterval(() => {
      this.currentDt = new Date();
    }, 1000);
  },
});
</script>

<style scoped>
.my-clock {
  border: 1px solid #000;
  padding: 18px;
  margin: 18px auto;
}
</style>
