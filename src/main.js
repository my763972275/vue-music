import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './common/stylus/index.styl'
import fastclick from 'fastclick'
import Axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

//将axios挂载到原型上
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
fastclick.attach(document.body)  //点击没有300毫秒的延时
Vue.use(VueLazyLoad,{
  loading:require('../src/common/image/default.png')
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
