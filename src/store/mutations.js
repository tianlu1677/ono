import * as types from './types'
const mutations = {

  [types.SET_WX_JS_URL](state, url) {
    state.jsUrl = url
  }
}

export default mutations
