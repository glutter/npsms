import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import AppMain from '@/components/Pages/Main'
import PackageCost from '@/components/Pages/PackageCost'
import Delivery from '@/components/Pages/Delivery'
import Settings from '@/components/Pages/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index-page'
    },
    {
      path: '/index-page',
      component: IndexPage,
      children: [
        {
          path: '',
          name: 'index-page',
          component: AppMain
        },
        {
          path: 'package-cost',
          name: 'package-cost',
          component: PackageCost
        },
        {
          path: 'delivery',
          name: 'delivery',
          component: Delivery
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        }
      ]
    }
    // {
    //   path: '/find-package',
    //   name: 'find-package',
    //   component: FindPackage
    // }
  ]
})
