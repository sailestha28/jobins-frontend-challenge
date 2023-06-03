<script setup>
import BarToggle from "../icons/sidebarIcons/bar-toggle.vue";
import DashboardIcon from "../icons/sidebarIcons/dashboard-icon.vue";
import LeftIcon from "../icons/sidebarIcons/left-icon.vue";
import OrderIcon from "../icons/sidebarIcons/order-icon.vue";
import BrandIcon from "../icons/sidebarIcons/brand-icon.vue";
import ProductAddIcon from "../icons/sidebarIcons/product-add-icon.vue";
import ProductBoxIcon from "../icons/sidebarIcons/product-box-icon.vue";
</script>

<script>
import { mapState, mapMutations } from "vuex";
import "../../assets/styles/scss/sidebar.scss";

export default {
  data() {
    return {
      menu: [
        {
          link: null,
          title: "MAIN MENU",
        },
        {
          link: "/",
          title: "Dashboard",
          icon: "icon_dashboard",
        },
        {
          link: "/order-management",
          title: "Order Management",
          icon: "order",
        },
        {
          link: "/brand",
          title: "Brand",
          icon: "brand",
        },
        {
          link: null,
          title: "PRODUCTS",
        },
        {
          link: "/product-create",
          title: "Add Products",
          icon: "product_add",
        },
        {
          link: "/product-list",
          title: "Product Lists",
          icon: "product_list",
        },
      ],
    };
  },
  mounted() {
    this.loadMenuState();
  },
  watch: {
    isMenuOpen: {
      handler() {
        this.saveMenuState();
      },
    },
  },
  computed: {
    ...mapState(["isMenuOpen"]),
  },
  methods: {
    ...mapMutations(["toggleMenu"]),
    saveMenuState() {
      localStorage.setItem("isMenuOpen", JSON.stringify(this.isMenuOpen));
    },
    loadMenuState() {
      const savedState = localStorage.getItem("isMenuOpen");
      if (savedState !== null) {
        this.$store.state.isMenuOpen = JSON.parse(savedState);
      }
    },
  },
  components: { DashboardIcon, OrderIcon, BrandIcon, ProductAddIcon, ProductBoxIcon },
};
</script>

<template>
  <nav
    :class="[
      isMenuOpen ? 'w-[110px]' : 'w-[260px]',
      ' fixed top-0 left-0 h-full z-10 bg-white transition-all duration-500',
    ]"
  >
    <div class="min-w-[110px] overflow-hidden">
      <div class="px-[18px] py-5">
        <div class="flex flex-wrap justify-between">
          <router-link to="/" class="flex w-12 min-h-[34px]">
            <img
              alt="logo"
              class="mr-[10px]"
              src="@/assets/images/logo.svg"
              width="28"
              height="24"
            />
            <transition name="fade">
              <span
                v-if="!isMenuOpen"
                :class="[
                  isMenuOpen ? 'text-0' : 'text-[22px] font-semibold text-[#23272E]',
                ]"
              >
                JoBins
              </span>
            </transition>
          </router-link>
          <div class="w-6">
            <button type="button" @click="toggleMenu" class="bg-white">
              <div class="flex items-center justify-center">
                <span class="relative left-1">
                  <span class="inline-block" :class="[isMenuOpen ? 'rotate-180' : '']">
                    <LeftIcon />
                  </span>
                </span>
                <span class="scale-105">
                  <BarToggle />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ul class="overflow-x-hidden overflow-y-auto h-[calc(100vh-74px)]">
        <li
          v-for="(item, index) in menu"
          :key="index"
          :class="[
            'px-[14px] text-[#8B909A]',
            item.link == null
              ? `text-[11px] py-4 uppercase  ${!isMenuOpen ? ' pl-8' : 'pl-4'}`
              : 'capitalize  mb-2 whitespace-nowrap',
          ]"
        >
          <span v-if="item.link == null">
            {{ item.title }}
          </span>
          <router-link
            v-else
            :to="item.link"
            :class="[
              'nav-item',
              ' items-center px-4 py-2 hover:text-[#23272E] hover:stroke-black',
              !isMenuOpen ? 'flex gap-x-2' : 'inline-flex',
            ]"
          >
            <span :class="'icon ' + item.icon">
              <template v-if="item.icon === 'icon_dashboard'">
                <DashboardIcon />
              </template>
              <template v-if="item.icon === 'order'">
                <OrderIcon />
              </template>
              <template v-if="item.icon === 'brand'">
                <BrandIcon />
              </template>
              <template v-if="item.icon === 'product_add'">
                <ProductAddIcon />
              </template>
              <template v-if="item.icon === 'product_list'">
                <ProductBoxIcon />
              </template>
            </span>
            <span class="link_text" v-if="!isMenuOpen"> {{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
