<template>
  <div>
    <div class="table__tr" v-for="(rows, indexRows) in data" :key="indexRows">
      <TableTd
        v-for="(col, indexCol) in rows.children"
        :key="indexCol"
        :col="col"
        :index-col="indexCol"
        :index-row="indexRows"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TableTd from "@/components/Table/TableTd/TableTd.vue";
import { PropType } from "vue";
import { Table } from "@/store/modules/Table/type";
export default {
  name: "Table",
  props: {
    data: Object as PropType<Table>,
  },
  components: {
    TableTd,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "Table";
</style>
