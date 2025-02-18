import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Service.vue'),
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/Price.vue'),
    },
    {
      path: '/driver',
      name: 'driver',
      component: () => import('../views/Driver.vue'),
    },
    {
      path: '/privace',
      name: 'privace',
      component: () => import('../views/Privace.vue'),
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('../views/Contract.vue'),
    },
  ],
})

export default router
