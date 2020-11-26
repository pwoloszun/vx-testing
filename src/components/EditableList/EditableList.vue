<template>
  <v-card class="list-cont">
    <v-card-title>Items List ({{ items.length }})</v-card-title>

    <v-list two-line>
      <editable-list-list-item
        v-for="(item, i) in items"
        :key="item.id"
        :item="item"
        :status="statuses[i]"
        @remove="handleRemove($event)"
        @edit="handleEdit($event)"
        @save-edit="handleSaveEdit($event)"
        @cancel-edit="handleCancelEdit($event)"
      />
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import EditableListListItem from './EditableListListItem.vue';
import { Item } from './models/item.models';

export default Vue.extend({
  name: 'EditableList',
  components: { EditableListListItem },
  props: {
    items: Array as PropType<Item[]>,
    statuses: Array as PropType<string[]>,
  },
  computed: {},
  methods: {
    handleRemove(item) {
      this.$emit('remove', item);
    },
    handleEdit(item) {
      this.$emit('edit', item);
    },
    handleSaveEdit(params) {
      this.$emit('save-edit', params);
    },
    handleCancelEdit(item) {
      this.$emit('cancel-edit', item);
    },
  },
});
</script>

<style scoped>
.list-cont {
  width: 800px;
}
</style>
