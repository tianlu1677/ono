<template>
  <div class="home">
     <div class="weui-tab ono-header">
        <div class="box">
            <div class="winBox">
                <ul class="scroll">
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

     <div class="weui-tab__bd" style="padding-top: 20px;">
        <div class="main">
          <div id="log-list" class="weui-panel__bd" v-for="(item,index) in inviteLogs" :key="index">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                      <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="#" width="60px" height="60px">
                      </div>
                      <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.nickname}}</h4>
                        <p class="weui-media-box__desc">{{item.created_at}}</p>
                      </div>
                      <div class="weui-media-box__ft" style="width:20%;text-align:right">
                        <h4 class="weui-media-box__title color-orange font-weight-bold">{{item.all_account}}</h4>
                            <p class="weui-media-box__desc">{{item.status}}</p>
                      </div>
                    </a>
                </div>
          <!--<div class="weui-panel weui-panel_access">-->
          <!--<div class="weui-panel__hd" style="text-align: center" id="loading-over">已加载完毕</div>-->
          <!--</div>-->
        </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import {getAccountInfo, getInviteLogs} from "@/api/account_api";

import BottomNav from "components/bottom-nav/bottom-nav";
export default {
    name: "about",
    components: {
        BottomNav
    },
    data() {
      return {
        currentAccount: {},
        inviteLogs: []
      }
    },
  async created() {
    const invite_logs_res = await getInviteLogs()
    this.inviteLogs = invite_logs_res.invite_logs
  },

    methods: {}
};
</script>

<style lang="scss">
</style>
