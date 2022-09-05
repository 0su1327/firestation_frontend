import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/UserRegisterView'

const routes = [
  {
    path: '/user/register',
    name: 'UserRegisterView',
    component: User
  },
  {
    path: '/admin/register',
    name: 'AdminRegisterView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Admin" */ '../views/AdminRegisterView.vue')
  },
  {
    path: '/admin/login',
    name: 'AdminLoginView',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/AdminLoginView.vue')
  },
  {
    path: '/admin/list',
    name: 'memberListView',
    component: () => import(/* webpackChunkName: "Test" */ '../views/memberList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
