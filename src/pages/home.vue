<template>
  <div class="home">
    <div @click="show=false" class="pop-window" v-show="show">
        <div class="pop-wrapper">
            <img src="../common/images/arrows.png" alt="" width="200px" height="auto">
            <p>点击右上角按钮</p>
            <p>发给好友或分享到朋友圈</p>
            <p>即可坐收丰厚ONOT奖励</p>
        </div>
    </div>
     <avatar :account="currentAccount" :position="position"></avatar>
     <div class="weui-tab__bd index-container">
            <div class="main">
                <div class="weui-msg" style="padding-top:0;">
                    <p class="horn weui-msg__desc">
                        <img class="weui-tabbar__icon new-logo" src="../common/images/news.png" alt="news">
                        <span>最大的自由、价值平等、去中心化的文章分享中心。</span>
                    </p>
                </div>
                <div class="weui-msg__opr-area margin-top-10">
                    <div class="weui-cell" style="padding:0;">
                        <img class="weui-cell__bd " src="../common/images/big_red_pocket.png" alt="大红包" width="90%" height="180px">
                    </div>
                    <a @click="show=true" class="weui-btn weui-btn_warn weui-btn_md width-80 background-green margin-top-10">分享获得更多的 ONOT </a>
                </div>
            </div>
            <bottom-nav></bottom-nav>
        </div>
  </div>
</template>
<script>
import Avatar from "components/avatar/avatar"
import BottomNav from "components/bottom-nav/bottom-nav";
import ShareDialog from "components/share-dialog/share-dialog";
export default {
    name: "home",

    components: {
        BottomNav,
        Avatar
    },
    data() {
        return {
            show:false,
            accounts: [],
            position: null,
        };
    },
    created() {},

    methods: {}
};
</script>

<style lang="scss">
.horn{
    margin: 0 10px;
    text-align: left;
    color: #000;
}
.avatar{
    .weui-cell{
        .text{
            color: #8e8e8e;
        }
    }
}
</style>
