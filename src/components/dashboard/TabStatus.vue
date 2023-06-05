<template>
  <div class="">
    <v-window v-model="tab">
      <v-window-item value="all">
        <TableView :column="headers" :filterValue="tab" />
      </v-window-item>
      <v-window-item value="completed" :filterValue="tab">
        <TableView :column="headers" :filterValue="tab" />
      </v-window-item>
      <v-window-item value="cancelled">
        <TableView :column="headers" :filterValue="tab" />
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
import TableView from "./TableView.vue";
export default {
  components: {
    TableView,
  },
  props: {
    tabVal: String,
  },

  watch: {
    tabVal: function (newVal, oldVal) {
      console.log("object", newVal);
      this.tab = newVal
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
        },
        { title: "Customer", align: "start", key: "customer" },
        { title: "Date", align: "start", key: "date" },
        { title: "Total", align: "start", key: "total" },
        { title: "Method", align: "start", key: "method" },
        { title: "Status", align: "start", key: "state" },
        { title: "Action", align: "start", key: "action" },
      ],
    };
  },
  methods: {},
};
</script>
