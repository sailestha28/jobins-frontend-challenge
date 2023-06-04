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
    component: () => import('../views/orders/indexView.vue')
  },
  {
    path: '/brand',
    name: 'BrandView',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/brands/indexView.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/products/createView.vue')
  },
  {
    path: '/product-create',
    name: 'ProductCreate',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/products/createView.vue')
  }
]
