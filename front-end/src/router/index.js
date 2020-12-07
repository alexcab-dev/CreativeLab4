import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewApplication from '../views/NewApplication.vue'
import OldApplication from '../views/OldApplication.vue'
import EditApplication from '../views/EditApplication.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newapplication',
    name: 'NewApplication',
    component: NewApplication
  },
  {
    path: '/oldapplication',
    name: 'OldApplication',
    component: OldApplication
  },
  {
    path: '/editapplication',
    name: 'EditApplication',
    component: EditApplication
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
