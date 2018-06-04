<template>
  <div class="rank">
   
     <div class="weui-tab list-header">
        <div class="box">
            <div class="winBox">
              <marquee class="marquee"  behavior="scroll" direction="left">最大的自由、价值平等、去中心化的文章分享中心。</marquee>
                <!-- <ul class="scroll">
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
                </ul> -->
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
                            <img width="50px" height="50px" alt="logo" src="../common/images/my_blue.png">
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
import {getRank} from "@/api/account_api";
import BottomNav from "components/bottom-nav/bottom-nav";
// import VueMarquee from "vue-marquee";
export default {
    name: "rank",

    components: {
        BottomNav
        // VueMarquee,
    },
    data() {
        return {
            listItem: null,
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

    methods: {
        hi(){
            console.log('hi:');
        },
        async getRank(){
            const res = await getRank({

            });

            console.log('res:',res);
            res.status === 200 &&(
                this.listItem = res
            )
        }
    },
    mounted(){
        this.hi();
        this.getRank();
    }
};
</script>

<style lang="scss">
</style>
