<template>
  <div class="home">
   
     <div class="weui-tab list-header">
        <!-- <div class="weui-panel__hd ono-roll" id="ono-roll" style="width: 100%;position: fixed;z-index: 100;background: lightskyblue">图文组合列表</div> -->
        <div class="box">
            <div class="winBox">
                <ul class="scroll">
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                    <li>
                        <a href="#">最大的自由、价值平等、去中心化的文章分享中心。</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
     <div class="weui-tab__bd list-container">
        <div class="main">
            <div v-for="(item,index) in list" :key="index">
                <div class="weui-cells" style="margin-top:0;height:65px">
                    <div class="weui-cell" style="padding: 10px 10px 15px 10px;">
                        {{index + 1}}
                        <div class="weui-cell__hd" style="padding: 0 10px 0 15px;">
                            <img width="50px" height="50px" alt="logo" src="#">
                        </div>
                        <div class="weui-cell__bd">
                            <p>{{item.phoneNumber}}</p>
                        </div>
                        <div class="weui-cell__ft color-orange">{{item.grade}}</div>
                    </div>
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
    name: "rank",

    components: {
        BottomNav
    },
    data() {
        return {
            list: [
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                },
                {
                    name: "小虎", //认购人   string
                    phoneNumber: "1888***1231", //订单号   string
                    grade: "320" //订单号   string
                },
                {
                    name: "小龙", //认购人   string
                    phoneNumber: "1688***9931", //订单号   string
                    grade: "999" //订单号   string
                }
            ]
        };
    },
    created() {},

    methods: {}
};
</script>

<style lang="scss">
</style>
