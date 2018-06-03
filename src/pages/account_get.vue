<template>
  <div class="home">
    
    home

     <div class="weui-tab ono-header">
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

     <div class="weui-tab__bd" style="padding-top: 20px;">
        <div class="main">

            <!-- 模板引擎 -->
            <script src="../js/template-web.js"></script>
            <div id="content"></div>
            <!--定义模板-->
            <script id="test" type="text/html">
                
                <div class="weui-panel__bd" v-for="(item,index) in list">
                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                          <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" src="#" width="60px" height="60px">
                          </div>
                          <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{item.name}}</h4>
                            <p class="weui-media-box__desc">{{item.time}}</p>
                          </div>
                          <div class="weui-media-box__ft" style="width:20%;text-align:right">
                                <h4 class="weui-media-box__title color-orange font-weight-bold">{{item.grade}}</h4>
                                <p class="weui-media-box__desc">{{item.status}}</p>
                                <!-- <h4 ><%=list[i].grade%></h4>
                                <p ><%=list[i].status%></p> -->
                          </div>
                        </a>
                      </div>
            </script>
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__hd" style="text-align: center" id="loading-over">已加载完毕</div>
            </div>
            
        </div>


    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from "components/bottom-nav/bottom-nav";
export default {
    name: "about",

    components: {
        BottomNav
    },
    data() {
        return {
            list: [
                {
                    name: "M1", //认购人   string
                    time: "2018-6-2 12:30:45",
                    status: "待确定",
                    grade: "+15" //订单号   string
                },
                {
                    name: "M1", //认购人   string
                    time: "2018-6-2 12:30:45",
                    status: "待确定",
                    grade: "+15" //订单号   string
                },
                {
                    name: "新用户", //认购人   string
                    time: "2018-6-2 12:30:45",
                    status: "无效纪录",
                    grade: "+100" //订单号   string
                },
                {
                    name: "M1", //认购人   string
                    time: "2018-6-2 12:30:45",
                    status: "无效纪录",
                    grade: "+15" //订单号   string
                },
                {
                    name: "M1", //认购人   string
                    time: "2018-6-2 12:30:45",
                    status: "待确定",
                    grade: "+15" //订单号   string
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
