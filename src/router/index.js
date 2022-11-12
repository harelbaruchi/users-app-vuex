import AboutViewVue from '@/views/AboutView.vue'
import EventDetails from '@/views/EventDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
