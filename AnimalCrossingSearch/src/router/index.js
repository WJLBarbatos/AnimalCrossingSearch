import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FishSearch from '@/components/FishSearch'
import InsectSearch from '@/components/InsectSearch'
import EmoticonSearch from '@/components/EmoticonSearch'

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
    },
    {
      path: '/emoticon',
      name: 'EmoticonSearch',
      component: EmoticonSearch
    }
  ]
})
