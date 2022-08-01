import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Post from '../views/Post.vue'
import NaoEncontrado from '../views/NaoEncontrado.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-adv',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '*',
    name: 'NaoEncontrado',
    component: NaoEncontrado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
})

export default router