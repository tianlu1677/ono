<template>
  <div class="home">
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

export default {
    name: "sgin_in",

    components: {
        BottomNav
    },
    data() {
        return {
            phoneNumber: "",
            checkNumber: ""
        };
    },
    created() {},

    methods: {
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
            console.log("test:");

            const res = await createPhoneCode({phone: this.phoneNumber});

            console.log(res);
        }
    }
};
</script>

<style lang="scss">
</style>
