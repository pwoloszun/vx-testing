<template>
  <v-flex xs12 sm6 lg6>
    <todos-list :items="todos" @deleteItem="deleteTodo($event)" />
    <hr class="my-4" />

    <todos-form @createItem="createTodo($event)" />
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';

import api, { Todo } from '@/api/todos-api';

import TodosList from '../components/TodosList.vue';
import TodosForm from '../components/TodosForm.vue';

interface Data {
  todos: Todo[];
}

export default Vue.extend({
  name: 'ShowTodos',
  components: {
    TodosForm,
    TodosList,
  },
  data(): Data {
    return {
      todos: [],
    };
  },

  methods: {
    deleteTodo(todo) {
      api
        .remove(todo)
        .then(() => {
          return api.getAll();
        })
        .then((todos) => {
          this.todos = todos;
        });
    },

    createTodo(todoData) {
      api.create(todoData).then((newTodo) => {
        this.todos.push(newTodo);
      });
    },
  },

  created() {
    api.getAll().then((todos) => {
      this.todos = todos;
    });
  },
});
</script>

<style scoped>
</style>
