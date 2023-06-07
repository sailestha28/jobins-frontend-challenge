import DashboardView from '../views/dashboard/DashboardView.vue'
export const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/order-management',
    name: 'OrderView',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/orders/IndexView.vue')
  },
  {
    path: '/brand',
    name: 'BrandView',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/brands/IndexView.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/products/ListView.vue')
  },
  {
    path: '/product-create',
    name: 'ProductCreate',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/products/CreateView.vue')
  }
]
