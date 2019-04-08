// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'normalize.css/normalize.css'
import '@/globalCss/init.scss'
import '@/globalCss/px-rem.scss'
import  'amfe-flexible/index'
import {fetch} from '@/utils/index'
import api from '@/utils/api'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios = fetch
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
