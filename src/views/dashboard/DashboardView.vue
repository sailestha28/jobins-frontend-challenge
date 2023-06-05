<script setup>
import SaleAndCostsWidget from "../../components/dashboard/widgets/SaleAndCostsWidget.vue";
import ProfitWidget from "../../components/dashboard/widgets/profitWidget.vue";
import CountryChart from "../../components/dashboard/widgets/CountryChart.vue";
import UserInfo from "../../components/dashboard/widgets/UserInfo.vue";
import TabStatus from "../../components/dashboard/TabStatus.vue";
</script>
<script>
export default {
  data() {
    return {
      tabValue: "all",
    };
  },
  methods: {
    setTabValue(data) {
      this.tabValue = data;
    },
  },
};
</script>

<template>
  <section>
    <div class="flex gap-3">
      <div class="w-[40%] xxxl:w-[35%]">
        <SaleAndCostsWidget />
      </div>
      <div class="w-[25%]">
        <ProfitWidget />
      </div>
      <div class="w-[35%] xxxl:w-[40%]">
        <CountryChart />
      </div>
    </div>
    <div class="mt-4">
      <UserInfo @childValueTab="setTabValue" />
    </div>
    <TabStatus :tabVal="tabValue" />
  </section>
</template>
