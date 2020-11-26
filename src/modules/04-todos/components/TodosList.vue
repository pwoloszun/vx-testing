<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>TODOs</v-toolbar-title>
    </v-toolbar>
    <v-card v-if="!hasAnyTodo" class="d-flex justify-center my-4">
      <v-progress-circular indeterminate color="primary" />
    </v-card>

    <v-list two-line subheader>
      <v-list-item v-for="todo in items" :key="todo.id">
        <v-list-item-content>
          <v-list-item-title>
            {{ todo.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="text--primary">
            {{ todo.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="deleteTodo(todo)" color="error">Remove</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface Item {
  id: number;
  title: string;
  description?: string;
}

export default Vue.extend({
  name: 'TodosList',
  props: {
    items: Array as PropType<Item[]>,
    default: [],
  },
  data() {
    return {};
  },
  methods: {
    check(todo) {
      console.log('TODO check(todo)', todo);
    },
    deleteTodo(todo) {
      this.$emit('deleteItem', todo);
    },
  },
  computed: {
    hasAnyTodo(): boolean {
      return this.items.length > 0;
    },
  },
});
</script>

<style scoped>
</style>
