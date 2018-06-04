<template>
  <div class="home">
    <!-- <group>
      <x-switch :title="('Show Me')" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>

      <alert v-model="show" :title="('Congratulations')" @on-show="onShow" @on-hide="onHide"> {{ ('Your Message is sent successfully~') }}</alert>
    </div> -->


     <div class="login-header weui-panel weui-panel_access">
        <div class="login-container weui-panel__bd flex-center">
            <div class="weui-media-box__hd " style="width: 90%">
                <h3 style="text-align: left">领取区块链红包</h3>
                <div class="flex-center">
                    <div class="width-100">
                        <div>
                            <input class="get-pocket" type="text" name="" maxlength="11" v-model="phoneNumber" id="phoneNumber" placeholder="请输入中国大陆 11 位手机号码">
                        </div>
                        <div class="get-pocket-container">
                            <input class="get-pocket" type="text" name="" maxlength="4"  v-model="checkNumber" id="check" placeholder="请输入 4 位验证码">
                            <span class="get-pocket-icon" @click="getCode">获取验证码</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="get-login" @click="sign()" class="weui-btn weui-btn_primary weui-btn_md  background-red margin-top-10">
                  立即领取 
            </div>
        </div>
    </div>
    <!-- <bottom-nav></bottom-nav> -->
</template>

<script>
import {createPhoneCode, signIn} from "@/api/account_api";
import BottomNav from "components/bottom-nav/bottom-nav";
import { AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux';
import VueWeui from 'vue-weui';


export default {
    name: "sgin_in",
    directives: {
        TransferDom
    },
    components: {
      VueWeui,
        BottomNav,
        Alert,
        Group,
        XSwitch,
        Cell
    },
    data() {
        return {
            show: false,
            show1: false,
            show2: false,
            phoneNumber: "",
            checkNumber: ""
        };
    },
    created() {},

    beforeDestroy() {
        // clearInterval(this.timer);
    },

    mounted() {
        // this.timer = setInterval(() => {
        //     console.log(this.$vux.alert.isVisible());
        // }, 1000);
    },

    methods: {
        // alert
        onHide () {
          console.log('on hide')
        },
        onShow () {
          console.log('on show')
        },
        showPlugin() {
          console.log('$vue:',this.$vux);
           this.$vux.alert.show({
            title: 'Vux is Cool',
            content: 'Do you agree?',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
            }
          })
        },
        //检测是否登录
        checkLogin() {
            //检查是否存在session
            //cookie操作方法在源码里有或者参考网上的即可
            if (!this.getCookie("session")) {
                //如果没有登录状态则跳转到登录页
                this.$router.push("/login");
            } else {
                //否则跳转到登录后的页面
                this.$router.push("/user_info");
            }
        },

        async sign() {
            //  提交数据
            const res = await signIn({
                phone: this.phoneNumber,
                phone_verify: this.checkNumber
            });

            console.log("res:", res);
            res.status === 1000 && alert("验证码错误");

            if (res.status === 200) {
                localStorage.setItem("token", res.account.token);
                window.location.reload();
                // 请求用户信息
            }

            console.log("res:", res);

            // 1，写 localstorge 2. cookies
            // 2. 刷新这个页面， 请求当前用户信息
            // console.log(this.phoneNumber);
            // alert("123:");
            // alert("123");
        },
        async getCode() {
            if (this.phoneNumber) {
                const res = await createPhoneCode({phone: this.phoneNumber});
                console.log(res);
            } else {
                // alert("请输入手机号码");
                $.toptip("警告", "warning");
            }
        }
    }
};
</script>

<style lang="scss">
</style>
