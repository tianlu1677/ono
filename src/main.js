import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'



import {
  Style,
  Toast,  
  Dialog,
} from 'cube-ui'

Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Alert)



import {
  Alert,
  XDialog
} from 'vux'

Vue.component('alert', Alert)
Vue.component('x-dialog', XDialog)

import ShareDialog from 'components/share-dialog/share-dialog'

Vue.component('share-dialog', ShareDialog, {showShare: false})

import 'common/styles/index.scss'


// 修复IOS滑动效果
// import EdgeCheck from 'vue-edge-check'

// Vue.use(EdgeCheck, {edge_duration: 1000})

Vue.config.productionTip = false

fastclick.attach(document.body)

// Vue.use(VueLazyload, {
  // loading: require('common/images/loading.gif')
// })

// 微信分享
// window.wechatShare = wechatShare

// 绑定路由与vuex
const unsync = sync(store, router)
// Vue.use(Navigation, {router, store, moduleName: 'navigation', keyName: 'XUE'})

// 无限滚动
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// unsync()
