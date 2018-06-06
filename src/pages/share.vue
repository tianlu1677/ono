<template>
  <div class="share">
    <div class="ono-share weui-panel weui-panel_access weui-flex">
      <div class="share-header weui-panel__hd weui-flex__item">
        <img :src="settings.ono_giftpage_png" width="100%" height="160px" style="border-radius: 5px">
        <div class="flex-center blue-logo">
          <img src="../common/images/ono_logo.png" width="54px" height="54px" alt="ono_logo">
        </div>
        <div class="block-redPocket">
          <p class="color-black font-weight-bold">ONO</p>
          <p class="color-black">给你发了一个区块链红包</p>
        </div>
      </div>
      <div class="share-container weui-panel__bd weui-flex__item">
        <div class="weui-media-box__hd">
          <div class="flex-center flex-center-vertical margin-top-10">
            <p class="inline-block font-weight-bold  color-black  share-get-right" id="share-get">
              100.00</p>
            <p class="share-get-left">
              <span class="with-draw">可提现</span>
              <br>
              <span class="onot color-black font-weight-bold">ONOT</span>
            </p>
          </div>
        </div>
      </div>
      <div class="share-bottom weui-panel__bd weui-flex__item">
        <div class="weui-media-box__hd bottom-container">
          <div class="weui-media-box__bd">
            <p class="person-numebr color-pink weui-media-box__desc" style="color:#ff847d; text-align: center;">本红包已经有
              <span>{{number}}</span> 人领取
            </p>
            <div style="padding:0 20px">
              <x-button type="warn" @click.native="goSignIn" class="margin-top-10">
                立即领取
              </x-button>
            </div>
            <!--<div id="get-login" @click="goSignIn"-->
            <!--class="weui-btn weui-btn_primary weui-btn_md width-80 background-red ">-->
            <!--</div>-->
          </div>
        </div>
        <div class="weui-media-box weui-media-box_appmsg share-bottom-desc">
          <div class="weui-media-box__bd">
            <h4 style="font-size:13px;font-weight:bold;" class="weui-media-box__title color-gray">活动说明</h4>
            <div class="font-size-16">
              <p style="line-height: 1.5;overflow:inherit;" class="weui-media-box__desc text-left line-height-20" id="activity-desc">
                  1、本红包将于今日24点过期。（限ONO新用户领取）
                  <br>
                  2、ONO新用户（未注册用户）领取直接提取到ONO账户中，领取成功自动注册ONO账号。
                  <br>
                  3、ONO老用户（已注册用户）可通过发放区块链红包获得更多ONOT奖励。
                  <br>
                  4、本活动由ONO超级合伙人及海洋社群举办。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      return {
          number: null
      };
    },
    created() {
    },
    mounted(){
        this.randomNumber(40000,200);
        this.addNumber();
    },
    methods: {
      addNumber(){
          setInterval(()=>{
                this.number += Math.floor(Math.random()*10+1);
          },1000 * Math.floor(Math.random()*10+1))
      },
      randomNumber(m,n){
          this.number = 1000
      },
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
.ono-share{
    flex-direction: column;
    .block-redPocket{
        position: relative;
        top: -15px;
    }

    .share-bottom{
        .person-number{
            color:#ff847d;
        }
    }
    @media (min-width: 320px) {     
    .share-bottom{
        height: 40%;
        }
    }

    @media (min-width: 375px) {
    .share-bottom{
        height: 45%;
        }
    }
}
</style>
