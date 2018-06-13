import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import * as types from './store/types'
import wechat from '@/common/js/wechat'
import {
  Style,
} from 'cube-ui'

import {
  AlertPlugin,
  ToastPlugin,
  ConfirmPlugin,
  WechatPlugin,
  DevicePlugin,
  AjaxPlugin,
  XDialog,
  XInput,
  XButton
} from 'vux'

Vue.use(AlertPlugin)
Vue.use(WechatPlugin)
Vue.use(DevicePlugin)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin, {position: 'top'})
Vue.use(ConfirmPlugin)

Vue.component('x-dialog', XDialog)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)



import ShareDialog from 'components/share-dialog/share-dialog'

Vue.component('share-dialog', ShareDialog, {showShare: false})

import 'common/styles/index.scss'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.prototype.wxShare = wechat.setWxShare
// import {wechatShare} from './common/js/wx_config'
// import {wechatSettings} from './common/js/wx_settings'


// 微信分享
// window.wechatShare = wechatShare
// window.wechatSettings = wechatSettings

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
  render: h => h(App),
  mounted() {
    this.$store.commit(types.UPDATE_DEVICE, {isAndroid: Vue.device.isAndroid})
  }
})

// unsync()
// console.log(Vue.wechat)
