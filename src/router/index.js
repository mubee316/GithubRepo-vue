import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        tittle: 'Home',
        description: 'This is the home page'
      }
    },
    {
      path: '/repodetails/:name',
      name: 'repo-details',
      component: () => import('../views/RepoDetails.vue')
      
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        tittle: 'NotFound',
        description: 'This is the 404 page'
      }
    },
    {
      path: '/errorboundary',
      name: 'error-boundary',
      component: () => import('../views/ErrorBoundary.vue')
      
    }
  ]
})

export default router
