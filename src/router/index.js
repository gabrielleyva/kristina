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
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/philanthropy',
      name: 'philanthropy',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/myStory',
      name: 'myStory',
      component: () => import('../views/MyStoryView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
