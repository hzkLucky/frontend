// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import { registerAxios } from '@/components/axios/index'
import cache from '@/components/cache/index'
import chartsPlugin from '@/components/charts/commonChart'
import store from  './components/vuex/module'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)
Vue.use(ElementUI);
Vue.prototype.$cache = cache
Vue.config.productionTip = false
Vue.use(chartsPlugin)
registerAxios(Vue)
Vue.prototype.$store = store
const i18n = new VueI18n({
  locale: 'zh-cn',
  messages: {
      'zh-cn': require('../src/components/i18n/zh-cn.js'),
      'en': require('../src/components/i18n/en.js')
  }
})
// router.beforeEach(function(to, from, next){
//   console.log(to)
//   next()
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
