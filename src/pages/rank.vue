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
            <div class="weui-cell" style="padding: 10px 10px 15px 10px;">
              <div class="flex-item-1 color-gray">
                    {{index + 1}}
              </div>
              <div class="weui-cell__hd flex-item-2">
                <img width="50px" height="50px" style="border-radius: 50%" alt="logo" :src="account.avatar_url">
              </div>
              <div class="weui-cell__bd flex-item-3">
                <p>{{account.phone}}</p>
              </div>
              <div class="weui-cell__ft color-orange flex-item-6">{{account.all_amount}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-nav></bottom-nav>
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
    created() {
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

</style>
