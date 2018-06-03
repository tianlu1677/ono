<template>
  <div class="bottom-wrapper">
    <div class="border-top-1px"></div>
    <ul class="item-list">
      <li class="item" @click="goPages('home')">
        <img src="../../common/images/home_blue.png" height="22.5" width="22.5" alt="" class="icon" v-if="currentTab==='home'"> 
        <img src="../../common/images/home_grey.png" height="22.5" width="22.5" alt="" class="icon" v-else>       
        <span class="text">首页</span>
      </li>
      <li class="item" @click="goPages('rank')">
        <img src="../../common/images/rank_blue.png" height="22.5" width="22.5" alt="" class="icon" v-if="currentTab === 'rank'"> 
        <img src="../../common/images/rank_grey.png" height="22.5" width="22.5" alt="" class="icon" v-else> 
        <span class="text">榜单</span>
      </li>
      <li class="item" @click="goPages('mine')">
        <img src="../../common/images/my_blue.png" height="22.5" width="22.5" alt="" class="icon" v-if="currentTab==='mine'"> 
        <img src="../../common/images/my_grey.png" height="22.5" width="22.5" alt="" class="icon" v-else> 
        <span class="text">我</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "bottom-nav",
    data() {
      return {
        home: '../../common/images/home_grey.png',
        rank: '../../common/images/rank_grey.png',
        mine: '../../common/images/my_grey.png'
      }
    },

    computed: {
      ...mapGetters(['route']),
      currentTab() {
        const path = this.$route.path
        if(path.indexOf('home') >= 0 ){
          return 'home'           
        } else if (path.indexOf('mine') >= 0 ) {          
          return 'mine'
        } else {          
          return 'rank'
        }
      }
    },
    methods: {
      goPages(type) {
        const path = "/" + type
        switch (type) {
          case 'home':
            this.$router.push({path: '/home'})
            break;
          case 'rank':
            this.$router.push({path: '/rank'})
            break;
          case 'mine':
            this.$router.push({path: '/mine'})
            break;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/styles/mixin";
  .bottom-wrapper {
    position: fixed;
    height: 50px;
    left: 0;
    right: 0;
    background-color: $white;
    bottom: 0;
    z-index: 999;
    .item-list {
      padding: 0 35px 0 35px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 26.5px;
      justify-items: center;
      .item {
        display: flex;
        flex-direction: column;
        @include extend-click(0px, -25px, 0px, -25px);
        .icon {
          margin-top: 7.5px;
          font-size: 22.5px;
          margin-bottom: 5px;
        }
        .text {
          margin: auto;
          font-size: 10px;
        }

      }
    }
  }
</style>
