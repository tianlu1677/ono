export async function wechatSettings(shareData = {}) {
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
  let data = {...defaultData, ...shareData}

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
