<template>
  <v-list dense nav>
    <v-list-item v-for="(item, i) in items" :key="i" @click="onItemClick(item)">
      <template v-if="item === null">
        <v-divider />
      </template>
      <template v-else>
        <v-list-item-icon>
          <v-icon>
            {{ item.icon || 'mdi-label' }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

import router from '@/router';

const FUNDAMENTALS_ITEMS = [
  { text: 'Custom Components', url: '/', icon: 'mdi-home' },
  { text: 'Props, Events', url: '/props-events' },
  { text: 'Custom Props & Events', url: '/custom-props-events' },
  { text: 'Todos', url: '/todos' },
  { text: 'Filters', url: '/filters' },
  { text: 'Heroes List', url: '/heroes' },
  { text: 'Cities Map', url: '/cities' },
  { text: 'Real Estates', url: '/real-estates' },
  null,
];

const VUEX_ITEMS = [
  { text: 'Vuex Basics', url: '/vuex-basics' },
  { text: 'Adv. Todos', url: '/adv-todos' },
];

export default Vue.extend({
  name: 'MainMenuNavigation',
  data() {
    return {
      items: FUNDAMENTALS_ITEMS.concat(VUEX_ITEMS),
    };
  },
  methods: {
    onItemClick(item) {
      if (this.$route.path === item.url) {
        return;
      }
      router.push(item.url);
    },
  },
});
</script>

<style scoped>
</style>
