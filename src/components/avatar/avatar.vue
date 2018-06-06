<template>
  <div class="avatar">
    <div class="weui-cells" style="margin-top:0;width: 100%">
      <div class="weui-cell" style="">
        <div class="weui-cell__hd">
          <img style="width:50px;height:50px" class="cover" :src="avatar_url" v-if="avatar_url">
          <img style="width:50px;height:50px" class="cover" src="../../common/images/ono_logo.png" v-else>
        </div>
        <div class="weui-cell__bd desc">
           <span class="text" @click="editAccount" v-if="account.id">
              {{account.nickname}} <i class="cubeic-edit"></i>
           </span>

          <span class="text" @click="goSignIn" v-else>
              未登录
           </span>

          <span class="text" v-if="position" style="color: gray">
              第 {{position}} 名
            </span>
        </div>
        <div class="weui-cell__ft">
          <p class="color-orange">{{account.all_amount}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {getAccountInfo, updateAccount} from "@/api/account_api";
  export default {
    name: "avatar",
    components: {},
    props: {
      account: {
        type: Object,
      },
      position: {
        type: [String, Number]
      },
    },
    data() {
      return {
        nickname: ''
      }
    },
    computed: {
      avatar_url() {
        return this.account.avatar_url
      },

    },
    created() {
    },
    methods: {
      goSignIn() {
        this.$router.push({path: '/sign_in'})
      },
      editAccount() {
        const _this = this
        this.$vux.confirm.prompt('新名称', {
          title: '修改用户名',
          showCancelButton: false,
          showConfirmButton: false,
          confirmText: '确定',
          onConfirm(value) {
            let nickname = value.substr(0, 6)
            updateAccount({on_account: {nickname: nickname}}).then(function (res) {
              _this.account = res
            });
          }
        })
      }
    }

  }
</script>

<style scoped lang="scss">
  .avatar {
    padding-top: 5px;
    /*padding: 0 20px;*/
    .cover {
      border-radius: 50%;
    }
    .desc {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      .text {
        font-size: 14px;
      }
    }
  }
</style>
