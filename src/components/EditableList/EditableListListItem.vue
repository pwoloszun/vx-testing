<template>
  <div>
    <v-divider />

    <v-list-item v-if="!isEditing">
      <v-list-item-content>
        <v-row>
          <v-col :class="{ 'disabled-text': isDisabled }">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.description }}
            </v-list-item-subtitle>
          </v-col>
          <v-col v-if="isDisabled">
            <v-progress-circular indeterminate color="grey" />
            <small class="ml-2">{{ statusLabels[status] }}</small>
          </v-col>
        </v-row>
      </v-list-item-content>

      <v-list-item-action>
        <v-row align="center" justify="space-around">
          <v-btn @click="handleEdit()" :disabled="isDisabled" color="primary">
            Edit
          </v-btn>
          <v-btn @click="handleRemove()" :disabled="isDisabled" color="error">
            Remove
          </v-btn>
        </v-row>
      </v-list-item-action>
    </v-list-item>

    <editable-list-item-form
      v-else
      :item="item"
      @save-edit="handleSaveEdit($event)"
      @cancel-edit="handleCancelEdit()"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import EditableListItemForm from './EditableListItemForm.vue';
import { Item, ITEM_STATUS } from './models/item.models';

export default Vue.extend({
  name: 'EditableListListItem',
  components: { EditableListItemForm },
  props: {
    item: Object as PropType<Item>,
    status: String,
  },
  data() {
    return {
      disabledStatuses: [
        ITEM_STATUS.saving,
        ITEM_STATUS.removing,
        ITEM_STATUS.editing,
      ],
    };
  },
  computed: {
    isEditing(): boolean {
      return this.status === ITEM_STATUS.editing;
    },

    isDisabled(): boolean {
      return this.disabledStatuses.includes(this.status);
    },

    statusLabels(): any {
      return {
        [ITEM_STATUS.saving]: 'Saving...',
        [ITEM_STATUS.removing]: 'Removing...',
      };
    },
  },
  methods: {
    handleRemove() {
      this.$emit('remove', this.item);
    },
    handleEdit() {
      this.$emit('edit', this.item);
    },
    handleSaveEdit(params) {
      this.$emit('save-edit', params);
    },
    handleCancelEdit() {
      this.$emit('cancel-edit', this.item);
    },
  },
});
</script>

<style scoped>
.item-title {
  margin: 0 auto;
}

.disabled-text {
  color: #777;
  font-style: italic;
}

.v-raised-button {
  margin: 0 0.25em;
}
</style>
