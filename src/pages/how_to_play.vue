<template>
  <div class="about">
    <div v-html="how_to_play"></div>
  </div>
</template>

<script>
  import {getAccountInfo} from "@/api/account_api";
  import {getAbout} from "@/api/account_api";

  export default {
    name: "how_to_play",

    components: {
    },

    data() {
      return {
        how_to_play: ''
      }
    },

    async created() {
      const res = await getAbout()
      this.how_to_play =res.ono_about_project ;
    },

    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .about {
    height: 100%;
    overflow: auto;
    padding: 20px;
  }
</style>
