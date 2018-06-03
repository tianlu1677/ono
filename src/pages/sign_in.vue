<template>
  <div class="home">
    
    sign

    <div class="ono-share weui-panel weui-panel_access">
        <div class="share-header weui-panel__hd">

            <!-- <div class="flex-center"> -->
            <img src="#" width="100%" height="auto">
            <div class="flex-center blue-logo">
                <img src="#" width="54px" height="54px" alt="logo">
            </div>
            <div>
                <p class="color-black font-weight-bold">ONO</p>
                <p class="color-black">给你发了一个区块链红包</p>
            </div>
        </div>
        <div class="share-container weui-panel__bd">
            <div class="weui-media-box__hd">

                <div class="flex-center flex-center-vertical margin-top-50">
                    <p class="inline-block font-weight-bold  color-black  share-get-right font-size-48" id="share-get">100</p>
                    <p class="share-get-left">
                        <span class="with-draw">可提现</span>
                        <br>
                        <span class="onot color-black font-weight-bold">ONOT</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="share-bottom weui-panel__ft">
            <div class="weui-media-box__ft">
                <div class="weui-media-box__bd">
                    <p class="color-pink weui-media-box__desc">本红包已经有
                        <span id="number">23452</span> 人领取
                    </p>
                    <a id="get-login" href="javascript:void(0);" class="weui-btn weui-btn_primary weui-btn_md width-80 background-red margin-top-10">
                        立即领取 </a>
                </div>
            </div>
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title color-gray">活动说明</h4>
                    <div class="font-size-16">
                      <p class="weui-media-box__desc text-left line-height-20" id="activity-desc">
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
    <!-- <bottom-nav></bottom-nav> -->
  </div>
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
