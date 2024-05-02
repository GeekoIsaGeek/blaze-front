import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { useUserStore } from '@/stores/UserStore'
import ChatListView from '@/views/ChatListView.vue'
import MatchedUserProfileView from '@/views/MatchedUserProfileView.vue'
import PrivateChatView from '@/views/PrivateChatView.vue'

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
      path: '/chats',
      name: 'chats',
      component: ChatListView
    },
    {
      path: '/profiles/:id',
      name: 'matchedUserProfile',
      component: MatchedUserProfileView
    },
    {
      path: '/chats/:id',
      name: 'chat',
      component: PrivateChatView
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

  if (to.path.includes('profile') || to.path === '/feed' || to.path.includes('chat')) {
    if (userStore.isAuthenticated) {
      return true
    } else {
      return { name: 'login' }
    }
  }

  if (to.path === '/login' || to.path === '/register') {
    if (userStore.isAuthenticated) return { name: 'feed' }
  }
})

export default router
