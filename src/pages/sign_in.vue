<template>
  <div class="home">
    sign
     <div class="login-header weui-panel weui-panel_access">
        <div class="login-container weui-panel__bd flex-center">
            <div class="weui-media-box__hd " style="width: 90%">
                <h3 style="text-align: left">领取区块链红包</h3>
                <div class="flex-center">
                    <div class="width-100">
                        <label>
                            <input class="get-pocket" type="text" name="" id="phoneNumber" placeholder="请输入中国大陆 11 位手机号码">
                        </label>
                        <label class="get-pocket-container">
                            <input class="get-pocket" type="text" name="" id="check" placeholder="请输入 4 位验证码">
                            <a href="" class="get-pocket-icon">获取验证码</a>
                        </label>
                    </div>
                    </div>
                </div>
                <a id="get-login" href="javascript:void(0);" class="weui-btn weui-btn_primary weui-btn_md  background-red margin-top-10">
                    立即领取 
                </a>
            </div>
        </div>
    </div>
    <!-- <bottom-nav></bottom-nav> -->
</template>

<script>
import BottomNav from "components/bottom-nav/bottom-nav";
export default {
    name: "sgin_in",

    components: {
        BottomNav
    },
    data() {
        return {};
    },
    created() {},

    methods: {}
};
</script>

<style lang="scss">
</style>
