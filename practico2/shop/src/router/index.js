import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Products from '@/pages/Products.vue'
import Clients from '@/pages/Clients.vue'
import ProductDetail from '@/components/ProductDetails.vue'
const routes = [
  {
    path: '/products',       // URL
    name: 'Products',    // Name of route
    component: Products  // Component
  },
  {
    path: '/clients',       // URL
    name: 'Clients',    // Name of route
    component: Clients  // Component
  },
  {
    path: '/products/:id',       // URL
    name: 'Product Detail',    // Name of route
    component: ProductDetail  // Component
  }
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History
  routes
})

export default router
