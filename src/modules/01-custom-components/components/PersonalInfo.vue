<template>
  <div class="personal-data">
    <h1>Name: {{ name }}</h1>
    <h3>Age: {{ age }}</h3>
    <p>email: {{ email }}</p>

    <img :src="url" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PersonalInfo',
  data() {
    const batman = {
      name: 'Batman',
      age: 43,
      email: 'bruce.w@heroes.com',
      url:
        'https://i.pinimg.com/originals/1c/be/c4/1cbec4f304cf609d2346d3c5f2ff8b22.jpg',
    };

    return batman;
  },
});
</script>

<style scoped>
.personal-data {
  margin: 20px auto;
  width: 900px;
  padding: 22px;
  background-color: #ccc;
  color: #000;
  border: 2px inset #000;
}
</style>
