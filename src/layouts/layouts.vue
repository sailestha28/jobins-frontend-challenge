<script setup>
import TopBar from "../components/topBar/topBar.vue";
import SideBar from "../components/sideBar/sideBar.vue";
</script>
<template>
  <div class="bg-[#F5F5F5] h-[100vh]">
    <SideBar />
    <main
      role="main"
      class="px-7 "
      :class="[
        'overflow-y-auto h-[100vh] transition-all duration-500',
        !this.$store.state.isMenuOpen
          ? 'w-[calc(100%-260px)] ml-[260px]'
          : 'ml-[110px] w-[calc(100%-110px)]',
      ]"
    >
      <TopBar />
      <router-view></router-view>
    </main>
  </div>
</template>
