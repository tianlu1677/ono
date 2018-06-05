<template>
  <div class="avatar">
    <div class="weui-cells" style="margin-top:0;width: 100%">
      <div class="weui-cell" style="">
        <div class="weui-cell__hd">
          <img style="width:50px;height:auto" class="cover" :src="avatar_url">
        </div>
        <div class="weui-cell__bd desc">
           <span class="text">
              {{account.nickname}}
           </span>
            <span class="text" v-if="position">
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
  export default {
    name: "avatar",
    components: {},
    props: {
      account: {
        type: Object,
      },
      position: {
        type: String
      },
    },
    data() {
      return {

      }
    },
    computed: {
      avatar_url() {
        return this.account.avatar_url
      }
    },
    created() {
    },
    methods: {}

  }
</script>

<style scoped lang="scss">
  .avatar {
    padding: 0 20px;
    .cover {
      border-radius: 50%;
    }
    .desc {
      display: flex;
      flex-direction: column;
      .text {
        font-size: 14px;
      }
    }
  }
</style>
