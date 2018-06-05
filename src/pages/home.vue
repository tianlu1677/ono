<template>

  <!-- <share-dialog></share-dialog> -->
  <div class="home">
    <div @click="show=false" class="pop-window" v-show="show">
        <div class="pop-wrapper">
            <img src="../common/images/arrows.png" alt="" width="200px" height="auto">
            <p>点击右上角按钮</p>
            <p>邀请好友签到领取更多 ONO 奖励</p>
        </div>
    </div>
    home
     <div class="weui-tab__bd index-container">
            <div class="main">
                <div class="weui-msg" style="padding-top:0;">
                    <p style="text-align: left" class="weui-msg__desc">
                        <img class="weui-tabbar__icon new-logo" src="../common/images/news.png" alt="news">
                        <span class="">最大的自由、价值平等、去中心化的文章分享中心。</span>
                    </p>
                </div>
                <div class="weui-msg__opr-area margin-top-10">
                    <div class="weui-cell" style="padding:0;">
                        <img class="weui-cell__bd " src="../common/images/big_red_pocket.png" alt="大红包" width="90%" height="160px">
                    </div>
                    <a @click="show=true" class="weui-btn weui-btn_warn weui-btn_md width-80 background-green margin-top-10">分享获得更多的 ONOT </a>
                </div>
            </div>
            <bottom-nav></bottom-nav>
        </div>
  </div>
</template>
<script>
import BottomNav from "components/bottom-nav/bottom-nav";
import ShareDialog from "components/share-dialog/share-dialog";
export default {
    name: "home",

    components: {
        BottomNav
    },
    data() {
        return {
            show:false
        };
    },
    created() {},

    methods: {}
};
</script>

<style lang="scss">
</style>
