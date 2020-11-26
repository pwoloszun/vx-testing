<template>
  <div>
    <h3>Property binding</h3>
    <simple-form-initialized />
    <hr class="my-4" />

    <h3>Event handling</h3>
    <my-counter />
    <styled-text />
    <my-toggle />
    <hr class="my-4" />

    <h3>Two-way binding</h3>
    <instant-styled-text />
    <quadratic-equation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SimpleFormInitialized from '../components/01-property-binding/SimpleFormInitialized.vue';
import MyCounter from '../components/02-event-handling/MyCounter.vue';
import StyledText from '../components/02-event-handling/StyledText.vue';
import MyToggle from '../components/02-event-handling/MyToggle.vue';
import InstantStyledText from '../components/03-two-way-binding/InstantStyledText.vue';
import QuadraticEquation from '../components/03-two-way-binding/QuadraticEquation.vue';

export default Vue.extend({
  name: 'PropsEvents',
  components: {
    SimpleFormInitialized,
    MyCounter,
    StyledText,
    MyToggle,
    InstantStyledText,
    QuadraticEquation,
  },
});
</script>

<style scoped>
</style>
