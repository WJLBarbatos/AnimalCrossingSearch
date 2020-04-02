import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FishSearch from '@/components/FishSearch'
import InsectSearch from '@/components/InsectSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/fish',
      name: 'FishSearch',
      component: FishSearch
    },
    {
      path: '/insect',
      name: 'InsectSearch',
      component: InsectSearch
    }
  ]
})