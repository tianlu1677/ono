<template>
  <div class="home">
    <div @click="showShareTip(false)" class="pop-window" v-show="show">
      <div class="pop-wrapper">
        <img src="../common/images/arrows.png" alt="" width="200px" height="auto">
        <p>点击右上角按钮</p>
        <p>发给好友或分享到朋友圈</p>
        <p>即可坐收丰厚ONOT奖励</p>
      </div>
    </div>
    <avatar :account.sync="currentAccount" :position="position"></avatar>
    <div class="weui-tab__bd index-container">
      <div class="main">
        <div class="weui-msg" style="padding-top:0;">
          <p class="horn weui-msg__desc">
            <img class="weui-tabbar__icon new-logo" src="../common/images/news.png" alt="news">
            <span>
                          {{settings.ono_mainpage_tips}}
                        </span>
          </p>
        </div>
        <div class="weui-msg__opr-area margin-top-10">
          <div class="weui-cell" style="padding:5px;">
            <img class="weui-cell__bd " :src="settings.ono_mainpage_png" alt="" width="90%" height="180px"
                 style="border-radius: 5px">
          </div>
          <a @click="showShareTip(true)"
             class="weui-btn weui-btn_md width-80 background-green margin-top-10">
            <span style="color: write">{{settings.ono_mainpage_btn_text}}</span>
          </a>
        </div>
      </div>
      <bottom-nav :currentAccount="currentAccount"></bottom-nav>
    </div>
    <!-- share pic -->
  </div>
</template>
<script>
  import Vue from 'vue'
  import Avatar from "components/avatar/avatar"
  import {getAccountInfo, updateAccount} from "@/api/account_api";
  import {SettingsMixin} from 'components/mixin/settings_mixin'
  import BottomNav from "components/bottom-nav/bottom-nav";
  import {base64} from 'vux'

  export default {
    name: "home",
    mixins: [SettingsMixin],
    components: {
      BottomNav,
      Avatar
    },
    data() {
      return {
        show: false,
        accounts: [],
        position: null,
      };
    },
    beforeRouteEnter(to, from, next) {
      next()
    },
    async created() {
      await this.getCurrentAccount()
      await this.showWelcomeInfo()
      await this.goToShare()
      await this.setShareInfo()
    },
    async mounted() {
    },
    async activated() {
    },

    methods: {
      setShareInfo() {
        if (this.currentAccount.id) {
          const path = `${window.location.origin}/home/ono/home?share=${this.currentAccount.id}`

          this.wxShare(
            this.settings.ono_mainpage_share_title,
            this.settings.ono_share_desc,
            path,
            this.settings.ono_mainpage_share_page
          )
          // window.wechatSettings({
          //   title: this.settings.ono_mainpage_share_title,
          //   desc: this.settings.ono_share_desc,
          //   link: path,
          //   imgUrl: this.settings.ono_mainpage_share_page,
          //   success: (res) => {
          //     // this.courseCreateAction({course_id: this.course_id, type: 'share'})
          //   }
          // })
        }
      },

      async showWelcomeInfo() {
        if (this.currentAccount.all_amount > this.currentAccount.last_amount) {
          const _this = this
          this.$vux.confirm.show({
            title: '',
            content: _this.currentAccount.message || '恭喜您获得新积分',
            showCancelButton: false,
            showConfirmButton: false,
            confirmText: '收下',
            onConfirm(value) {
              updateAccount({on_account: {last_amount: _this.currentAccount.all_amount}});
            }
          })
          // this.loadAudio().play()
          // this.loadAudio().stop()
        }
      },

      showShareTip(status=true) {
        let u = navigator.userAgent;
        let isWechat = (navigator.userAgent.indexOf('MicroMessenger') > -1)
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if(status && isWechat && isiOS){
          setTimeout(() => {
            window.location.reload()            
          }, 800);
        }
        this.show = status
      },

      goToShare() {
        const query = this.$route.query
        if (!this.currentAccount.id && query && query.share) {
          window.localStorage.setItem('share', query.share)
          this.$router.push({path: '/share'})
          return
        } else if (!this.currentAccount.id) {
          this.$router.push({path: '/sign_in'})
          return
        } else {
          // const shareParentId = base64.encode('3427' + this.currentAccount.id);
          const shareParentId = this.currentAccount.id
          const shareToken = this.$route.query.share
          if (shareParentId.toString() !== shareToken) {
            this.$router.push({path: '/home', query: {share: shareParentId}})
          }
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .home {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .horn {
    margin: 0 10px;
    text-align: left;
    color: #000;
  }

</style>
