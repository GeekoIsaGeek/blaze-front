import { createRouter, createWebHistory } from 'vue-router'
import BrowseView from '@/views/BrowseView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'browse',
      component: BrowseView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegistrationView
    }
  ]
})

export default router
