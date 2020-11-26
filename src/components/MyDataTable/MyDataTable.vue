<template>
  <div v-if="isValid" class="list">
    <table class="data-table">
      <thead>
        <tr class="list-header">
          <th v-for="(meta, i) of metaData" :key="i">
            <a>{{ meta.text }}</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) of items"
          :key="i"
          @click="rowClick(item)"
          :class="{ highlighted: selectedItem === item }"
          class="list-item"
        >
          <td v-for="(meta, j) of metaData" :key="j">
            <pre>
          {{ item[meta.value] }}
        </pre
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { DataTableMetaData } from './data-table-meta-data';

export default Vue.extend({
  name: 'MyDataTable',
  props: {
    items: Array as PropType<any[]>,
    metaData: Array as PropType<DataTableMetaData>,
    selectedItem: Object,
  },
  computed: {
    hasItems(): boolean {
      return this.items && this.items.length > 0;
    },
    hasMetaData(): boolean {
      return this.metaData && this.metaData.length > 0;
    },
    isValid(): boolean {
      return this.hasMetaData && this.hasItems;
    },
  },
  methods: {
    rowClick(item) {
      this.$emit('itemClick', item);
    },
  },
});
</script>

<style scoped>
.list {
  margin: 0 10px 10px;
  padding: 10px 0;
}

.list table {
  width: 100%;
  border: 1px solid #777;
}

.list .list-item:nth-child(even) {
  background-color: #ececec;
}

.list .list-item:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

.list .list-item:hover:nth-child(odd) {
  background-color: #b7b7b7;
}

.list .list-item.highlighted,
.list .list-item.highlighted:hover:nth-child(odd) {
  background-color: paleturquoise;
}

.list .list-header a {
  color: #3388ff;
  cursor: pointer;
}

.list .list-header .selected {
  font-weight: bold;
}
</style>
