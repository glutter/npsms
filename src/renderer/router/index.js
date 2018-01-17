import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import FindPackage from '@/components/FindPackage'
import AppMain from '@/components/layout/Main'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index-page',
    //   component: IndexPage
    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/index-page'
    },
    {
      path: '/index-page',
      name: 'index-page',
      component: IndexPage,
      children: [
        {
          path: '',
          component: AppMain
        },
        {
          path: 'find-package',
          component: FindPackage
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
