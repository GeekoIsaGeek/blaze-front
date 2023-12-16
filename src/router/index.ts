import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { useUserStore } from '@/stores/UserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'feed' }
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
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
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to, from) => {
  const userStore = useUserStore()

  if (!userStore.isAuthenticated) {
    await userStore.retrieveUserData()
  }

  if (to.path === '/profile' || to.path === '/feed') {
    if (userStore.isAuthenticated) {
      return true
    } else {
      return { name: 'login' }
    }
  }
})

export default router
