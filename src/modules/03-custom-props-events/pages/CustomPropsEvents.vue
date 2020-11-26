<template>
  <div>
    <h3>ParentChildModule</h3>
    <my-parent />
    <hr class="my-4" />

    <car-configurator />
    <hr class="my-4" />

    <!-- <imperative-parent /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import MyParent from '../components/MyParent.vue';
import CarConfigurator from '../components/CarConfigurator.vue';
// import ImperativeParent from '../components/ImperativeParent.vue';

export default Vue.extend({
  name: 'CustomPropsEvents',
  components: {
    MyParent,
    CarConfigurator,
    // ImperativeParent,
  },
});
</script>

<style scoped>
</style>
