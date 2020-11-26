<template>
  <div class="page-cont">
    <v-progress-linear
      v-if="isFetchingMany"
      indeterminate
      color="blue darken-2"
    />

    <editable-list
      v-else
      :items="getAllTodos"
      :statuses="getAllTodosStatuses"
      @remove="removeTodo($event)"
      @edit="startTodoEdition($event)"
      @save-edit="saveEditTodoHandler($event)"
      @cancel-edit="endTodoEdition($event)"
    />

    <v-spacer class="my-4" />

    <todos-form @create-item="createHandler($event)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import EditableList from '@/components/EditableList';
import TodosForm from '@/modules/04-todos/components/TodosForm.vue';

import store, { NAMESPACE } from '../store';
import { TodoParams } from '../store/models/todos.models';

export default Vue.extend({
  name: 'AdvTodosPage',
  components: {
    EditableList,
    TodosForm,
  },

  computed: {
    ...mapGetters(['getAllTodos', 'isFetchingMany', 'getAllTodosStatuses']),
    // todos(): Todo[] {
    //   return [
    //     { id: 123, title: 'buy milk', description: 'quickly' },
    //     { id: 22, title: 'walk thedog' },
    //     { id: 333, title: 'smth', description: 'a qq!' },
    //     { id: 4, title: 'imba!' },
    //   ];
    // },
    todoStatuses(): string[] {
      return ['PERSISTED', 'SAVING', 'EDITING', 'REMOVING'];
    },
  },

  methods: {
    ...mapActions([
      'loadTodos',
      'createTodo',
      'removeTodo',
      'startTodoEdition',
      'endTodoEdition',
      'optimisticUpdate',

      'showAppInfo',
    ]),

    createHandler(params: TodoParams) {
      this.showAppInfo({
        message: `Creating Todo titled "${params.title}"`,
      });
      this.createTodo(params);
    },

    saveEditTodoHandler(params) {
      const { item, data } = params;
      this.optimisticUpdate({ id: item.id, changes: data });
    },
  },

  created() {
    this.$store.registerModule(NAMESPACE, store);
    this.loadTodos();
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE);
  },
});
</script>

<style scoped>
.page-cont {
  width: 800px;
}
</style>
