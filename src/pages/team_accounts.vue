<template>
  <div class="home">
    <div class="weui-tab list-header">
      <div class="box">
        <div class="winBox">
          <marquee class="marquee" behavior="scroll" direction="left">
            {{settings.ono_scroll_tips}}
          </marquee>
        </div>
      </div>
    </div>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">
        战队名称 {{team.title}}
        <br>
        战队联系人 {{team.leader}} - {{team.phone}}
      </div>

      <div class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <!--<div class="weui-media-box__hd">-->
          <!--<img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">-->
          <!--</div>-->
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title"></h4>
            <p class="weui-media-box__desc"></p>
          </div>
        </a>
      </div>
      <!--<div class="weui-panel__ft">-->
      <!--<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">-->
      <!--<div class="weui-cell__bd">查看更多</div>-->
      <!--<span class="weui-cell__ft"></span>-->
      <!--</a>-->
      <!--</div>-->
    </div>

    <div class="weui-tab__bd">
      <div class="main">
        <div id="log-list" class="weui-panel__bd" v-for="(account,index) in team_accounts" :key="index">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg"
             style="padding-top: 5px; padding-bottom: 5px;">
            <div class="weui-media-box__hd">
              <img class="" :src="account.avatar_url" width="50px" height="50px" style="border-radius: 50%"
                   v-if="account.avatar_url">
              <img src="../common/images/ono_logo.png" width="50px" height="50px" style="border-radius: 50%" alt=""
                   v-else>

            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">
                <span>手机尾号{{account.phone.slice(6, 10)}}</span>
              </h4>
              <p class="weui-media-box__desc">{{account.created_at}}</p>
            </div>
            <div class="weui-media-box__ft" style="width:20%;text-align:right">
              <h4 class="weui-media-box__title color-orange font-weight-bold">{{account.status_text}}</h4>
              <p class="weui-media-box__desc" style="float: right">邀请人：{{account.parent_nickname}}</p>
            </div>
          </a>
        </div>
        <div class="weui-panel weui-panel_access" v-if="!last_page">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over" @click="loadMore"> 点击加载更多
          </div>
        </div>
        <div class="weui-panel weui-panel_access" v-if="last_page && team_accounts.length!==0">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over"> 已加载完毕
          </div>
        </div>
        <div class="weui-panel weui-panel_access" v-if="team_accounts.length==0">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over"> 暂时没有记录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAccountInfo, teamAccounts} from "@/api/account_api";
  import {SettingsMixin} from 'components/mixin/settings_mixin'

  import BottomNav from "components/bottom-nav/bottom-nav";

  export default {
    name: "about",
    mixins: [SettingsMixin],
    components: {
      BottomNav
    },
    data() {
      return {
        team_accounts: [],
        team: {},
        next_page: 1,
        last_page: false
      }
    },
    async created() {
      const res = await teamAccounts()
      this.team = res.team
      this.team_accounts = res.accounts
      this.next_page = res.next_page
      this.last_page = res.total_pages === 0 || res.last_page
    },

    methods: {
      async loadMore() {
        if (!this.last_page) {
          const res = await teamAccounts({page: this.next_page})
          this.team_accounts = this.team_accounts.concat(res.accounts)
          this.next_page = res.next_page
          this.last_page = res.last_page
        } else {
          this.last_page = true
        }
      }
    }
  };
</script>

<style lang="scss">
  .weui-media-box__thumb {

  }
</style>
