<template>
  <div>
    <hello-world />
    <hr class="my-4" />

    <personal-info />
    <hr class="my-4" />

    <my-clock />
    <hr class="my-4" />

    <simple-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import HelloWorld from '../components/HelloWorld.vue';
import PersonalInfo from '../components/PersonalInfo.vue';
import MyClock from '../components/MyClock.vue';
import SimpleList from '../components/SimpleList.vue';

export default Vue.extend({
  name: 'CustomComponents',
  components: {
    HelloWorld,
    PersonalInfo,
    MyClock,
    SimpleList,
  },
});
</script>

<style scoped>
</style>
