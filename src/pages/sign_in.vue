<template>
  <div class="sign">
    <div class="login-header weui-panel weui-panel_access">
      <div class="login-container weui-panel__bd flex-center">
        <div class="weui-media-box__hd " style="width: 90%">
          <!--<h3 style="text-align: left">-->
          <!--领取区块链红包-->
          <!--</h3>-->
          <div class="flex-center">
            <div class="width-100">
              <group title="登录领取红包">
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
      <div style="padding: 20px">
        <x-button type="warn" @click.native="sign">立即领取</x-button>
      </div>

    </div>
  </div>
</template>

<script>
  import {createPhoneCode, signIn} from "@/api/account_api";
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import BottomNav from "components/bottom-nav/bottom-nav";
  import {Group, XSwitch, Cell} from 'vux';
  import {XInput, Toast} from 'vux'

  const LongTime = 60
  export default {
    name: "sign_in",
    mixins: [SettingsMixin],
    directives: {

    },
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
        checkNumber: ""
      };
    },
    created() {
      console.log(this.currentAccount)
    },

    activated() {
      console.log(this.token)
    },

    beforeDestroy() {
    },

    mounted() {
      if (this.currentAccount.id) {
        this.$router.push({path: '/home'})
      }
    },

    methods: {
      async sign() {
        if (this.phoneNumber.length === 11 && this.checkNumber.length === 4) {
          const res = await signIn({
            phone: this.phoneNumber,
            phone_verify: this.checkNumber
          });
          if (res.status === 1000) {
            this.$vux.toast.show({text: res.msg, type: 'text'});
          } else {
            localStorage.setItem("token", res.token);
            this.$router.push({path: '/home'})
          }
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
      }
    }
  };
</script>

<style lang="scss">
  .sign {
    margin-top: 5%;
  }
</style>
