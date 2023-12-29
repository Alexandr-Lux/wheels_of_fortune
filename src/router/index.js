import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main'
import Auth from '../views/auth'
import Scores from '../views/scores'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/main/',
    name: 'main',
    component: Main
  },
  {
    path: '/scores/',
    name: 'scores',
    component: Scores
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
