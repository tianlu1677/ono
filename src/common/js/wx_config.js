import {getWechatApiConfig} from "@/api/account_api";

import store from '../../store'

function getJsUrl() {
  let jsUrl = ''
  let u = navigator.userAgent;
  let isWechat = (navigator.userAgent.indexOf('MicroMessenger') > -1)
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if (isiOS && isWechat) {
    jsUrl = store.state.jsUrl.split('#')[0]

    // jsUrl = window._url
    // console.log('jsUrl', jsUrl)
    // jsUrl = window.location.href.split('#')[0]
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


  const API_LIST = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone'
  ]


  const res = await getWechatApiConfig(getJsUrl())
  console.log('res', res)

  wx.config({
    debug: true,
    appId: 'wxadd1f08bb1406b3e',
    timestamp: res.data.timestamp,
    nonceStr: res.data.noncestr,
    signature: res.data.signature,
    jsApiList: API_LIST
  })


}
