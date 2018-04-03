import Vue from 'vue'
import Router from 'vue-router'
// page
import home from '@/page/home/index.vue'
import albumtemplate from '@/page/albumtemplate/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/albumtemplate',
      component: albumtemplate
    }
  ]
})
