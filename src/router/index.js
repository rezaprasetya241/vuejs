import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/index.vue'
import AboutView from '../views/about.vue'
import FormView from '../views/form.vue'
import LoginView from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // {
  // path: "/about",
  // name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
