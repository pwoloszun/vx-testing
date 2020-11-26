<template>
  <div class="lorem-cont">
    <h3>Text</h3>
    <v-btn
      @click="toggleClickHandler()"
      color="primary"
      :class="toggleButtonCss"
    >
      {{ label }}
    </v-btn>
    <p v-if="isVisible">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus nisi
      eu sapien finibus elementum. Integer porta mi orci, congue malesuada velit
      varius eu. Fusce quis ante fermentum, tempus nisi nec, luctus neque.
      Maecenas in laoreet ante, aliquet rutrum justo. Phasellus placerat felis
      erat, et dapibus libero mollis eget. Nunc nec dictum lacus. Fusce congue
      nisi sit amet tristique vestibulum. Aenean congue diam eu lectus laoreet
      molestie. Morbi leo odio, gravida quis hendrerit non, volutpat eget quam.
      Nulla sagittis lacus sit amet diam lacinia sodales. In fermentum elementum
      interdum. Donec sit amet venenatis augue. Aliquam suscipit sagittis mauris
      sed vestibulum. Donec facilisis vestibulum venenatis. Proin venenatis
      libero vel feugiat ultrices.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyToggle',
  data() {
    return {
      isVisible: true,
    };
  },
  computed: {
    toggleButtonCss(): any {
      return { 'mat-warn': !this.isVisible };
    },
    label(): string {
      return this.isVisible ? 'Toggle Hide' : 'Toggle Show';
    },
  },
  methods: {
    toggleClickHandler() {
      this.isVisible = !this.isVisible;
    },
  },
});
</script>

<style scoped>
.lorem-cont {
  background-color: #3388ff;
  border: 2px solid #000;
  padding: 12px;
  width: 600px;
}
</style>
