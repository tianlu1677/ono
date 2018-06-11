import {getWechatApiConfig} from "@/api/account_api";

import store from '../../store'

function getJsUrl() {
  let jsUrl = ''
  let u = navigator.userAgent;
  let isWechat = (navigator.userAgent.indexOf('MicroMessenger') > -1)
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if (isiOS && isWechat) {
    // jsUrl = store.state.jsUrl.split('#')[0]
      
    jsUrl = window._url
    console.log('jsUrl', jsUrl)
    jsUrl = jsUrl.replace("&from=singlemessage&isappinstalled=0", '')
    jsUrl = jsUrl.replace("?from=singlemessage&isappinstalled=0", '')
    
    jsUrl = encodeURIComponent(jsUrl)
  } else {
    jsUrl = encodeURIComponent(window.location.href.split('#')[0])
  }
  return jsUrl
}

export async function wechatShare(shareData = {}) {
  let isWechat = navigator.userAgent.indexOf('MicroMessenger') > -1
  if (!isWechat) {
    console.log('not wechat')
    return
  }
  let defaultData = {
    title: 'ONO',
    desc: "ONO！",
    link: window.location.href,
    type: 'link',
    imgUrl: 'https://www.baidu.com/img/bd_logo1.png', //分享出来的图片的
    success: function (res) {
      return res
    },
    cancel: function (res) {
      return res
    }
  }

  const API_LIST = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone'
  ]


  let data = {...defaultData, ...shareData}

  const res = await getWechatApiConfig(getJsUrl())
  console.log('res', res)

  wx.config({
    debug: false,
    appId: 'wxadd1f08bb1406b3e',
    timestamp: res.data.timestamp,
    nonceStr: res.data.noncestr,
    signature: res.data.signature,
    jsApiList: API_LIST
  })
wx.ready(function () {
  wx.onMenuShareTimeline({
    title: data.title,
    link: data.link,
    imgUrl: data.imgUrl,
    success: data.success,
    cancel: data.cancel,
  })

  wx.onMenuShareAppMessage({
    title: data.title,
    desc: data.desc,
    link: data.link,
    imgUrl: data.imgUrl,
    type: data.type,
    dataUrl: data.data_url,
    success: data.success,
    cancel: data.cancel
  })

  wx.onMenuShareQQ({
    title: data.title, // 分享标题
    desc: data.desc, // 分享描述
    link: data.link, // 分享链接
    imgUrl: data.imgUrl, // 分享图标
    success: data.success,
    cancel: data.cancel
  });

  wx.onMenuShareQZone({
    title: data.title, // 分享标题
    desc: data.desc, // 分享描述
    link: data.link, // 分享链接
    imgUrl: data.imgUrl, // 分享图标
    success: data.success,
    cancel: data.cancel
  });
})

}
