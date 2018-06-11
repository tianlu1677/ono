import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
  },
  state: {
    currentAccount: undefined,
    bottomNav: {home: false, topic: false, mine: false},
    isLoading: false,
    iosJsUrl: '',// 微信URL
    isAndroid: false
  },
  actions,
  mutations,
  getters,
  strict: debug

})
