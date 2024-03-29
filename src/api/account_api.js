import request from './request'

// # 用户个人信息
export async function getAccountInfo() {
  const res = await request({
    url: `/api/ono/v1/accounts/info.json`,
    method: 'GET',
    params: {
      'wechat-token': localStorage.getItem('token')
    }
  })
  return res.data
}

// # 发送手机验证码
export async function createPhoneCode(data = {phone: ''}) {
  const res = await request({
    url: `/api/ono/v1/accounts/create_phone_code.json`,
    method: 'POST',
    data: {
      phone: data['phone']
    }
  })
  return res.data
}

// # 手机验证码登录
export async function signIn(data = {phone: '', phone_verify: ''}) {
  const res = await request({
    url: `/api/ono/v1/accounts/sign_in.json`,
    method: 'POST',
    data: data
  })
  return res.data
}


// # 手机验证码登录 团队
export async function login(data = {phone: '', phone_verify: '', account_id: ''}) {
  const res = await request({
    url: `/api/ono/v1/accounts/login.json`,
    method: 'POST',
    data: data
  })
  return res.data
}

// #  团队战绩
export async function teamAccounts(params = {}) {
  const res = await request({
    url: `/api/ono/v1/accounts/team.json`,
    method: 'GET',
    params: params
  })
  return res.data
}


// # 榜单
export async function getRank(params = {}) {
  const res = await request({
    url: `/api/ono/v1/accounts/rank.json`,
    method: 'GET',
    params: params
  })
  return res.data
}

// 邀请
//
export async function setInvite(data = {share: ''}) {
  const res = await request({
    url: `/api/ono/v1/accounts/invite.json`,
    method: 'POST',
    data: data
  })
  return res.data
}
// # 个人中心的获取列表
export async function getInviteLogs(params = {}) {
  const res = await request({
    url: `/api/ono/v1/on_invite_logs.json`,
    method: 'GET',
    params: params
  })
  return res.data
}

// 全局配置
export async function getSiteSettings(params = {}) {
  const res = await request({
    url: `/api/ono/v1/site_configs.json`,
    method: 'GET',
    params: params
  })
  return res.data
}

// 关于项目
export async function getAbout(params = {}) {
  const res = await request({
    url: `/api/ono/v1/site_configs/agreement.json`,
    method: 'GET',
    params: params
  })
  return res.data
}

export async function updateAccount(data = {}) {
  const res = await request({
    url: 'api/ono/v1/accounts/update_info',
    method: 'PUT',
    data: data
  })
  return res.data
}

export async function getWechatApiConfig(url = '') {
  const res = await request({
    url: `https://api.ono.chat/api/v1/share/get_token?url=${url}`,
    method: 'GET'
  })
  return res.data
}

export async function getWechatApiConfig1(url = '') {
  const res = await request({
    url: '/api/ono/v1/accounts/get_wechat_token',
    method: 'POST',
    data: {
      url: url
    }
  })
  return res.data
}


// # 发送手机验证码
// ```
// POST localhost:4000/api/ono/v1/accounts/create_phone_code.json

// data: {
//     phone: '18612300111'
// }
// ```
// # 手机验证码登录
// ```
// POST  localhost:4000/api/ono/v1/accounts/sign_in.json
// data: {
//     phone:18612300141
//     phone_verify:798164
// }
// ```
// # 用户个人信息
// ```
// GET localhost:4000/api/coin/v1/accounts/info.json
// headers: {
//     'wechat-token': '452318b8-8bfd-4821-aba7-f40be2d60d82'
// }
// ```
// # 榜单
// ```
// GET  http://test.niubibeta.com/api/ono/v1/accounts/rank.json
// params: {
//     type: 'web'
// }
// ```
// # 个人中心
// ```
// GET  localhost:4000/api/ono/v1/on_invite_logs.json
// ```
// # 全局配置
// ```
// GET localhost:4000/api/ono/v1/site_configs.json
// ```
// # 邀请
// ```
// POST  localhost:4000/api/ono/v1/accounts/invite.json
// share = Base64.encode('3427' + this.userInfo.id); #当前用户的ID
// data: {
//     share: ''
// }
// ```
