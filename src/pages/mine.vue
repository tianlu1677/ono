<template>
  <div class="home">
    <avatar :account="currentAccount"></avatar>
    <div class="weui-tab__bd" style="">
      <div class="main">
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__hd" style="padding: 0;">
            <router-link to="/invite_logs" tag="div" class="weui-cell weui-cell_access weui-cell_link">
              <img class="weui-tabbar__icon " width="27px" height="27px" src="../common/images/all_get.png" alt="logo">
              <div class="weui-cell__bd margin-left-10">累积获取</div>
              <span class="color-gray">320</span>
              <span class="weui-cell__ft"></span>
            </router-link>
            <router-link to="/about" tag="div" class="weui-cell weui-cell_access weui-cell_link">
              <img class="weui-tabbar__icon" width="27px" height="27px" src="../common/images/proj_info.png" alt="logo">
              <div class="weui-cell__bd margin-left-10">项目介绍</div>
              <span class="weui-cell__ft"></span>
            </router-link>
            <router-link to="/how_to_play" tag="div" class="weui-cell weui-cell_access weui-cell_link">
              <img class="weui-tabbar__icon" width="27px" height="27px" src="../common/images/how_to_play.png"
                   alt="logo">
              <div class="weui-cell__bd margin-left-10">规则说明</div>
              <span class="weui-cell__ft"></span>
            </router-link>
            <!-- <a href="javascript:;" class="open-popup" data-target="#about">About</a> -->
          </div>
        </div>
      </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import Avatar from "components/avatar/avatar"
  import {getAccountInfo} from "@/api/account_api";
  import BottomNav from "components/bottom-nav/bottom-nav";

  export default {
    name: "mine",

    components: {
      BottomNav,
      Avatar
    },
    data() {
      return {
        currentAccount: {}
      };
    },
    async created() {
      const res = await getAccountInfo()
      this.currentAccount = res.account
    },

    methods: {}
  };
</script>

<style lang="scss">
</style>
