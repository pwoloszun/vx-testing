<template>
  <v-flex class="xs12 sm12 md12 lg12 xl12">
    <h1>Cities</h1>
    <h3>
      Selected City: <span v-if="selectedCity">{{ selectedCity.name }}</span>
    </h3>
    <leaflet-map
      :geoObjects="cities"
      :selected="selectedCity"
      @markerClick="onPlaceClick($event)"
    />
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';

import LeafletMap from '@/components/LeafletMap';
import api, { City } from '@/api/cities-api';

interface Data {
  cities: City[];
  selectedCity: City | null;
}

export default Vue.extend({
  components: { LeafletMap },
  name: 'CitiesModule',
  data(): Data {
    return {
      cities: [] as City[],
      selectedCity: null,
    };
  },
  methods: {
    onPlaceClick(city: City) {
      console.log('city', city);
      if (this.selectedCity === city) {
        this.selectedCity = null;
      } else {
        this.selectedCity = city;
      }
    },
  },
  mounted() {
    api.getAll().then((cities) => {
      this.cities = cities;
    });
  },
});
</script>

<style scoped>
</style>
