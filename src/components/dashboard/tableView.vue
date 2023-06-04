<template>
  <div class="mt-4">
    <div class="mb-5 flex gap-x-4">
      <div class="w-3/5 flex gap-x-4">
        <div class="min-w-[150px]">
          <v-select
            v-model="filter.status"
            :items="statusData"
            label=""
            placeholder="Status: All"
            density="compact"
            class="normal-v-select"
          >
            <template v-slot:item="{ item, props }">
              <v-list-item v-bind="props">
                <template v-slot:title>
                  {{ item.raw }}
                </template>
              </v-list-item>
            </template>
          </v-select>
        </div>
        <div class="w-[200px]">
          <v-text-field
            v-model="filter.search"
            density="compact"
            variant="solo"
            class="v-text-filed"
            append-inner-icon="mdi-magnify"
            placeholder="Search"
            single-line
            hide-details
            @click:append-inner="() => onSearch"
          ></v-text-field>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <div class="w-[250px]">
          <VueDatePicker
            class="vue_date_picker"
            placeholder="Filter by date range"
            v-model="filter.dateRange"
            format="dd MMMM, yyyy - dd MMMM, yyyy"
            range
          />
        </div>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="tableData"
      class="text-[#23272E] text-[15px] rounded-10 rounded-bl-[0px] rounded-br-[0px] overflow-hidden bg-transparent"
      item-key="name"
      :loading="loading"
      loading-text="Loading... Please wait"
      items-per-page="5"
    >
      <template v-slot:column.id="{ column }">
        <span class="text-[#8B909A] text-base">
          {{ column.title.toUpperCase() }}
        </span>
      </template>
      <template v-slot:column.customer="{ column }">
        <span class="text-[#8B909A] text-sm"> {{ column.title.toUpperCase() }}</span>
      </template>
      <template v-slot:column.date="{ column }">
        <span class="text-[#8B909A] text-sm">
          {{ column.title.toUpperCase() }}
        </span>
      </template>
      <template v-slot:column.total="{ column }">
        <span class="text-[#8B909A] text-sm">
          {{ column.title.toUpperCase() }}
        </span>
      </template>
      <template v-slot:column.method="{ column }">
        <span class="text-[#8B909A] text-sm">
          {{ column.title.toUpperCase() }}
        </span>
      </template>

      <template v-slot:column.action="{ column }">
        <span class="text-[#8B909A] text-sm">
          {{ column.title.toUpperCase() }}
        </span>
      </template>
      <template v-slot:item.state="{ item }">
        <span
          :class="[
            item.selectable.state.toLowerCase() === 'pending' ? 'text-[#FFC600]' : null,
            item.selectable.state.toLowerCase() === 'cancelled' ? 'text-[#EA5455]' : null,
            item.selectable.state.toLowerCase() === 'completed' ? 'text-[#28C76F]' : null,
          ]"
        >
          {{ item.selectable.state }}
        </span>
      </template>
      <template v-slot:item.action="{ item }">
        <div class="flex gap-x-1">
          <button class="text-[#0F60FF]" @click.prevent="() => onView(item.columns)">View</button>
          <button class="text-[#0F60FF]" @click.prevent="() => onDetail(item.columns)">
            Detail
          </button>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { VDataTable } from "vuetify/labs/VDataTable";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  components: {
    VDataTable,
    VueDatePicker,
  },
  data() {
    return {
      filter: { status: null, search: null, dateRange: null },
      itemsPerPage: 5,
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
      tableData: [
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5090",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Cancelled",
          method: "CC",
        },
        {
          id: "#5091",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Completed",
          method: "CC",
        },
        {
          id: "#5092",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5093",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Cancelled",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Completed",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
        {
          id: "#5089",
          customer: "Joseph Wheeler",
          date: "6 April, 2023",
          total: "$2,564",
          state: "Pending",
          method: "CC",
        },
      ],
    };
  },
  methods: {
    onSearch() {
      console.log("click search");
    },
    onDetail(data){
      console.log(data);
    },
    onView(data){
      console.log(data);
    }
  },
};
</script>
