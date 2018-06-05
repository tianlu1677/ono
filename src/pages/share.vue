<template>
  <div class="share">
    <div class="ono-share weui-panel weui-panel_access">
      <div class="share-header weui-panel__hd">
        <!-- <div class="flex-center"> -->
        <img :src="settings.ono_giftpage_png" width="100%" height="160px">
        <div class="flex-center blue-logo">
          <img src="../common/images/ono_logo.png" width="54px" height="54px" alt="123">
        </div>
        <div>
          <p class="color-black font-weight-bold">ONO</p>
          <p class="color-black">给你发了一个区块链红包</p>
        </div>
      </div>
      <div class="share-container weui-panel__bd">
        <div class="weui-media-box__hd">
          <div class="flex-center flex-center-vertical margin-top-50">
            <p class="inline-block font-weight-bold  color-black  share-get-right font-size-48" id="share-get">
              100.00</p>
            <p class="share-get-left">
              <span class="with-draw">可提现</span>
              <br>
              <span class="onot color-black font-weight-bold">ONOT</span>
            </p>
          </div>
        </div>
      </div>
      <div class="share-bottom weui-panel__bd">
        <div class="weui-media-box__hd bottom-container">
          <div class="weui-media-box__bd">
            <p class="color-pink weui-media-box__desc">本红包已经有
              <span id="number">23452</span> 人领取
            </p>
            <div style="padding: 20px">
              <x-button type="warn" @click.native="goSignIn" class="margin-top-10">
                立即领取
              </x-button>
            </div>
            <!--<div id="get-login" @click="goSignIn"-->
            <!--class="weui-btn weui-btn_primary weui-btn_md width-80 background-red ">-->

            <!--</div>-->
          </div>
        </div>
        <div class="weui-media-box weui-media-box_appmsg" style="height: 200px">
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title color-gray">活动说明</h4>
            <div class="font-size-16">
              <p class=" weui-media-box__desc text-left line-height-20" id="activity-desc">
                说明
              </p>
              <p class="weui-media-box__desc text-left line-height-20">
                说明
              </p>
              <p class="weui-media-box__desc text-left line-height-20">
                说明
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <bottom-nav></bottom-nav> -->
</template>

<script>
  import {createPhoneCode, signIn} from "@/api/account_api";
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import {getCookie} from "common/js/cookies";
  import BottomNav from "components/bottom-nav/bottom-nav";

  export default {
    name: "share",
    mixins: [SettingsMixin],

    components: {
      BottomNav
    },
    data() {
      return {};
    },
    created() {
    },

    methods: {
      goSignIn() {
        if (this.token) {
          this.$router.push({path: '/home'})
        } else {
          this.$router.push({path: '/sign_in'})
        }
      },
    }
  };
</script>

<style lang="scss">
</style>
