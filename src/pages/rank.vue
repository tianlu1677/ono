<template>
  <div class="rank">
    <div class="weui-tab list-header">
      <div class="box">
        <div class="winBox">
          <marquee class="marquee" behavior="scroll" direction="left">
            {{settings.ono_scroll_tips}}
          </marquee>
        </div>
      </div>
    </div>
    <avatar :account="currentAccount" :position="position"></avatar>
    <div class="weui-tab__bd ">
      <div class="main">
        <div v-for="(account,index) in accounts" :key="index">
          <div class="weui-cells" style="margin-top:0;height:65px">
            <div class="weui-cell" style="padding: 5px 10px 15px 10px;">
              <div class=" color-gray">
                    {{index + 1}}
              </div>
              <div class="weui-cell__hd item">
                <img width="50px" height="50px" style="border-radius: 50%" alt="logo" :src="account.avatar_url" v-if="account.avatar_url">
                <img  src="../common/images/ono_logo.png" width="50px" height="50px" style="border-radius: 50%" alt="" v-else>
              </div>
              <div class="weui-cell__bd item" style="min-width: 20px;" >
                <p v-if="account.nickname">{{account.nickname.substr(0, 20)}}</p>
                <p v-else>用户{{account.id}}</p>
              </div>
              <div class="weui-cell__ft color-orange item">{{account.all_amount}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-nav :currentAccount="currentAccount"></bottom-nav>
  </div>
</template>

<script>
  import Avatar from "components/avatar/avatar"
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import {getAccountInfo} from "@/api/account_api";
  import {getRank} from "@/api/account_api";
  import BottomNav from "components/bottom-nav/bottom-nav";
  // import VueMarquee from "vue-marquee";
  export default {
    name: "rank",
    mixins: [SettingsMixin],
    components: {
      BottomNav,
      Avatar
      // VueMarquee,
    },
    data() {
      return {
        accounts: [],
        position: null,

      };
    },
    async created() {
      await this.getCurrentAccount()
      this.getRank();

    },

    methods: {
      async getRank() {
        const res = await getRank();
        this.accounts = res.accounts
        this.position = res.position
      },
      async getCurrentAccount() {
        const res = await getAccountInfo()
        this.currentAccount = res
      }
    },
    mounted() {

    }
  };
</script>

<style lang="scss">
  .rank {
    overflow: auto;
    min-height: 700px;
    .item {
      margin-left: 10px;
    }
  }

</style>
