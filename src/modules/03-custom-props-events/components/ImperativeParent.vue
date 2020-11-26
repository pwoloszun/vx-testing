<template>
  <div class="parent">
    <h3>Imperative Parent</h3>
    <div>
      <input v-model="parentMsg" />
      <p>Parent: {{ parentMsg }}</p>
    </div>
    <div>
      <my-parent-child
        :text="parentMsg"
        @messageSent="logMessage($event)"
        ref="myChild"
      />
    </div>
    <div ref="myCont" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import MyParentChild from './MyParentChild.vue';

type MyParentChildType = typeof MyParentChild;

export default Vue.extend({
  name: 'ImperativeParent',
  components: {
    MyParentChild,
  },
  data() {
    return {
      parentMsg: '',
    };
  },
  methods: {
    logMessage(message) {
      console.log('received from Child', message);
    },
  },
  // lifecycle methods
  mounted() {
    // const Constructor = Vue.extend(MyParentChild);
    const imperativeInstance = new MyParentChild();
    imperativeInstance.$mount(this.$refs.myCont as Element);
    imperativeInstance.$on('messageSent', (data) => {
      console.log('parent received from imperative Instance', data);
    });
    this['imperativeChild'] = imperativeInstance as any;
    // console.log('el', this.$el.appendChild());

    // imperative access
    // console.log('myChild', this.$refs.myChild);
    // this.$refs.myChild.text = 'a qq!';
    (this.$refs.myChild as any).$on('messageSent', (data) => {
      console.log('parent received from declarative instance', data);
    });
  },
  beforeUpdate() {
    this['imperativeChild'].text = this.parentMsg;
  },
  beforeDestroy() {
    this['imperativeChild'].$destroy();
  },
});
</script>

<style scoped>
.parent {
  padding: 18px;
  background-color: burlywood;
}

input {
  border: 1px solid #000;
  padding: 3px;
}
</style>
