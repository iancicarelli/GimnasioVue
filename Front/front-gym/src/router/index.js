import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import AccountView from '@/views/AccountView.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView
    
  },{
    path: '/account',
    name: 'account',
    component: AccountView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
