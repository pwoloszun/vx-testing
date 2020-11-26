<template>
  <v-app>
    <v-navigation-drawer fixed v-model="drawer" app>
      <main-menu-navigation />
    </v-navigation-drawer>

    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <app-info-snackbar />
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <h5 class="white--text text-center caption">&copy; Piotr Woloszun</h5>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import MainMenuNavigation from './containers/MainMenuNavigation.vue';
import AppInfoSnackbar from './containers/AppInfoSnackbar.vue';

export default Vue.extend({
  name: 'App',
  components: { AppInfoSnackbar, MainMenuNavigation },
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
});
</script>

<style>
</style>
