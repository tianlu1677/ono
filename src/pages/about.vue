<template>
  <div class="about">
    <div v-html="about"></div>
  </div>
</template>

<script>
  import {getAccountInfo} from "@/api/account_api";
  import {getAbout} from "@/api/account_api";

  export default {
    name: "about",

    components: {},

    data() {
      return {
        about: ''
      }
    },
    async created() {
      const res = await getAbout()
      this.about = res.ono_how_to_play;
    },

    methods: {}
  }
</script>

<style scoped lang="scss">
  .about {
    overflow: auto;
    height: 100%;
    min-height: 700px;
    padding: 20px;
  }
</style>
