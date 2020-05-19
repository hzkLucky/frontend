import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/HelloWorld'
import noPermission from '@/components/ui/noPermission'
import { leftMenu } from '../components/ui/menu'
import { getToken } from '../components/util/permission'
// 白名单可以不登陆直接跳转到页面
let whiteList = ['login', 'consumptionStatistics']
const routerMap = {
  database: resolve => require(['@/components/database/index'], resolve),
  consumptionBill: resolve => require(['@/components/personalSettings/index'], resolve),
  incomeStatement: resolve => require(['@/components/changePlanning/index'], resolve),
  consumptionStatistics: resolve => require(['@/components/consumptionStatistics/index'], resolve)
}
Vue.use(Router)
let menusList = [

]
let getMenus = () => {
  let menus = JSON.parse( localStorage.getItem('menus') )

if( menus.type === 'admin'){
   menusList = leftMenu.map( val => {
     return {
      path: `/${val.name}`,
      name: `${val.name}`,
      component: routerMap[val.name]
     }
   }) 
}
else {
  console.log( menus.menus.split(','))
  menusList = menus.menus.split(',').map( val => {
    return {
     path: `/${val}`,
     name: `${val}`,
     component: routerMap[val]
    }
  }) 
}
}


 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    { path: '/404', name: '404', component: noPermission},
    { path: '*', redirect: '/404', name: '404' }
  ]
})
router.beforeEach( async ( to, from, next) => {
  if(getToken()){
      if(to.name === 'login'){
        next()
      }
      else {
          
         

          if(menusList && !menusList.length){
            console.log('zhelia')
            let menus = JSON.parse( localStorage.getItem('menus'))
            getMenus()
           await router.addRoutes([...menusList])
           console.log(menusList)
          next({
            path: '/database'
          })
          }
          else {
            next()
          }
        
        
      }
  
    
  }
  else {
    if( whiteList.includes(to.name)){
      next()
    }
    else {
      next({
        path: '/'
      })
    }
  }
  console.log( to )
})
export default router


