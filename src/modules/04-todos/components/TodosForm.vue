<template>
  <v-card>
    <v-divider />
    <v-card-title>
      <h3 class="headline mb-0">Create TODO</h3>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Title" v-model="title" required />
        <v-text-field label="Description" v-model="description" />
        <v-btn @click="submit()" :disabled="!isValid" color="primary">
          Submit
        </v-btn>
        <v-btn @click="clear()">Clear</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodosForm',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  computed: {
    isValid(): boolean {
      return Boolean(this.title) && this.title.trim().length > 1;
    },
  },
  methods: {
    submit() {
      const { title, description } = this;
      this.$emit('create-item', { title, description });
      this.clear();
    },
    clear() {
      this.title = '';
      this.description = '';
    },
  },
});
</script>

<style scoped>
</style>
