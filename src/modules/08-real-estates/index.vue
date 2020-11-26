<template>
  <v-flex class="xs12 sm12 md12 lg12 xl12">
    <h1>Real Estates</h1>

    <v-layout row>
      <v-flex class="xs8 sm8 lg8 xl8">
        <leaflet-map
          :geoObjects="realEstates"
          :selected="selected"
          @markerClick="onRealEstateClick($event)"
        />
      </v-flex>

      <v-flex class="xs4 sm4 lg4 xl4">
        <real-estate-details :item="selected" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex class="xs12 sm12 lg12 xl12">
        <my-data-table
          :items="realEstates"
          :selectedItem="selected"
          :metaData="metadata"
          @itemClick="onRealEstateClick($event)"
        />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';

import MyDataTable, { DataTableMetaData } from '@/components/MyDataTable';
import LeafletMap from '@/components/LeafletMap';

import realEstatesFacade from './services/real-estates-facade.service';
import RealEstateDetails from './components/RealEstateDetails.vue';
import { RealEstate } from '@/api/real-estates-api';

const metadata: DataTableMetaData = [
  { value: 'street', text: 'Ulica' },
  { value: 'lat', text: 'Wysokosc geo.' },
  { value: 'lng', text: 'Dlugosc geo.' },
];

export default Vue.extend({
  name: 'RealEstatesModule',
  components: {
    RealEstateDetails,
    MyDataTable,
    LeafletMap,
  },
  data() {
    return {
      service: realEstatesFacade,
      metadata,
    };
  },
  computed: {
    realEstates(): RealEstate[] {
      return this.service.realEstates;
    },
    selected(): RealEstate | null {
      return this.service.selectedRealEstate;
    },
  },
  methods: {
    onRealEstateClick(estate) {
      this.service.toggleRealEstate(estate);
    },
  },
  mounted() {
    this.service.fetch();
  },
});
</script>

<style scoped>
</style>
