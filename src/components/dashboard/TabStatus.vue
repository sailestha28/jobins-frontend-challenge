<template>
  <div class="relative z-10">
    <v-window v-model="tab" :touch="false" class="overflow-visible">
      <v-window-item value="all">
        <div class="mt-3">
          <TableView :column="headers" :filterValue="tab" />
        </div>
      </v-window-item>
      <v-window-item value="completed" :filterValue="tab">
        <div class="mt-3">
          <TableView :column="headers" :filterValue="tab" />
        </div>
      </v-window-item>
      <v-window-item value="cancelled">
        <div class="mt-3">
          <TableView :column="headers" :filterValue="tab" />
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
import TableView from "./TableView.vue";
export default {
  name: "TabStatus",
  components: {
    TableView,
  },
  props: {
    tabVal: String,
  },

  watch: {
    tabVal: function (newVal, oldVal) {
      console.log("object", newVal);
      this.tab = newVal;
    },
  },
  data() {
    return {
      tab: "all",
      loading: false,
      statusData: ["All", "Active", "Pending", "Cancelled", "Completed"],
      headers: [
        {
          title: "ID",
          align: "start",
          sortable: false,
          key: "id",
          width: "85px",
        },
        { title: "Customer", align: "start", key: "customer" },
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
