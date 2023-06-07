<template>
  <div class="">
    <v-window v-model="tab" touchless>
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
        { title: "Customer", align: "start", key: "customer", width: "200px" },
        { title: "Date", align: "start", key: "date", width: "135px" },
        { title: "Total", align: "start", key: "total", width: "115px" },
        { title: "Method", align: "start", key: "method", width: "100px" },
        { title: "Status", align: "start", key: "state", width: "140px" },
        { title: "Action", align: "start", key: "action" },
      ],
    };
  },
  methods: {},
};
</script>
