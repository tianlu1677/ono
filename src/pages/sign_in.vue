<template>
  <div class="sign">

    <div class="ono-share login-header weui-panel weui-panel_access">
      <div class="share-header weui-panel__hd weui-flex__item">
        <img :src="settings.ono_giftpage_png" width="100%" height="180px">
        <div class="flex-center blue-logo">
          <img src="../common/images/ono_logo.png" width="54px" height="54px" alt="123">
        </div>
      </div>
      <div class="login-container weui-panel__bd flex-center">
        <div class="weui-media-box__hd " style="width: 90%">
          <div class="flex-center">
            <div class="width-100 font-size-36">
              <group title="新用户登录领取红包">
                <x-input title="手机号" v-model="phoneNumber" placeholder="">
                </x-input>
                <x-input title="验证码" v-model="checkNumber" placeholder="">
                  <x-button :text="title" slot="right" :disabled="disabledCode" type="primary" mini
                            @click.native="getCode"></x-button>
                </x-input>
              </group>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div style="padding-top: 20px; ">
      <x-button type="warn" :disabled="submitButton" @click.native="sign" style="width: 80%;">立即领取</x-button>
    </div>
  </div>
</template>

<script>
  import {createPhoneCode, signIn, setInvite} from "@/api/account_api";
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import BottomNav from "components/bottom-nav/bottom-nav";
  import {Group, XSwitch, Cell} from 'vux';
  import {XInput, Toast} from 'vux'
  import {base64} from 'vux'


  const LongTime = 60
  export default {
    name: "sign_in",
    mixins: [SettingsMixin],
    directives: {},
    components: {
      BottomNav,
      XInput,
      Group,
      Toast
    },
    data() {
      return {
        show: false,
        disabledCode: false,
        title: '发送验证码',
        longTime: LongTime,
        phoneNumber: "",
        checkNumber: "",
        submitButton: false
      };
    },
    async created() {
      await this.getCurrentAccount()
      if (this.currentAccount && this.currentAccount.id) {
        this._redirectHome()
      }
      
    },

    activated() {
      console.log(this.token)
    },

    beforeDestroy() {
    },

    mounted() {

    },

    methods: {
      async sign() {
        if (this.phoneNumber.length === 11 && this.checkNumber.length === 4) {
          this.submitButton = true
          const res = await signIn({
            phone: this.phoneNumber,
            phone_verify: this.checkNumber
          });
          if (res.status === 1000) {
            this.$vux.toast.show({text: res.msg, type: 'text'});
          } else {
            localStorage.setItem("token", res.token);
            await this.setAccountInvite()            
            this._redirectHome()
          }
          setTimeout(() => {
            this.submitButton = false
          }, 800)


        } else {
          this.$vux.toast.show({text: '请输入正确的手机号和验证码', type: 'text'})
        }
      },
      async getCode() {
        if (this.phoneNumber && this.phoneNumber.length === 11) {
          const res = await createPhoneCode({phone: this.phoneNumber});
          this.startTimer()
        } else {
          this.$vux.toast.show({text: '请输入正确的手机号', type: 'text'})
        }
      },
      _redirectHome() {
        const shareParentId = this.currentAccount.id
        this.$router.push({path: '/home', query: {type: 'share', share: shareParentId}})
      },

      startTimer() {
        this.disabledCode = true
        this.title = '倒计时' + this.longTime.toString()
        this.longTime--
        if (this.longTime > 0) {
          setTimeout(this.startTimer.bind(this), 1000)
        } else {
          this.title = '发送验证码'
          this.disabledCode = false
          this.longTime = LongTime
        }
      },
      async setAccountInvite() {
        const shareToken = window.localStorage.getItem('share') || ''
        await setInvite({share: shareToken, 'wechat-token': window.localStorage.getItem('token')})
        window.localStorage.removeItem('share')

      }
    }
  };
</script>

<style lang="scss">
  //   .sign {
  //     margin-top: 5%;
  //   }

  .login-container .weui-cells__title {
    text-align: center;
  }
</style>
