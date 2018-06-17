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

    <div class="weui-tab__bd">
      <div class="main">
        <div id="log-list" class="weui-panel__bd" v-for="(invite_log,index) in inviteLogs" :key="index">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" style="padding-top: 5px; padding-bottom: 5px;">
            <div class="weui-media-box__hd">
              <img class="" :src="invite_log.account_avatar_url" width="50px" height="50px"  style="border-radius: 50%"  v-if="invite_log.account_avatar_url">
               <img  src="../common/images/ono_logo.png" width="50px" height="50px" style="border-radius: 50%" alt="" v-else>

            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">
                <span>{{invite_log.record_log}}</span>
                <span style="font-size: 12px;color: gray">(手机尾号{{invite_log.account_phone}})</span>
            </h4>
              <p class="weui-media-box__desc">{{invite_log.created_at}}</p>
            </div>
            <div class="weui-media-box__ft" style="width:20%;text-align:right">
              <h4 class="weui-media-box__title color-orange font-weight-bold">+{{invite_log.obtain_amount}}</h4>
              <p class="weui-media-box__desc" style="float: right">{{invite_log.handle_type}}</p>
            </div>
          </a>
        </div>
        <div class="weui-panel weui-panel_access" v-if="!last_page">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over" @click="loadMore"> 点击加载更多
          </div>
        </div>
        <div class="weui-panel weui-panel_access" v-if="last_page">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over"> 已加载完毕
          </div>
        </div>
        <div class="weui-panel weui-panel_access" v-if="inviteLogs.length==0">
          <div class="weui-panel__hd" style="text-align: center" id="loading-over"> 暂时没有记录
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  import {getAccountInfo, getInviteLogs} from "@/api/account_api";
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
        inviteLogs: [],
        next_page: 1,
        last_page: false
      }
    },
    async created() {
      const invite_logs_res = await getInviteLogs()
      this.inviteLogs = invite_logs_res.on_invite_logs
      this.next_page = invite_logs_res.next_page
      this.last_page = invite_logs_res.last_page
    },

    methods: {
      async loadMore() {
        if(!this.last_page) {
          const invite_logs_res = await getInviteLogs({page: this.next_page})
          this.inviteLogs = this.inviteLogs.concat(invite_logs_res.on_invite_logs)
          this.next_page = invite_logs_res.next_page
          this.last_page = invite_logs_res.last_page
        } else {
          this.last_page=true
        }
      }
    }
  };
</script>

<style lang="scss">
  .weui-media-box__thumb {

  }
</style>
