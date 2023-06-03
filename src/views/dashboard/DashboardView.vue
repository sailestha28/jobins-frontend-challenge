<script setup>
import SaleAndCostsWidget from "../../components/dashboard/widgets/SaleAndCostsWidget.vue";
import ProfitWidget from "../../components/dashboard/widgets/profitWidget.vue";
import CountryChart from "../../components/dashboard/widgets/CountryChart.vue";
</script>

<template>
  <section>
    <div class="flex gap-3 ">
      <div class="w-[40%] xxl:w-[35%]">
        <SaleAndCostsWidget />
      </div>
      <div class="w-[25%]">
        <ProfitWidget />
      </div>
      <div class="w-[35%] xxl:w-[40%]">
        <CountryChart />
      </div>
    </div>
  </section>
</template>
