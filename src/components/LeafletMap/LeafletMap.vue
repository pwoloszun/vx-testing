<template>
  <div ref="mapCont" class="map-container">LEAF</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { MapViewModel } from './viewmodels/map.vm';
import { MarkerViewModel } from './viewmodels/marker.vm';

interface Methods {
  vmMap: MapViewModel;
  vmMarkers: MarkerViewModel[];
}

export default Vue.extend<{}, {}, Methods, {}>({
  name: 'LeafletMap',
  props: ['geoObjects', 'selected'],
  mounted() {
    this.vmMap = new MapViewModel(this.$refs.mapCont as HTMLElement);
  },
  watch: {
    geoObjects(list) {
      if (!list || list.length === 0) {
        return;
      }
      this.vmMarkers = list.map((marker) => {
        const gMarker = this.vmMap.createMarker(marker);
        gMarker.on('click', (obj) => {
          this.$emit('markerClick', obj);
        });
        return gMarker;
      });
    },
    selected(geoObj) {
      this.vmMarkers.forEach((gMarker) => {
        const isHighlighted = gMarker.isMatching(geoObj);
        gMarker.toggleHighlight(isHighlighted);
      });
    },
  },
});
</script>

<style scoped>
.map-container {
  height: 460px;
  background-color: aqua;
  border: 1px solid #777;
  margin: 10px;
  z-index: 1;
}
</style>
