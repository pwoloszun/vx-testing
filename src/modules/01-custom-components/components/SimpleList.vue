<template>
  <div class="simple-list">
    <h3>Simple list</h3>
    <ul>
      <li v-for="person of people" :key="person.id" @click="logPerson(person)">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SimpleList',
  data() {
    return {
      people: [
        { name: 'Bob', id: 1 },
        { name: 'Ed', id: 2 },
        { name: 'Batman', id: 3 },
      ],
    };
  },
  methods: {
    logPerson(person) {
      console.log('person', person.name);
    },
  },
});
</script>

<style scoped>
</style>
