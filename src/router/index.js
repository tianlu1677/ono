import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import store from "../store";
import * as types from '../store/types'
import wechat from '@/common/js/wechat'

import {getToken} from "@/common/js/cookies";

import Home from "pages/home";
import Mine from "pages/mine";
import Rank from "pages/rank";
import SignIn from "pages/sign_in";
import About from "pages/about";
import HowToPlay from "pages/how_to_play";
import Share from "pages/share";
import InviteLogs from "pages/invite_logs";
import Logout from "pages/logout"

const router = new Router({
  mode: 'history',
  base: "/home/ono",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        // auth: true,
        title: "ONO - In a good way",
        keepAlive: true
      }
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank,
      meta: {
        auth: true,
        title: "榜单"
      }
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine,
      meta: {
        auth: true,
        title: "个人中心"
      }
    },
    {
      path: "/invite_logs",
      name: "invite_logs",
      component: InviteLogs,
      meta: {
        auth: true,
        title: "累计获取"
      }
    },
    {
      path: "/share",
      name: "share",
      component: Share,
      meta: {
        title: "ONO - In a good way"
      }
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: SignIn,
      meta: {
        title: "新用户登录领取红包"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        auth: true,
        title: "项目介绍"
      }
    },

    {
      path: "/how_to_play",
      name: "how_to_play",
      component: HowToPlay,
      meta: {
        auth: true,
        title: "规则说明"
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        title: "logout"
      }
    },
  ]
});

// 用户的登录验证
//  需要登录的部分.
// 1. 如果token存在，则请求用户信息 1,获取成功，则更新store中的currentAccount,
// 不存在或者请求不成功，则去调用微信的获取用户信息的接口，发生跳转
// 2. 如果token 不存在，则去调用微信的接口去获取用户的信息
const HOME = 'home'
router.beforeEach(async (to, from, next) => {
  let token = getToken();

  changeDocumentTitle(to);

  if (!Vue.device.isAndroid) {
    if (!store.state.iosJsUrl) {
      let landingPage = document.URL
      // 如果进入路由有跳转需要加入跳转后的路由名称,比如/跳转到/home
      // if (to.name === HOME && landingPage.indexOf(HOME) === -1) {
      //   landingPage = landingPage + HOME
      // }
      store.commit(types.SET_WX_JS_URL, {iosJsUrl: landingPage})
    }
  }

  if (to.matched.some(record => record.meta.auth)) {
    if (!token) {
      next({path: '/sign_in'})
    } else {
      next()
    }
  } else {
    next()
  }

});

router.afterEach(to => {
  let _url = window.location.origin + to.fullPath
  if (!Vue.device.isAndroid) {
    // _url = store.state.iosJsUrl.split('#')[0]
    _url = window._url
    alert(`ios ${_url}`)
    // _url = _url.replace("&from=singlemessage&isappinstalled=0", '')
    // _url = encodeURIComponent(_url)
  } else {
    alert(`android ${_url}`)
    // _url = encodeURIComponent(_url)
  }

  wechat.getJSSDK(_url)
});

// 设置title
function changeDocumentTitle(to) {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
}

function recordLastPage(from_path) {
  let record_path = ["home", "new_topic", "mine"];
  record_path.forEach(path => {
    if (from_path.indexOf(path) >= 0) {
      localStorage.setItem("lastPath", from_path);
    }
  });
}
export default router;
