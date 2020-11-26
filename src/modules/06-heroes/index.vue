<template>
  <div>
    <h1>Heroes</h1>
    <my-data-table
      :items="heroes"
      :metaData="tableMetaData"
      :selectedItem="selectedHero"
      @itemClick="selectHero($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import api, { Hero } from '@/api/heroes-api';
import MyDataTable, { DataTableMetaData } from '@/components/MyDataTable';

const META_DATA: DataTableMetaData = [
  { value: 'universe', text: 'Komiksowe Uniwersum' },
  { value: 'name', text: 'Imie' },
  { value: 'secretIdentity', text: 'Tozsamosc' },
];

export default Vue.extend({
  components: { MyDataTable },
  name: 'HeroesModule',
  data() {
    return {
      heroes: [] as Hero[],
      selectedHero: null,
      tableMetaData: META_DATA,
    };
  },
  methods: {
    selectHero(hero) {
      console.log('hero', hero.name);
      this.selectedHero = hero;
    },
  },
  mounted() {
    api
      .getAll()
      .then((heroes) => {
        this.heroes = heroes;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped>
</style>
