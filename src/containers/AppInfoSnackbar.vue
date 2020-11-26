<template>
  <v-snackbar v-model="isVisible" top color="black" class="snackbar">
    <div>
      {{ appInfo }}
    </div>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'AppInfoSnackbar',
  computed: {
    ...mapGetters(['hasAppInfo', 'appInfo']),
    isVisible(): boolean {
      return this.hasAppInfo;
    },
  },
});
</script>

<style scoped>
.snackbar {
  z-index: 10000;
}
</style>
