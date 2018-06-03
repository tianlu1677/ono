<template>
  <div class="about">

    <div v-html="how_to_play"></div>
  </div>
</template>

<script>
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
      this.how_to_play = res.ono_how_to_play

    },


    methods: {

    }
  }
</script>

<style lang="scss">

</style>
