<template>
  <div class="home">
    mine
     <div class="weui-tab__bd" style="padding-top: 100px">
            <!-- 没有数据的时候显示 -->
            <!-- <div class="lazyLoad" style="margin-top:50px;">
                <div class="weui-loadmore">
                    <i class="weui-loading"></i>
                    <span class="weui-loadmore__tips">正在加载</span>
                </div>
                <div class="weui-loadmore weui-loadmore_line">
                    <span class="weui-loadmore__tips">暂无数据</span>
                </div>
                <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
                    <span class="weui-loadmore__tips"></span>
                </div>
            </div> -->

            <div class="main">
                <div id="about" class="weui-popup__container popup-bottom">
                    <div class="weui-popup__overlay"> 你的内容放在这里...
                        <a href="javascript:void(0)" class="close-popup weui-btn weui-btn_primary weui-btn_md">关闭</a>
                    </div>
                    <div class="weui-popup__modal" style="padding-bottom: 100px">
                        你的内容放在这里...
                        <a href="javascript:void(0)" class="close-popup weui-btn weui-btn_primary weui-btn_md">关闭</a>
                    </div>

                </div>

                <div class="weui-panel weui-panel_access">
                    <div class="weui-panel__hd" style="padding: 0;">
                        <a @click="goLogs" class="weui-cell weui-cell_access weui-cell_link">
                            <img class="weui-tabbar__icon " width="27px" height="27px" src="#" alt="logo">
                            <div class="weui-cell__bd margin-left-10">累积获取</div>
                            <span class="color-gray">320</span>
                            <span class="weui-cell__ft"></span>
                        </a>
                        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                            <img class="weui-tabbar__icon" width="27px" height="27px" src="#" alt="logo">
                            <div class="weui-cell__bd margin-left-10">项目介绍</div>
                            <span class="weui-cell__ft"></span>
                        </a>
                        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                            <img class="weui-tabbar__icon" width="27px" height="27px" src="#" alt="logo">
                            <div class="weui-cell__bd margin-left-10">规则说明</div>
                            <span class="weui-cell__ft"></span>
                        </a>
                        <!-- <a href="javascript:;" class="open-popup" data-target="#about">About</a> -->
                    </div>
                </div>
            </div>
        </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from "components/bottom-nav/bottom-nav";
export default {
    name: "mine",

    components: {
        BottomNav
    },
    data() {
        return {};
    },
    created() {},

    methods: {
        goLogs(){
            this.$router.push({
                path:'/invite_logs'
            })
        }
    }
};
</script>

<style lang="scss">
</style>
