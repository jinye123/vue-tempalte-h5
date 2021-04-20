import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '@/assets/css/index.scss'
import '@/assets/font/iconfont.css'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
//  权限
import '@/permission'
//  IE 兼容
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// 移动端适配
import 'lib-flexible/flexible.js'
// filters
import '@/filters'
// VConsole
import VConsole from 'vconsole'

if (process.env.VUE_APP_ENV !== 'production') {
  new VConsole()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
