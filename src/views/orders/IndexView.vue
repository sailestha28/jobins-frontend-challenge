<template>
  <div class="mt-1">
    <TableView :column="headers" />
  </div>
</template>

<script>
import TableView from "../../components/dashboard/TableView.vue";
import { Data } from "@/data/data.js";

export default {
  name: "OrderView",
  components: { TableView },
  data() {
    return {
      onData: Data,
      headers: [
        {
          title: "ID",
          align: "start",
          sortable: false,
          key: "id",
          width: "85px",
        },
        { title: "Customer", align: "start", key: "customer", },
        { title: "Date", align: "start", key: "date", width: "135px" },
        { title: "Total", align: "start", key: "total", width: "115px" },
        { title: "Method", align: "start", key: "method", width: "100px" },
        { title: "Status", align: "start", key: "state", width: "140px" },
        { title: "Action", align: "start", key: "action", width: "140px" },
      ],
    };
  },
};
</script>

<style></style>
