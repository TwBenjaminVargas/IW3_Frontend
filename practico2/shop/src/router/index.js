import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Products from '@/pages/Products.vue'
import Clients from '@/pages/Clients.vue'
import ProductDetail from '@/pages/ProductDetail.vue'
import Login from '@/pages/Login.vue'

import { sessionService } from '@/services/sessionService'

const routes = [
  {
    path: '/products',       // URL
    name: 'Products',    // Name of route
    component: Products, // Component
    meta: { requiresAuth: true } // requiresAuth
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
    meta: { requiresAuth: true }
  },
  {
    path: '/products/:id',
    name: 'Product Detail',
    component: ProductDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History
  routes
})

// Guard global: checks session
router.beforeEach((to, from, next) => {
  const session = sessionService.isSessionOpen()

  if (to.meta.requiresAuth && !session)
  {
    next({ name: 'Login' })
  } 
  else if (to.name === 'Login' && session)
  {
    next({ name: 'Home' })
  }
  else 
  {
    next()
  }
})

export default router
