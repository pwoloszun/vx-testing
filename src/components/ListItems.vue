<template>
  <v-list two-line subheader>
    <div v-if="isFetching" class="text-xs-center">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <div v-else>
      <v-list-item v-for="item in items" :key="item[keyProp]" avatar ripple>
        <template v-if="isDisabled(item)">
          <v-list-item-action>
            <v-checkbox disabled />
          </v-list-item-action>
          <v-list-item-content class="font-italic">
            <v-list-item-title>{{ item[titleProp] }}</v-list-item-title>
            <v-list-item-subtitle>{{
              item[subTitleProp]
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-action>
            <v-checkbox @click="checkItem(item)" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item[titleProp] }}</v-list-item-title>
            <v-list-item-subtitle>{{
              item[subTitleProp]
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click="deleteItem(item)" icon ripple>
              <v-icon color="error">delete_forever</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </div>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ListItems',
  props: {
    isFetching: Boolean,
    items: Array,
    disabledItems: {
      type: Array,
      default: function () {
        return [];
      },
    },
    titleProp: String,
    subTitleProp: String,
    keyProp: String,
  },
  methods: {
    checkItem(item) {
      this.$emit('check-click', item);
    },
    deleteItem(item) {
      this.$emit('delete-click', item);
    },
    isDisabled(item) {
      return this.disabledItems.indexOf(item) > -1;
    },
  },
});
</script>

<style scoped>
</style>
