<template>

  <div class="share">
      share
      <div class="ono-share weui-panel weui-panel_access">
        <div class="share-header weui-panel__hd">

            <!-- <div class="flex-center"> -->
            <img src="#" width="100%" height="160px">
            <div class="flex-center blue-logo">
                <img src="#" width="54px" height="54px" alt="123">
            </div>
            <div>
                <p class="color-black font-weight-bold">ONO</p>
                <p class="color-black">给你发了一个区块链红包</p>
            </div>
        </div>
        <div class="share-container weui-panel__bd">
            <div class="weui-media-box__hd">
                <div class="flex-center flex-center-vertical margin-top-50">
                    <p class="inline-block font-weight-bold  color-black  share-get-right font-size-48" id="share-get">100.00</p>
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
                    <a id="get-login" @click="checkLogin" class="weui-btn weui-btn_primary weui-btn_md width-80 background-red margin-top-10">
                        立即领取 </a>
                </div>
            </div>
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title color-gray">活动说明</h4>
                    <div class="font-size-16">
                        <p class=" weui-media-box__desc text-left line-height-20" id="activity-desc">
                            1、由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </p>
                        <p class="weui-media-box__desc text-left line-height-20">
                            2、由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </p>
                        <p class="weui-media-box__desc text-left line-height-20">
                            3、由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>
 </div>
    <!-- <bottom-nav></bottom-nav> -->
</template>

<script>
import {createPhoneCode, signIn} from "@/api/account_api";
import {getCookie} from "common/js/cookies";

import BottomNav from "components/bottom-nav/bottom-nav";

export default {
    name: "share",

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
            console.log('cookie:',getCookie("tvfe_boss_uuid"));
            if (getCookie("session")) {
                console.log('未登录');
                //如果没有登录状态则跳转到登录页
                this.$router.push("/sign_in");
            } else {
                //否则跳转到登录后的页面
                console.log("已登录");
                
                this.$router.push("/home");
            }
        },
        goSignIn(){
            this.$router.push({
                path: '/sign_in'
            })
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
