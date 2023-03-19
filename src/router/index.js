import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/DashboardView.vue')
    },
    {
      path: '/option',
      name: 'option',
      component: () => import('../views/OptionBoard/OptionBoardView.vue')
    },
    {
      path: '/webgl',
      name: 'webgl',
      component: () => import('../views/WebGL/WebGLView.vue')
    }
  ]
})

export default router
