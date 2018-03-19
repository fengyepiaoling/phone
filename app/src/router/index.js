import Vue from 'vue'
import Router from 'vue-router'
// page
import HOME from '@/page/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HOME
    }
  ]
})
