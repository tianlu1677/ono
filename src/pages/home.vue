<template>
  <div class="home">
    <div @click="show=false" class="pop-window" v-show="show">
      <div class="pop-wrapper">
        <img src="../common/images/arrows.png" alt="" width="200px" height="auto">
        <p>点击右上角按钮</p>
        <p>邀请好友签到领取 3 个 ONO 奖励</p>
      </div>
    </div>

    <div class="weui-tab__bd index-container">
      <avatar :account="currentAccount"></avatar>
      <div class="main">
        <div class="weui-msg" style="padding-top:0;">
          <p style="text-align: left" class="weui-msg__desc">
            <img class="weui-tabbar__icon new-logo" src="../common/images/news.png" alt="news">
            <span class="">最大的自由、价值平等、去中心化的文章分享中心。</span>
          </p>
        </div>
        <div class="weui-msg__opr-area margin-top-10">
          <img class="weui-cell__bd " :src="settings.ono_mainpage_png" alt="大红包" width="100%">
          <a @click="show=true" class="weui-btn weui-btn_warn weui-btn_md width-80 background-green margin-top-10">分享获得更多的
            ONOT </a>
        </div>
      </div>
      <bottom-nav></bottom-nav>
    </div>
  </div>


</template>

<script>
  import Avatar from "components/avatar/avatar"
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import BottomNav from "components/bottom-nav/bottom-nav";
  import ShareDialog from "components/share-dialog/share-dialog";

  export default {
    name: "home",
    mixins: [SettingsMixin],

    components: {
      BottomNav,
      Avatar
    },
    data() {
      return {
        show: false,
        currentAccount: {}
      };
    },
    async created() {
    },

    methods: {}
  };
</script>

<style lang="scss">
  .home {
    padding: 10px 15px;
  }
</style>
