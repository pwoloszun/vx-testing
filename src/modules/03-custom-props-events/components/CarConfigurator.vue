<template>
  <div class="car-configurator">
    <h1>CarConfigurator</h1>
    <div class="chosen-config">
      <h3>Current config</h3>
      <p>Engine: {{ selectedEngine }}</p>
      <p>Color: {{ selectedColor }}</p>
      <p>Type of Drive: {{ selectedDriveWheel }}</p>
    </div>
    <div>
      <car-configurator-option-picker
        :label="'Choose engine type'"
        :options="engines"
        @option-select="selectEngine($event)"
      />
      <car-configurator-option-picker
        :label="'Select color'"
        :options="colors"
        @option-select="selectColor($event)"
      />
      <car-configurator-option-picker
        :label="'Your type of drive?'"
        :options="driveWheels"
        @option-select="selectDriveWheel($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import CarConfiguratorOptionPicker from './CarConfiguratorOptionPicker.vue';

export default Vue.extend({
  name: 'CarConfigurator',
  components: { CarConfiguratorOptionPicker },
  data() {
    return {
      selectedEngine: null,
      engines: ['Petrol', 'Diesel', 'Tesla'],
      selectedColor: null,
      colors: ['Black', 'White', 'Red', 'Yellow'],
      selectedDriveWheel: null,
      driveWheels: ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'],
    };
  },
  methods: {
    selectEngine(engine) {
      console.log('selectEngine(engine)', engine);
      this.selectedEngine = engine;
    },
    selectColor($event) {
      console.log('color', $event);
      this.selectedColor = $event;
    },
    selectDriveWheel($event) {
      this.selectedDriveWheel = $event;
    },
  },
});
</script>

<style scoped>
.car-configurator {
  border: 1px solid #000;
  padding: 8px;
  background-color: deepskyblue;
}

.chosen-config {
  padding: 16px;
}
</style>
