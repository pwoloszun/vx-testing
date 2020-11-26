<template>
  <div class="details">
    <h3>Real Estate Details:</h3>
    <div v-if="item">
      <p>Ulica: {{ item.street }}</p>

      <p>Szer. Geo.: {{ item.lat }}</p>

      <p>Dl. Geo.: {{ item.lng }}</p>

      <p>Cena: {{ item.price }}</p>

      <p>Typ: {{ item.type }}</p>

      <p>Rok bud.: {{ item.builtAt }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RealEstateDetails',
  props: ['item'],
});
</script>

<style scoped>
.details {
  height: 460px;
  margin: 10px;
  padding: 16px;
  background-color: chocolate;
}
</style>
