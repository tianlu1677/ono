import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import store from "../store";
import {getToken} from "@/common/js/cookies";

import Home from "pages/home";
import Mine from "pages/mine";
import Rank from "pages/rank";
import SignIn from "pages/sign_in";
import About from "pages/about";
import HowToPlay from "pages/how_to_play";
import Share from "pages/share";
import InviteLogs from "pages/invite_logs";

const router = new Router({
  base: "/ono",
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
        title: "首页",
        keepAlive: true
      }
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank,
      meta: {
        auth: true,
        title: "排行榜"
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
        title: "分享"
      }
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: SignIn,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        auth: true,
        title: "关于"
      }
    },

    {
      path: "/how_to_play",
      name: "how_to_play",
      component: HowToPlay,
      meta: {
        auth: true,
        title: "攻略"
      }
    },
  ]
});

// 用户的登录验证
//  需要登录的部分.
// 1. 如果token存在，则请求用户信息 1,获取成功，则更新store中的currentAccount,
// 不存在或者请求不成功，则去调用微信的获取用户信息的接口，发生跳转
// 2. 如果token 不存在，则去调用微信的接口去获取用户的信息

router.beforeEach(async (to, from, next) => {
  let token = getToken();
  if (to.matched.some(record => record.meta.auth)) {
    if (!token) {
      next({path: '/sign_in'})
    } else {
      next()
    }
  } else {
    next()
  }

  // if (to.matched.some(record => record.meta.loading)) {
  //   store.commit('UPDATE_LOADING', {isLoading: true})
  // }

  changeDocumentTitle(to);

  // if (!store.state.jsUrl && (to.fullPath.indexOf('login') < 0 || to.fullPath.indexOf('sign_up') < 0)) {
  //   store.commit('SET_WX_JS_URL', document.URL)
  // }
  // if (to.matched.some(record => record.meta.auth)) {
  //   if (token && token.length > 10) {
  //     await store.dispatch('setCurrentAccount', token)
  //     next()
  //   } else {
  //     recordLastPage(to.fullPath)
  //     next({path: '/sign_up'})
  //   }
  // } else {
  //   next()
  // }
  // next();
});

router.afterEach(to => {});

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
