<template>
  <v-list two-line subheader>
    <div v-if="isFetching" class="text-xs-center">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <div v-else>
      <v-list-item
        v-for="(item, index) in items"
        :key="item[keyProp]"
        avatar
      >
        <v-list-item-action>
          <v-badge right>
            <span slot="badge">{{ counters[index] }}</span>
          </v-badge>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item[titleProp] }}</v-list-item-title>
          <router-link :to="urls[index]">link</router-link>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="deleteItem(item)" icon ripple>
            <v-icon color="error">delete_forever</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LinkableList',
  props: ['isFetching', 'items', 'urls', 'counters', 'titleProp', 'keyProp'],
  methods: {
    deleteItem(item) {
      this.$emit('delete-click', item);
    },
  },
});
</script>

<style scoped>
</style>
