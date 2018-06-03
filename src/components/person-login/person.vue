<template>
  <x-dialog v-model="showShare" class="dialog-demo" hide-on-blur>
       <div class="login-header weui-panel weui-panel_access">
       <div class="login-container weui-panel__bd flex-center">
            <div class="weui-media-box__hd " style="width: 90%">
                <h3 style="text-align: left">领取区块链红包</h3>
                <div class="flex-center">
                    <div class="width-100">
                        <input class="get-pocket" style=" 
                               " type="text" name="" id="" placeholder="请输入中国大陆 11 位手机号码">

                        <input class="get-pocket" type="text" name="" id="" placeholder="请输入 4 位验证码">
                    </div>
                </div>
                <a id="get-login" href="javascript:void(0);" class="weui-btn weui-btn_primary weui-btn_md  background-red margin-top-10">
                    立即领取 </a>
            </div>
        </div>
    </div>
    <!-- <div class="img-box">
      点击右上角分享
      <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
    </div>
    <div @click="closeShare">
      <span class="icon-cancel"></span>
    </div> -->
  </x-dialog>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import {HIDE_SHARE} from "@/store/types";

export default {
    name: "share-dialog",
    components: {},

    data() {
        return {};
    },
    watch: {},
    computed: {
        ...mapGetters({
            showShare: "showShare"
        })
    },

    methods: {
        closeShare() {
            this.onHideShare();
        },
        ...mapMutations({
            onHideShare: HIDE_SHARE
        })
    }
};
</script>

<style scoped lang="scss">
</style>
