<template>
  <div class="option-picker">
    <h3>{{ headerText }}</h3>
    <v-btn
      v-for="(option, i) of options"
      :key="i"
      @click="choose(option)"
      color="success"
    >
      {{ option }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const defaultPrompt = 'Choose from:';

export default Vue.extend({
  name: 'CarConfiguratorOptionPicker',
  props: ['options', 'label'],
  methods: {
    choose(option) {
      this.$emit('option-select', option);
    },
  },
  computed: {
    headerText() {
      return this.label || defaultPrompt;
    },
  },
});
</script>

<style scoped>
.option-picker {
  padding: 16px;
  border: 1px solid #000;
  margin: 8px auto;
  background-color: aliceblue;
}
</style>
