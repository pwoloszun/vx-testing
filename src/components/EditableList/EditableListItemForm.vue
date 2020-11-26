<template>
  <v-list-item>
    <v-list-item-content>
      <v-row align="center" justify="space-around">
        <v-col>
          <v-text-field label="Title" v-model="title" />
        </v-col>
        <v-col>
          <v-text-field label="Description" v-model="description" />
        </v-col>
      </v-row>
    </v-list-item-content>

    <v-list-item-action>
      <v-row align="center" justify="space-around">
        <v-btn @click="handleSave()" color="success"> Save </v-btn>
        <v-btn @click="handleCancel()" color="grey"> Cancel </v-btn>
      </v-row>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Item } from './models/item.models';

export default Vue.extend({
  name: 'EditableListItemForm',
  props: {
    item: Object as PropType<Item>,
  },

  data() {
    return {
      title: this.item.title,
      description: this.item.description,
    };
  },
  methods: {
    handleSave() {
      const { item, title, description } = this;
      console.log('save', {
        item,
        data: { title, description },
      });

      this.$emit('save-edit', {
        item,
        data: { title, description },
      });
    },
    handleCancel() {
      this.$emit('cancel-edit', this.item);
    },
  },
});
</script>

<style scoped>
</style>
