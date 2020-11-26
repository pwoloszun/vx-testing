<template>
  <div class="styled-text">
    <h3 class="headline mb-0">StyledText</h3>
    <p :class="textCssClasses">{{ exampleText }}</p>
    <div>
      <div>
        <input
          :checked="isBold"
          @change="toggleCssClass('isBold')"
          type="checkbox"
          id="bold"
        />
        <label for="bold">Bold</label>
      </div>
      <div>
        <input
          :checked="isItalic"
          @change="toggleCssClass('isItalic')"
          type="checkbox"
          id="italic"
        />
        <label for="italic">Italic</label>
      </div>
      <div>
        <input
          :checked="isUnderline"
          @change="toggleCssClass('isUnderline')"
          type="checkbox"
          id="underline"
        />
        <label for="underline">Underline</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface CssClassesStruct {
  'make-bold': boolean;
  'add-underline': boolean;
  'my-italic': boolean;
}

export default Vue.extend({
  name: 'StyledText',
  data() {
    return {
      exampleText: 'Lorem ipsum dolorem...',
      isBold: false,
      isItalic: false,
      isUnderline: false,
    };
  },
  methods: {
    toggleCssClass(cssPropName) {
      this[cssPropName] = !this[cssPropName];
    },
  },
  computed: {
    textCssClasses(): CssClassesStruct {
      return {
        'make-bold': this.isBold,
        'add-underline': this.isUnderline,
        'my-italic': this.isItalic,
      };
    },
  },
});
</script>

<style scoped>
.styled-text {
  border: 1px solid #000;
  padding: 18px;
}

.styled-text .make-bold {
  font-weight: bold;
}

.styled-text .add-underline {
  text-decoration: underline;
}

.styled-text .my-italic {
  font-style: italic;
}
</style>
