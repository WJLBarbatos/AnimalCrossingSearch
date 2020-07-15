import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// import FishSearch from '@/components/FishSearch'
// import InsectSearch from '@/components/InsectSearch'
// import SeaSearch from '@/components/SeaSearch'
// import EmoticonSearch from '@/components/EmoticonSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      // component: Index
      component: resolve => (require(["@/components/Index"], resolve))
    },
    {
      path: '/fish',
      name: 'FishSearch',
      //component: FishSearch
      component: resolve => (require(["@/components/FishSearch"], resolve))
    },
    {
      path: '/insect',
      name: 'InsectSearch',
      //component: InsectSearch
      component: resolve => (require(["@/components/InsectSearch"], resolve))
    },
    {
      path: '/sea',
      name: 'SeaSearch',
      //component: SeaSearch
      component: resolve => (require(["@/components/SeaSearch"], resolve))
    },
    {
      path: '/emoticon',
      name: 'EmoticonSearch',
      //component: EmoticonSearch
      component: resolve => (require(["@/components/EmoticonSearch"], resolve))
    }
  ]
})
