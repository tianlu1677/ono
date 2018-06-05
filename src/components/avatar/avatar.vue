<template>
  <div class="weui-cells" style="margin-top:0;width: 100%">
    <div class="weui-cell" style="margin-top: 5px;padding: 20px 10px 20px 5px;">
      <div class="weui-cell__hd">
        <img style="width:50px;height:auto" src="">
      </div>
      <div class="weui-cell__bd">
        <p>
          大河
          <br>
          <small>
            第 114 名
          </small>
        </p>
      </div>
      <div class="weui-cell__ft">
        <p class="color-orange">666</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {CellBox, Group, Cell} from 'vux'

  export default {
    name: "avatar",
    components: {
      CellBox, Group, Cell
    },
    props: {
      account: {
        type: Object,
      },
      position: {
        type: String
      },
    },
    data() {
      return {}
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
  .avatar-wrapper {
    /*padding: 0 20px;*/
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
