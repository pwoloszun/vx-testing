<template>
  <v-card>
    <v-divider />
    <v-card-title>
      <h3 class="headline mb-0">{{ header }}</h3>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field :label="requiredLabel" v-model="tmpRequired" required />
        <v-text-field :label="optionalLabel" v-model="tmpOptional" />
        <v-btn @click="submit" :disabled="!isValid">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SimpleForm',
  props: ['values', 'labels'],
  data() {
    return {
      tmpRequired: '',
      tmpOptional: '',
    };
  },
  computed: {
    isValid(): boolean {
      return Boolean(this.tmpRequired) && this.tmpRequired.length > 0;
    },
    header(): string {
      return this.labels.header;
    },
    requiredLabel(): string {
      return this.labels.required;
    },
    optionalLabel(): string {
      return this.labels.optional;
    },
  },
  methods: {
    submit() {
      const { tmpRequired, tmpOptional } = this;
      this.$emit('submit-click', {
        required: tmpRequired,
        optional: tmpOptional,
      });
    },
    clear() {
      this.$emit('clear-click');
    },
  },
  watch: {
    values({ required, optional }) {
      this.tmpRequired = required;
      this.tmpOptional = optional;
    },
  },
});
</script>

<style scoped>
</style>
