import * as types from './types'
const mutations = {

  [types.SET_WX_JS_URL](state, payload) {
    state.iosJsUrl = payload.iosJsUrl
  },
  [types.UPDATE_DEVICE](state, payload) {
    state.isAndroid = payload.isAndroid
  },

}

export default mutations
