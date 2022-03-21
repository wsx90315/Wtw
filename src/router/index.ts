import { createRouter, createWebHistory } from 'vue-router'
// import { routeItems } from './types'
const home = () => import('@/pages/home.vue')

const routes: Array<any> = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})