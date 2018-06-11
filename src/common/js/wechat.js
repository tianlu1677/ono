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
    alert(`getToken==>${url}`)
    // https://api.ono.chat/api/v1/share/get_token?url=${url}
    Vue.http.get('https://api.ono.chat/api/v1/share/get_token?url=' + url).then(res => {
      const wxconfig = {
        debug: false,
        appId: 'wxadd1f08bb1406b3e',
        timestamp: res.data.data.timestamp,
        nonceStr: res.data.data.noncestr,
        signature: res.data.data.signature,
        jsApiList: jsApiList
      }
      Vue.wechat.config(wxconfig)
    })
  },

  setWxShare(title, desc, link, imgUrl) {
    // Vue.wechat.ready(() => {
    //   // 分享给朋友
    //   Vue.wechat.onMenuShareAppMessage({
    //     title: title, // 分享标题
    //     desc: desc,   // 分享描述
    //     link: link,   // 分享链接 默认以当前链接
    //     imgUrl: imgUrl, // 分享图标
    //     success() {
    //     },
    //     cancel() {
    //     }
    //   })
    //   // 分享到朋友圈
    //   Vue.wechat.onMenuShareTimeline({
    //     title: title, // 分享标题
    //     desc: desc,   // 分享描述
    //     link: link,   // 分享链接 默认以当前链接
    //     imgUrl: imgUrl, // 分享图标
    //     success() {
    //     },
    //     cancel() {
    //     }
    //   })
    // })

    function initShare() {
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
    }
    Vue.wechat.ready(initShare)
    initShare()
  }
}
