import Vue from 'vue'
import {getWechatApiConfig} from "@/api/account_api";

const jsApiList = [
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'onMenuShareQQ',
  'onMenuShareWeibo',
  'onMenuShareQZone'
]
export default {
  // 获取JSSDK
  getJSSDK(url) {
    getWechatApiConfig(url).then(res => {
      const wxconfig = {
        debug: false,
        appId: 'wxadd1f08bb1406b3e',
        timestamp: res.data.timestamp,
        nonceStr: res.data.noncestr,
        signature: res.data.signature,
        jsApiList: jsApiList
      }
      Vue.wechat.config(wxconfig)
    })
  },

  setWxShare(title, desc, link, imgUrl) {
    Vue.wechat.ready(() => {
      // 分享给朋友
      Vue.wechat.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc,   // 分享描述
        link: link,   // 分享链接 默认以当前链接
        imgUrl: imgUrl, // 分享图标
        success() {
        },
        cancel() {
        }
      })
      // 分享到朋友圈
      Vue.wechat.onMenuShareTimeline({
        title: title, // 分享标题
        desc: desc,   // 分享描述
        link: link,   // 分享链接 默认以当前链接
        imgUrl: imgUrl, // 分享图标
        success() {
        },
        cancel() {
        }
      })
    })
  }
}
