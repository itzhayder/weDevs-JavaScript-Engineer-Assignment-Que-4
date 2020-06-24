import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
