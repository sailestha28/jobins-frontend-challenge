<template>
  <header>
    <div class="py-5 flex justify-between items-center">
      <h1 class="text-[#23272E] font-bold">
        {{ title }}
      </h1>
      <div>
        <div class="relative">
          <NotificationIcon />
          <div class="absolute left-[14px] bottom-2">
            <span
              class="bg-[#EA5455] text-white text-[13px] font-semibold inline-block rounded-full h-[18px] w-[18px] text-center"
              >4</span
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NotificationIcon from "../icons/topbar/NotificationIcon.vue";

export default {
  name: "TopBar",
  mounted() {
    console.log("router", this.$route);
  },
  computed: {
    title() {
      let componentTitle = null;
      if (this.$route.path === "/") {
        componentTitle = "Dashboard";
      } else if (this.$route.path === "/order-management") {
        componentTitle = "Order Management";
      } else if (this.$route.path === "/brand") {
        componentTitle = "Brand";
      } else if (this.$route.path === "/product-create") {
        componentTitle = "Create Product";
      } else if (this.$route.path === "/product-list") {
        componentTitle = "Product Lists";
      }
      return componentTitle;
    },
  },
  components: { NotificationIcon },
};
</script>

<style></style>
