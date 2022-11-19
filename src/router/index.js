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
      path: '/myStory',
      name: 'My Story',
      component: () => import('../views/MyStoryView.vue')
    },
    {
      path: '/gallery',
      name: 'The Gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/press',
      name: 'Prress',
      component: () => import('../views/PressView.vue')
    },
    {
      path: '/philanthropy',
      name: 'Philanthropy',
      component: () => import('../views/PhilanthropyView.vue')
    },
    {
      path: '/contact',
      name: 'ontact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
