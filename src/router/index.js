import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import database from '@/components/database/index'
import personalSettings from '@/components/personalSettings/index'
import changePlanning from '@/components/changePlanning/index'
import consumptionStatistics from '@/components/consumptionStatistics/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: database
    },
    {
      path: '/database',
      name: 'database',
      component: database
    },
    {
      path: '/personalSettings',
      name: 'personalSettings',
      component: personalSettings
    },
    {
      path: '/changePlanning',
      name: 'changePlanning',
      component: changePlanning
    },
    {
      path: '/consumptionStatistics',
      name: 'consumptionStatistics',
      component: consumptionStatistics
    }
  ]
})
